# Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Configure Backend

Create `.env` file in `backend/` directory:

```bash
cd backend
```

Create a file named `.env` with this content:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Note:** Email configuration is optional. The contact form will work without it, but you won't receive email notifications.

### Step 3: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

You should see: `🚀 Server running on port 5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

You should see: `Local: http://localhost:3000`

### Step 4: Open in Browser

Visit: **http://localhost:3000**

## ✅ Verification Checklist

- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] Website loads in browser
- [ ] Navigation works
- [ ] Contact form submits (check browser console for API calls)
- [ ] All pages accessible

## 🐛 Common Issues

### Port Already in Use

**Backend:**
- Change `PORT=5000` to `PORT=5001` in `backend/.env`
- Update `FRONTEND_URL` in `backend/.env` if needed

**Frontend:**
- Vite will automatically use the next available port
- Or change port in `frontend/vite.config.ts`

### Module Not Found Errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Make sure `FRONTEND_URL` in `backend/.env` matches your frontend URL.

## 📧 Email Setup (Optional)

To enable email notifications for contact forms:

1. Get Gmail App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App Passwords
   - Generate password for "Mail"

2. Update `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@softvex.com
EMAIL_TO=info@softvex.com
```

## 🎨 Customization

- **Company Name**: Search and replace "Softvex" in all files
- **Colors**: Edit `frontend/tailwind.config.js`
- **Content**: Update pages in `frontend/src/pages/`
- **Services**: Modify `frontend/src/pages/Services.tsx`

## 📚 Next Steps

1. Read the full [README.md](./README.md) for detailed documentation
2. Customize content and branding
3. Set up email notifications
4. Deploy to production

---

**Need Help?** Check the main README.md or contact support.

