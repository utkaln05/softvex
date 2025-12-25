#!/bin/bash

echo "Starting Softvex Development Environment..."
echo ""

# Get the script directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Start backend in the background
echo "Starting Backend Server..."
cd "$DIR/backend"
npm run dev &
BACKEND_PID=$!

# Give backend time to start
sleep 2

# Start frontend
echo "Starting Frontend Server..."
cd "$DIR/frontend"
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✓ Backend running on http://localhost:5000"
echo "✓ Frontend running on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
