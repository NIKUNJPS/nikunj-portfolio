# API Contracts & Integration Plan

## Overview
This document outlines the API contracts for Nikunj Shah's portfolio backend integration.

## Current Implementation Status
- ✅ **Frontend**: Fully functional with all UI components and animations
- ⏳ **Backend**: Contact form currently using mock data
- ⏳ **Database**: MongoDB ready for contact message storage

## Mock Data Locations
Currently, the contact form submission is mocked in:
- `/app/frontend/src/components/Contact.js` - Form submission shows mock success message

## Backend API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",  
  "subject": "string",
  "message": "string"
}
```

**Response** (Success):
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response** (Error):
```json
{
  "success": false,
  "error": "Error message"
}
```

**Database Schema** (contacts collection):
```python
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "timestamp": "datetime",
  "read": "boolean (default: false)"
}
```

### 2. Resume Download (Optional Enhancement)
**Endpoint**: `GET /api/resume/download`

**Response**: PDF file download

## Frontend Integration Steps

### Contact Form Integration
1. Update `/app/frontend/src/components/Contact.js`:
   - Replace mock submission with actual API call
   - Use `axios.post(API + '/contact', formData)`
   - Handle loading states
   - Display success/error messages from backend

Example integration:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setStatus('error');
    console.error('Failed to send message:', error);
  }
};
```

## Backend Implementation Checklist

### Models to Create
- [ ] ContactMessage model with validation

### Routes to Create
- [ ] POST /api/contact - Save contact form submission
- [ ] GET /api/contact - (Admin) Retrieve all messages
- [ ] GET /api/resume/download - Serve resume PDF

### Additional Features to Consider
- [ ] Email notification when new contact message is received
- [ ] Rate limiting on contact form endpoint
- [ ] Spam protection (basic validation)
- [ ] Admin panel to view/manage contact messages

## Notes
- Frontend is production-ready and fully functional with mock data
- Backend integration is straightforward - just need to implement the contact endpoint
- All UI animations and interactions are working perfectly
- Mobile responsive design is implemented
