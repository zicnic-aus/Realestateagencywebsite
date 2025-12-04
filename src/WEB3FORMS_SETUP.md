# Web3Forms Setup Guide for IMMD Realty

Web3Forms is a simple, reliable form backend service that sends form submissions directly to your email (info@immd.odoo.com). It requires no complex template configuration - just an access key!

## Why Web3Forms?

- **Simple & Reliable**: No complex templates to configure
- **Free**: Generous free tier (250 submissions/month)
- **No Dashboard Required**: Once set up, it just works
- **All Form Data Included**: Automatically includes all fields in the email
- **Built-in Spam Protection**: reCAPTCHA and honeypot protection included
- **Professional Emails**: Well-formatted HTML emails with all form details

## Quick Setup (5 minutes)

### Step 1: Get Your Access Key

1. Go to https://web3forms.com
2. Click "Get Started for Free"
3. Enter your email address: **info@immd.odoo.com**
4. Click "Create Access Key"
5. Check your email inbox for the verification email
6. Click the verification link in the email
7. Copy your Access Key (it looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

✅ **COMPLETED** - Your access key: `b371f800-fa57-4bfa-9c13-e6e433aeb642`

### Step 2: Update Your Website

✅ **COMPLETED** - Both files have been updated with your access key.

#### File 1: `/components/InquiryForm.tsx`

Find this line (around line 49):
```javascript
const accessKey = "b371f800-fa57-4bfa-9c13-e6e433aeb642";
```

#### File 2: `/components/Contact.tsx`

Find this line (around line 67):
```javascript
const accessKey = "b371f800-fa57-4bfa-9c13-e6e433aeb642";
```

### Step 3: Test Your Forms

1. Visit your website
2. Fill out either the contact form or inquiry form
3. Click Submit
4. Check your email at info@immd.odoo.com
5. You should receive a well-formatted email with all form details!

## What You'll Receive

### For Contact Form Submissions:
```
Subject: New Contact Form Message - IMMD Realty

From: [First Name] [Last Name]
Email: [Customer Email]
Phone: [Phone Number]

Message:
[Customer Message]
```

### For Inquiry Form Submissions:
```
Subject: New Property Enquiry - [Service Type]

From: [Customer Name]
Email: [Customer Email]
Phone: [Phone Number]

Service: [Selected Service]
Property Type: [Selected Type or "Not specified"]
Budget: [Budget Range or "Not specified"]
Location: [Preferred Location or "Not specified"]
Timeline: [Timeline or "Not specified"]

Additional Information:
[Customer Message or "No additional information provided"]
```

## Customisation Options (Optional)

You can customise Web3Forms by adding these fields to the `formPayload` object in both form files:

### Redirect After Submit
```javascript
redirect: "https://yourdomain.com/thank-you"
```

### Custom Reply-To Email
```javascript
replyto: formData.email  // Already included
```

### Custom Email Template
Add to the dashboard at https://web3forms.com/dashboard after logging in with your access key.

## Troubleshooting

### Not Receiving Emails?

1. **Check Spam Folder**: Web3Forms emails might be in spam initially
2. **Verify Access Key**: Make sure you copied the entire access key
3. **Whitelist Sender**: Add noreply@web3forms.com to your contacts
4. **Check Console**: Open browser DevTools and check for errors

### Form Shows Error Message?

- Your access key `b371f800-fa57-4bfa-9c13-e6e433aeb642` is already configured in both files
- Verify your access key is active (check email for verification)
- Check browser console for specific error messages

## Advantages Over EmailJS

1. **No Template Configuration**: EmailJS required complex template setup with variable matching
2. **More Reliable**: Web3Forms has better deliverability
3. **Simpler Setup**: Just one access key vs Service ID + Template ID + Public Key
4. **Better Formatting**: Automatic HTML formatting of emails
5. **No Dashboard Required**: EmailJS required logging in to configure templates

## Free Tier Limits

- 250 submissions per month
- If you need more, Web3Forms offers affordable paid plans
- You can monitor usage at https://web3forms.com/dashboard

## Support

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: support@web3forms.com
- For IMMD Realty website issues: Contact your web developer

## Migration from EmailJS

The old EmailJS configuration has been completely replaced with Web3Forms. You can delete these files:
- `/EMAILJS_TEMPLATE_SETUP.md`
- `/EMAIL_SETUP.md`

All form submissions will now go directly to info@immd.odoo.com with better formatting and reliability.