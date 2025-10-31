# News Web Application - Project Documentation

## Overview
This is a Next.js-based news portal application (v3.2.1) that was migrated from Vercel to Replit. The application is a frontend client that connects to a separate backend API for content management.

## Project Architecture

### Technology Stack
- **Frontend Framework**: Next.js 14.2.5 (Pages Router)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit with Redux Persist
- **Authentication**: Firebase Authentication
- **Push Notifications**: Firebase Cloud Messaging
- **API Client**: Axios with custom interceptors

### Application Structure
This is a **frontend-only application** that requires a separate backend API to function. The app is NOT a standalone application.

**Frontend (this Replit project)**:
- Next.js application
- Handles UI/UX, routing, and user interactions
- Communicates with backend API for all data operations
- Uses Firebase for authentication and push notifications

**Backend (separate service - NOT included)**:
- REST API that provides news content, user management, categories, etc.
- Must be hosted separately and accessible via URL
- Endpoints include: get_settings, get_news, get_categories, user_signup, etc.

## Critical Setup Requirements

### 1. Backend API Configuration (**REQUIRED**)
The application WILL NOT work without a properly configured backend API. You must:

1. **Deploy the backend API** (separate codebase, not included here)
2. **Update `NEXT_PUBLIC_API_URL`** in Replit Secrets with your backend API URL

**Without a working backend API, the application will:**
- Hang during page compilation
- Show errors when loading pages
- Fail to display any content

### 2. Firebase Configuration (**REQUIRED for authentication**)
Set up Firebase project and add these secrets in Replit Secrets:
- `NEXT_PUBLIC_API_KEY` - Firebase API key
- `NEXT_PUBLIC_AUTH_DOMAIN` - Firebase auth domain
- `NEXT_PUBLIC_PROJECT_ID` - Firebase project ID
- `NEXT_PUBLIC_STORAGE_BUCKET` - Firebase storage bucket  
- `NEXT_PUBLIC_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `NEXT_PUBLIC_APP_ID` - Firebase app ID
- `NEXT_PUBLIC_MEASUREMENT_ID` - Firebase measurement ID (analytics)
- `NEXT_PUBLIC_VAPID_KEY` - Firebase VAPID key (push notifications)

### 3. Application Configuration
Set these in Replit Secrets:
- `NEXT_PUBLIC_WEB_URL` - Your website URL (e.g., https://your-site.replit.app)
- `NEXT_PUBLIC_WEB_NAME` - Your news portal name

## Current Status

### Migration Changes Applied
- ✅ Updated package.json scripts for Replit (port 5000, bind to 0.0.0.0)
- ✅ Updated server.js to bind to 0.0.0.0:5000
- ✅ Installed Node.js 20 and all npm dependencies
- ✅ Configured workflow for Next.js development server
- ✅ .gitignore properly configured for Next.js

### Known Issues
- ⚠️ **Backend API not configured** - Application will hang without proper API URL
- ⚠️ **Firebase credentials are placeholders** - Authentication won't work until configured
- ⚠️ **Server-side rendering will fail** until backend API is accessible

## How to Complete Setup

1. **Get your backend API running**:
   - Deploy your news backend API separately
   - Ensure it's accessible via HTTPS URL
   - Note the API base URL (e.g., https://api.your-news-site.com)

2. **Configure Replit Secrets**:
   - Go to Tools → Secrets in Replit
   - Add all the environment variables listed above
   - Most importantly: `NEXT_PUBLIC_API_URL` with your backend URL

3. **Set up Firebase**:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication and Cloud Messaging
   - Copy the config values to Replit Secrets

4. **Restart the application**:
   - The workflow will automatically restart
   - The app should compile and run successfully

## Environment Variables Reference

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| NEXT_PUBLIC_API_URL | **YES** | Backend API base URL | https://api.example.com |
| NEXT_PUBLIC_WEB_URL | **YES** | Frontend website URL | https://news.replit.app |
| NEXT_PUBLIC_WEB_NAME | **YES** | Site name | "My News Portal" |
| NEXT_PUBLIC_API_KEY | **YES** | Firebase API key | AIza... |
| NEXT_PUBLIC_AUTH_DOMAIN | **YES** | Firebase auth domain | app.firebaseapp.com |
| NEXT_PUBLIC_PROJECT_ID | **YES** | Firebase project ID | my-project |
| NEXT_PUBLIC_STORAGE_BUCKET | **YES** | Firebase storage | app.appspot.com |
| NEXT_PUBLIC_MESSAGING_SENDER_ID | **YES** | Firebase sender ID | 123456789 |
| NEXT_PUBLIC_APP_ID | **YES** | Firebase app ID | 1:123:web:abc |
| NEXT_PUBLIC_MEASUREMENT_ID | **YES** | Firebase analytics | G-ABC123 |
| NEXT_PUBLIC_VAPID_KEY | **YES** | Firebase VAPID key | BN... |
| NEXT_PUBLIC_SEO | No | Enable SSR | "false" (default) |
| NEXT_PUBLIC_DEMO | No | Demo mode | "false" (default) |

## Deployment

The application is configured for Replit deployment. When ready to publish:
1. Ensure all secrets are configured in production environment
2. Click the "Publish" button in Replit
3. The app will build and deploy automatically

## Troubleshooting

**App hangs during compilation:**
- Check that `NEXT_PUBLIC_API_URL` points to a working backend API
- Verify the backend API is accessible and returning responses
- Check Replit Secrets are properly set

**Authentication not working:**
- Verify all Firebase credentials in Secrets
- Check Firebase Console that Authentication is enabled
- Ensure Firebase project has web platform configured

**Pages showing errors:**
- Check browser console for specific errors
- Verify backend API is returning expected data format
- Check that all required environment variables are set

## Recent Changes
- **2025-10-31**: Initial migration from Vercel to Replit completed
  - Configured for Replit environment (port 5000, 0.0.0.0 binding)
  - Dependencies installed
  - Workflow configured
  - Documentation created
