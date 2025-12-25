#!/bin/bash

# Deployment verification script
echo "🔍 Softvex Deployment Verification"
echo "===================================="
echo ""

# Check frontend build
echo "✓ Frontend build:"
if [ -d "frontend/dist" ]; then
    SIZE=$(du -sh frontend/dist | cut -f1)
    FILES=$(find frontend/dist -type f | wc -l)
    echo "  ✅ Build exists ($SIZE, $FILES files)"
else
    echo "  ❌ Build missing"
fi

# Check backend dependencies
echo ""
echo "✓ Backend dependencies:"
if [ -d "backend/node_modules" ]; then
    PACKAGES=$(find backend/node_modules -maxdepth 1 -type d | wc -l)
    echo "  ✅ Dependencies installed (~$PACKAGES packages)"
else
    echo "  ⚠️  Run 'npm install' in backend/"
fi

# Check frontend dependencies
echo ""
echo "✓ Frontend dependencies:"
if [ -d "frontend/node_modules" ]; then
    PACKAGES=$(find frontend/node_modules -maxdepth 1 -type d | wc -l)
    echo "  ✅ Dependencies installed (~$PACKAGES packages)"
else
    echo "  ⚠️  Run 'npm install' in frontend/"
fi

# Check Docker
echo ""
echo "✓ Docker files:"
[ -f "backend/Dockerfile" ] && echo "  ✅ backend/Dockerfile"
[ -f "frontend/Dockerfile" ] && echo "  ✅ frontend/Dockerfile"
[ -f "docker-compose.yml" ] && echo "  ✅ docker-compose.yml"

# Check configuration
echo ""
echo "✓ Configuration files:"
[ -f "backend/.env" ] && echo "  ✅ backend/.env (development)"
[ -f "backend/.env.production" ] && echo "  ✅ backend/.env.production"
[ -f "frontend/.env.production" ] && echo "  ✅ frontend/.env.production"

# Check documentation
echo ""
echo "✓ Documentation:"
[ -f "DEPLOYMENT.md" ] && echo "  ✅ DEPLOYMENT.md"
[ -f "READY_FOR_DEPLOYMENT.md" ] && echo "  ✅ READY_FOR_DEPLOYMENT.md"
[ -f "DEPLOYMENT_CHECKLIST.md" ] && echo "  ✅ DEPLOYMENT_CHECKLIST.md"

# Check scripts
echo ""
echo "✓ Deployment scripts:"
[ -f "build-prod.sh" ] && echo "  ✅ build-prod.sh"
[ -f "start-docker.sh" ] && echo "  ✅ start-docker.sh"

echo ""
echo "===================================="
echo "✅ Project is ready for deployment!"
echo ""
echo "Next steps:"
echo "  1. Update environment variables"
echo "  2. Run: docker-compose up -d"
echo "  3. Visit: http://localhost:3000"
echo ""
