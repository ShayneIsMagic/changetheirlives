# Cloudflare Pages Deployment Guide

## 🚀 Quick Deployment

### Step 1: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Connect to Git**

### Step 2: Configure Repository
1. **Authorize Cloudflare** to access your GitHub account
2. **Select Repository**: `ShayneIsMagic/changetheirlives`
3. Click **Begin setup**

### Step 3: Build Settings
Configure the following settings:

- **Project Name**: `changetheirlives` (or your preferred name)
- **Production Branch**: `main`
- **Framework Preset**: `None`
- **Build Command**: `npm run build`
- **Build Output Directory**: `.` (root directory)
- **Root Directory**: Leave empty (use repository root)

### Step 4: Environment Variables (Optional)
Add any required environment variables:
- `NODE_ENV=production`

### Step 5: Deploy
1. Click **Save and Deploy**
2. Wait for build to complete (1-3 minutes)
3. Your site will be available at: `https://changetheirlives.pages.dev`

## 🔧 Configuration Files

### _headers
- Security headers for XSS protection
- Content Security Policy
- Performance optimization headers
- Proper caching for static assets

### _redirects
- Handles routing for single-page application
- Ensures all routes work properly

### robots.txt
- Search engine crawling guidelines
- Sitemap location specified
- Bad bot blocking

### sitemap.xml
- All pages included with proper priorities
- Images and videos included
- Last modified dates specified

## 🐛 Troubleshooting

### Common Issues

#### 1. Header/Footer Not Loading
**Problem**: Header and footer components not displaying
**Solution**: 
- Check browser console for JavaScript errors
- Verify all script files are present in `/scripts/` directory
- Ensure paths are correct (relative to current page)

#### 2. CSS Not Loading
**Problem**: Styles not applying correctly
**Solution**:
- Check if CSS files exist in `/styles/` directory
- Verify paths in HTML files are correct
- Clear browser cache

#### 3. Images Not Displaying
**Problem**: Images showing as broken
**Solution**:
- Verify all images exist in `/assets/images/` directory
- Check image paths in HTML files
- Ensure image files are not corrupted

#### 4. 404 Errors
**Problem**: Pages returning 404
**Solution**:
- Check `_redirects` file configuration
- Verify all HTML files exist in correct locations
- Ensure file names match navigation links

### Debug Steps

1. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for JavaScript errors
   - Check Network tab for failed requests

2. **Verify File Structure**
   ```
   changetheirlives/
   ├── index.html
   ├── pages/
   │   ├── about.html
   │   ├── contact.html
   │   ├── sponsors.html
   │   └── partners.html
   ├── assets/
   │   ├── images/
   │   └── videos/
   ├── styles/
   ├── scripts/
   ├── core/
   ├── _headers
   ├── _redirects
   ├── robots.txt
   └── sitemap.xml
   ```

3. **Test Locally**
   ```bash
   # Start local server
   npm run dev
   
   # Or use Python
   python3 -m http.server 8000
   
   # Visit http://localhost:8000
   ```

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] All images optimized and compressed
- [ ] CSS and JavaScript minified (if needed)
- [ ] Favicon and app icons present
- [ ] Meta tags properly configured
- [ ] Analytics tracking code added
- [ ] reCAPTCHA configured
- [ ] Contact form working

### Post-deployment Verification
- [ ] All pages load correctly
- [ ] Header and footer display on all pages
- [ ] Navigation links work
- [ ] Contact form submits successfully
- [ ] Images and videos load
- [ ] Mobile responsiveness works
- [ ] Analytics tracking active

## 🔒 Security Features

### Implemented Security Measures
- ✅ reCAPTCHA v2 on contact form
- ✅ Honeypot fields for spam prevention
- ✅ Rate limiting (3 submissions per hour)
- ✅ Input validation and sanitization
- ✅ CSRF protection tokens
- ✅ Content Security Policy headers
- ✅ XSS protection headers

### Additional Recommendations
- Set up Google Analytics 4 property
- Configure Google Search Console
- Set up email notifications for form submissions
- Monitor spam prevention logs

## 📈 SEO Optimization

### Implemented Features
- ✅ Comprehensive meta tags
- ✅ Structured data (Schema.org)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs

### Next Steps
1. Submit sitemap to Google Search Console
2. Set up Google Analytics 4
3. Monitor Core Web Vitals
4. Track keyword rankings

## 🌐 Custom Domain Setup

### Step 1: Add Custom Domain
1. Go to your Pages project
2. Click **Custom Domains**
3. Click **Set up a custom domain**
4. Enter your domain name

### Step 2: Configure DNS
1. Add the required DNS records to your domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Verify domain is working

### Step 3: SSL Certificate
- Cloudflare automatically provides SSL certificates
- No additional configuration needed

## 📞 Support

### If You Need Help
1. Check the troubleshooting section above
2. Review browser console for errors
3. Test locally to isolate issues
4. Contact support with specific error messages

### Useful Resources
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community Forum](https://community.cloudflare.com/)
- [GitHub Issues](https://github.com/ShayneIsMagic/changetheirlives/issues)

---

**Your site should now be successfully deployed and accessible via Cloudflare Pages!** 