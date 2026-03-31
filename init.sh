#!/bin/bash
# Deficit Planner — Dev Server Init Script
set -e

echo "==> Installing dependencies..."
npm install

echo "==> Starting development server..."
npm run dev &

sleep 3
echo ""
echo "✅ Dev server running at: http://localhost:3000"
echo ""
