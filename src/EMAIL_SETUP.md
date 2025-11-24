# Email Setup Instructions for IMMD Realty Website

Your website forms are now configured to automatically send emails to info@immd.au using EmailJS. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (the free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Important:** Set the "From Email" to your IMMD email address
6. Note your **Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create TWO templates - one for the inquiry form and one for the contact form.

### Template 1: Property Inquiry Form

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Property Inquiry Form

**Subject:** Property Enquiry from {{from_name}}

**Content:**
```
New Property Enquiry from IMMD Realty Website

Contact Details:
----------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service Details:
----------------
Service Required: {{service}}
Property Type: {{property_type}}
Budget/Price Range: {{budget}}
Preferred Location: {{location}}
Timeline: {{timeline}}

Additional Information:
----------------------
{{message}}

---
This enquiry was submitted via the IMMD Realty website inquiry form.
```

4. Set "To Email" to: info@immd.au
5. Save the template and note your **Template ID**

### Template 2: Contact Form

1. Create another new template
2. Use this template content:

**Template Name:** Contact Form Message

**Subject:** Contact Message from {{from_name}}

**Content:**
```
New Contact Message from IMMD Realty Website

Contact Details:
----------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
--------
{{message}}

---
This message was submitted via the IMMD Realty website contact form.
```

3. Set "To Email" to: info@immd.au
4. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (it's a string of characters)
3. Copy this key

## Step 5: Update Your Website Code

Now you need to update two files with your EmailJS credentials:

### File 1: /components/InquiryForm.tsx

Find these lines (around line 54-56):
```typescript
const serviceId = "YOUR_EMAILJS_SERVICE_ID";
const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";
```

Replace with your actual values:
```typescript
const serviceId = "service_xxxxxxx";  // Your Service ID from EmailJS
const templateId = "template_xxxxxxx";  // Your Property Inquiry Template ID
const publicKey = "your_public_key_here";  // Your Public Key (NOT Private Key!)
```

**IMPORTANT:** Make sure to use your **Public Key**, not your Private Key. The Public Key can be found at: https://dashboard.emailjs.com/admin/account

### File 2: /components/Contact.tsx

Find these lines (around line 67-69):
```typescript
const serviceId = "YOUR_EMAILJS_SERVICE_ID";
const templateId = "YOUR_EMAILJS_CONTACT_TEMPLATE_ID";
const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";
```

Replace with your actual values:
```typescript
const serviceId = "service_xxxxxxx";  // Same Service ID as above
const templateId = "template_yyyyyyy";  // Your Contact Form Template ID
const publicKey = "your_public_key_here";  // Same Public Key as above
```

### How to Find Your Credentials:

1. **Service ID**: 
   - Go to https://dashboard.emailjs.com/admin
   - Click on "Email Services"
   - Your Service ID is shown in the list (looks like "service_abc123xyz")

2. **Template IDs**: 
   - Go to https://dashboard.emailjs.com/admin/templates
   - Each template shows its Template ID (looks like "template_abc123xyz")
   - You need TWO different template IDs - one for each form

3. **Public Key**: 
   - Go to https://dashboard.emailjs.com/admin/account
   - Under "API Keys" section, copy your Public Key
   - It's a long string like "xHy9_zAbC123XyZaBc1_D"
   - **DO NOT use the Private Key!**

## Step 6: Test Your Forms

1. Visit your website
2. Fill out the inquiry form and submit it
3. Check info@immd.au inbox for the email
4. Test the contact form as well
5. Verify both emails arrive correctly formatted

## Important Notes

- **Free Tier Limit:** 200 emails per month (should be sufficient for most small businesses)
- **Upgrade if needed:** If you exceed the limit, EmailJS offers paid plans starting at $9/month
- **Security:** Your EmailJS credentials are public (they run in the browser), which is normal for EmailJS. The service is designed to be used this way safely.
- **Spam Protection:** Consider adding reCAPTCHA if you receive spam submissions (EmailJS supports this)

## Troubleshooting

**Emails not sending?**
- Check your EmailJS dashboard for error logs
- Verify all IDs are entered correctly
- Make sure your email service is properly connected
- Check the browser console for error messages

**Emails going to spam?**
- Add info@immd.au to your contacts
- Check your email service's spam settings
- Consider using a custom domain email (instead of Gmail/Outlook)

**Need help?**
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their website

---

Once configured, your forms will automatically send emails to info@immd.au whenever someone submits them. No manual email client opening required!
