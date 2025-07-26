# Tech for Girls - Registration Form

A modern, responsive React registration form for the Tech for Girls community. This application includes all the features you requested with a beautiful, user-friendly interface.

## Features

### ✅ Basic Details Section
- **Name**: Text input field
- **Phone Number**: Number input field  
- **Email ID**: Email input field with validation
- **College/Department**: Dropdown with common engineering departments

### ✅ WhatsApp Sharing with Counter
- **Share on WhatsApp Button**: Opens WhatsApp with pre-written message
- **Click Counter**: Tracks clicks (2/5 format)
- **Completion Message**: Shows "Sharing complete. Please continue." after 5 clicks
- **Pre-written Message**: "Hey Buddy, Join Tech For Girls Community"

### ✅ Screenshot Upload
- **File Upload**: Supports images, PDFs, and documents
- **File Validation**: Shows uploaded file name with confirmation
- **Required Field**: Must upload before submission

### ✅ Submit Registration
- **Form Validation**: Ensures all fields are completed
- **WhatsApp Requirement**: Must complete 5 WhatsApp shares
- **File Requirement**: Must upload a file
- **Success Message**: Shows completion message after submission
- **Form Disable**: Prevents multiple submissions

### ✅ Good UI Design
- **Modern Design**: Clean, professional appearance
- **Responsive**: Works on desktop, tablet, and mobile
- **Gradient Backgrounds**: Beautiful color schemes
- **Smooth Animations**: Hover effects and transitions
- **Typography**: Inter font family for readability

### ✅ Single Submission
- **localStorage**: Saves submission status
- **Form Disable**: Prevents resubmission after refresh
- **Persistent State**: Remembers completion across sessions

## Project Structure

```
src/
├── components/
│   ├── RegistrationForm.tsx    # Main form component
│   └── RegistrationForm.css    # Form styles
├── App.tsx                     # Main app component
├── App.css                     # App styles
├── index.tsx                   # Entry point
└── index.css                   # Global styles
```

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## How to Use

1. **Fill Basic Details**: Enter your name, phone, email, and select your department
2. **Share on WhatsApp**: Click the WhatsApp button 5 times to share the message
3. **Upload File**: Upload your resume, screenshot, or any relevant file
4. **Submit**: Click submit registration when all requirements are met
5. **Success**: See the completion message

## Technical Details

- **Framework**: React 18 with TypeScript
- **Styling**: CSS with modern design principles
- **State Management**: React hooks (useState, useEffect)
- **Local Storage**: For submission persistence
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Proper labels and form structure

## Features in Detail

### WhatsApp Integration
- Uses WhatsApp Web API (`wa.me`)
- Opens in new tab/window
- Tracks click count in component state
- Disables button after 5 clicks

### File Upload
- Accepts multiple file types (images, PDFs, documents)
- Shows file name after upload
- Validates file presence before submission

### Form Validation
- Required field validation
- Email format validation
- Custom validation for WhatsApp clicks and file upload
- Disabled state management

### UI/UX Features
- Gradient backgrounds and buttons
- Smooth hover animations
- Loading states and feedback
- Success messages
- Responsive breakpoints

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The form data is logged to console (you can integrate with your backend)
- WhatsApp sharing opens in a new tab
- File uploads are handled client-side
- localStorage prevents multiple submissions
- All styling is custom CSS (no external UI libraries)

## Customization

You can easily customize:
- Colors in the CSS files
- WhatsApp message text
- College/department options
- File upload restrictions
- Form validation rules

---

**Built with ❤️ for Tech for Girls Community** 