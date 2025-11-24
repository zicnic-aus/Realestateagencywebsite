# EmailJS Template Configuration Guide

## Your Current Credentials
- **Service ID:** service_6sy1jgo ✓
- **Template ID:** template_xs4qkn5 ✓  
- **Public Key:** KkRydc6F5rfj5z4Xq ✓

## Problem: Form Details Not Coming Through

If emails are being sent successfully but form details are missing, your EmailJS template variables need to be configured correctly.

## Solution: Configure Your EmailJS Template

### Step 1: Access Your Template
Go to: https://dashboard.emailjs.com/admin/templates/template_xs4qkn5

### Step 2: Set the Recipient Email
In the template settings, find the **"To Email"** field and set it to:
```
info@immd.au
```

Or use the dynamic variable:
```
{{to_email}}
```

### Step 3: Configure Template Content

Replace your entire template content with this:

#### Template Content for Combined Forms:

**Subject Line:**
```
New Enquiry from {{from_name}}
```

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #003B5C; color: #D4AF37; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #003B5C; }
        .value { margin-left: 10px; }
        .footer { background-color: #E6F2F8; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Enquiry - IMMD Realty</h1>
    </div>
    
    <div class="content">
        <h2>Contact Information</h2>
        <div class="field">
            <span class="label">Name:</span>
            <span class="value">{{from_name}}</span>
        </div>
        <div class="field">
            <span class="label">Email:</span>
            <span class="value">{{from_email}}</span>
        </div>
        <div class="field">
            <span class="label">Phone:</span>
            <span class="value">{{phone}}</span>
        </div>
        
        <h2>Enquiry Details</h2>
        <div class="field">
            <span class="label">Service Required:</span>
            <span class="value">{{service}}</span>
        </div>
        <div class="field">
            <span class="label">Property Type:</span>
            <span class="value">{{property_type}}</span>
        </div>
        <div class="field">
            <span class="label">Budget:</span>
            <span class="value">{{budget}}</span>
        </div>
        <div class="field">
            <span class="label">Location:</span>
            <span class="value">{{location}}</span>
        </div>
        <div class="field">
            <span class="label">Timeline:</span>
            <span class="value">{{timeline}}</span>
        </div>
        
        <h2>Message</h2>
        <div style="background-color: #F5F5F5; padding: 15px; border-left: 3px solid #D4AF37;">
            {{message}}
        </div>
    </div>
    
    <div class="footer">
        <p>This enquiry was submitted through the IMMD Realty website.</p>
        <p>Reply to: {{reply_to}}</p>
        <p><strong>IMMD Realty</strong> | 3 Explorers Road, White Rock, QLD 4306 | 0411 317 102</p>
    </div>
</body>
</html>
```

### Step 4: Set the Reply-To Field
In the template settings, find the **"Reply To"** field and set it to:
```
{{reply_to}}
```

This ensures when you reply to the email, it goes directly to the customer.

### Step 5: Variable Names Reference

Make sure these EXACT variable names are used in your template (they're case-sensitive and must use underscores):

**For Inquiry Form:**
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{reply_to}}` - Customer's email (for replies)
- `{{phone}}` - Customer's phone number
- `{{service}}` - Service they selected (Buyer's Agent, Seller's Agent, etc.)
- `{{property_type}}` - Property type (House, Apartment, etc.)
- `{{budget}}` - Budget range selected
- `{{location}}` - Preferred location
- `{{timeline}}` - When they plan to proceed
- `{{message}}` - Additional information

**For Contact Form:**
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email
- `{{reply_to}}` - Customer's email (for replies)
- `{{phone}}` - Customer's phone number
- `{{message}}` - Their message

### Step 6: Save and Test

1. Click "Save" in your EmailJS template editor
2. Test the template using EmailJS's built-in test feature
3. Then test from your website by submitting a form
4. Check your browser console - you should see: "Sending inquiry with parameters:" followed by all the data
5. Check your email at info@immd.au - all fields should now be populated

## Common Issues and Solutions

### Issue: Some fields show "Not specified"
**Solution:** This is normal for optional fields (property_type, budget, location, timeline) when users don't fill them in.

### Issue: All fields are empty in the email
**Solution:** 
1. Check that variable names in template match EXACTLY (case-sensitive)
2. Make sure you're using double curly braces: `{{variable_name}}`
3. Check for typos - use underscores not camelCase (e.g., `property_type` not `propertyType`)

### Issue: Email has {{variable_name}} literally shown
**Solution:** The variable isn't recognized. Double-check spelling and that you're using the exact names listed above.

### Issue: HTML not rendering
**Solution:** In EmailJS template settings, make sure "Content Type" is set to "HTML" not "Plain Text"

## Testing Checklist

Fill out the inquiry form with test data for each field:
- [x] Name appears in email
- [x] Email appears in email
- [x] Phone appears in email
- [x] Service selection appears
- [x] Property type appears
- [x] Budget range appears
- [x] Location appears
- [x] Timeline appears
- [x] Message text appears
- [x] Reply-to works when you click reply

## Need Help?

1. Check browser console for "Sending inquiry with parameters:" - this shows what data is being sent
2. Compare the console output variable names with your template variable names
3. They must match EXACTLY (including underscores and lowercase)
4. EmailJS dashboard has a "Logs" section showing recent sends and any errors

---

Once configured correctly, every form submission will send a properly formatted email with all customer details to info@immd.au!
