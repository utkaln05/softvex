#!/bin/bash

# Build script for production
echo "🔨 Building Softvex for production..."
echo ""

# Build Backend
echo "📦 Backend setup..."
cd backend
npm install --production
cd ..

# Build Frontend
echo "📦 Frontend build..."
cd frontend
npm install
npm run build
cd ..

echo ""
echo "✅ Production build complete!"
echo ""
echo "Output locations:"
echo "  • Frontend: frontend/dist/"
echo "  • Backend: backend/"
echo ""
echo "Next steps:"
echo "  1. Docker Compose: docker-compose up -d"
echo "  2. Deploy frontend/dist/ to your hosting"
echo "  3. Deploy backend/ to your server"
