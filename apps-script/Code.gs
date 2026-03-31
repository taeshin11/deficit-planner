/**
 * Google Apps Script for Deficit Planner
 *
 * Handles:
 * 1. Calculator data collection (POST with calculator data)
 * 2. Feedback submission (POST with type:"feedback")
 * 3. Visitor counting (GET returns today/total counts)
 * 4. Page visit logging (POST with type:"visit")
 *
 * SETUP:
 * 1. Create a new Google Sheet
 * 2. Create 3 tabs: "calculations", "visitors", "feedback"
 * 3. Open Extensions > Apps Script
 * 4. Paste this code into Code.gs
 * 5. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL and set it as NEXT_PUBLIC_SHEETS_WEBHOOK_URL in your .env.local
 */

const SPREADSHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === "feedback") {
      // Handle feedback submission
      let sheet = ss.getSheetByName("feedback");
      if (!sheet) {
        sheet = ss.insertSheet("feedback");
        sheet.appendRow(["timestamp", "message", "email", "page"]);
      }
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.message || "",
        data.email || "",
        data.page || ""
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", type: "feedback" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (data.type === "visit") {
      // Handle page visit logging
      let sheet = ss.getSheetByName("visitors");
      if (!sheet) {
        sheet = ss.insertSheet("visitors");
        sheet.appendRow(["timestamp"]);
      }
      sheet.appendRow([new Date().toISOString()]);
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", type: "visit" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Default: calculator data collection
    let sheet = ss.getSheetByName("calculations");
    if (!sheet) {
      sheet = ss.insertSheet("calculations");
      sheet.appendRow([
        "timestamp", "current_weight", "goal_weight", "timeframe_days",
        "activity_level", "age", "gender", "height", "unit_system",
        "daily_deficit", "daily_target_cal", "user_agent", "referrer"
      ]);
    }
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.current_weight || "",
      data.goal_weight || "",
      data.timeframe_days || "",
      data.activity_level || "",
      data.age || "",
      data.gender || "",
      data.height || "",
      data.unit_system || "",
      data.daily_deficit || "",
      data.daily_target_cal || "",
      data.user_agent || "",
      data.referrer || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", type: "calculation" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("visitors");

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ today: 0, total: 0 }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    const total = Math.max(0, data.length - 1); // exclude header row

    // Count today's visits
    const todayStr = new Date().toISOString().split("T")[0];
    let today = 0;
    for (let i = 1; i < data.length; i++) {
      const rowDate = new Date(data[i][0]).toISOString().split("T")[0];
      if (rowDate === todayStr) {
        today++;
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ today: today, total: total }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ today: 0, total: 0, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
