# Change Their Lives - Empowering Communities

A modern, responsive website for Change Their Lives, a non-profit organization dedicated to transforming communities through comprehensive programs that address education, healthcare, and economic development.

## Features

- **Modern Design**: Clean, responsive layout using Tailwind CSS
- **Change Their Lives Branding**: Uses the organization's blue and gold color scheme
- **Accessible**: Built with accessibility in mind
- **Fast Loading**: Optimized for performance
- **Mobile Friendly**: Responsive design that works on all devices
- **Complete Content**: Includes all main sections: Home, About, Sponsors, Partners, and Contact
- **Advanced SEO**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Spam Prevention**: Multi-layer protection including reCAPTCHA, honeypot fields, rate limiting, and input validation
- **Analytics Integration**: Google Analytics 4 with custom event tracking and performance monitoring
- **Search Optimization**: Keyword targeting, Core Web Vitals tracking, and social media optimization

## Technology Stack

- HTML5
- CSS3 (with Tailwind CSS)
- Vanilla JavaScript
- No build process required - ready for static hosting

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ShayneIsMagic/changetheirlives.git
   cd changetheirlives
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` in your browser

## Deployment to Cloudflare Pages

This project is configured for easy deployment to Cloudflare Pages:

### Build Settings for Cloudflare Pages:
- **Build Command**: `npm run build`
- **Build Output Directory**: `.` (root directory)
- **Root Directory**: Leave empty (use repository root)

### Deployment Steps:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Select the `changetheirlives` repository
7. Configure build settings as above
8. Click **Save and Deploy**

The site will be available at: `https://changetheirlives.pages.dev`

## Project Structure

```
changetheirlives/
├── index.html          # Main landing page
├── pages/              # Additional pages (about, contact, sponsors, partners)
├── assets/             # Images, videos, and other assets
├── styles/             # CSS stylesheets
├── scripts/            # JavaScript files
├── core/               # Header and footer components
├── package.json        # Project configuration and build scripts
├── _redirects          # Cloudflare Pages routing configuration
├── _headers            # Security and performance headers
├── sitemap.xml         # XML sitemap for search engines
├── robots.txt          # Search engine crawling guidelines
├── seo-config.js       # SEO and analytics configuration
├── scripts/spam-prevention.js  # Multi-layer spam prevention
├── SEO-ANALYTICS-SETUP.md      # Comprehensive setup guide
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Website Sections

The website includes the following sections:

### Home
- Hero section with mission statement
- Call-to-action buttons

### About
- Organization overview
- Three main program areas: Education, Healthcare, Economic Development
- Mission statement and impact statistics

### Sponsors
- Information about different types of sponsors
- Call-to-action for potential sponsors

### Partners
- Strategic and program partners
- Partnership opportunities

### Contact
- Complete contact information
- Social media links
- Ways to get involved

## Contact Information

- **Address**: 518 E 800 N, Suite D, Orem, UT 84097
- **Email**: info@changetheirlives.org
- **Social Media**:
  - LinkedIn: https://www.linkedin.com/company/change-their-lives/
  - Facebook: https://www.facebook.com/people/Change-Their-Lives/61555553176499/
  - Instagram: https://www.instagram.com/change.their.lives/

## Customization

### Colors
The website uses Change Their Lives brand colors:
- **Primary Blue** (`#1e40af`): Main brand color
- **Secondary Blue** (`#3b82f6`): Supporting color
- **Accent Gold** (`#f59e0b`): Highlight color

### Content
Update the content in `index.html` to match your organization's specific:
- Mission and vision
- Programs and services
- Impact statistics
- Contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

The website is optimized for fast loading:
- Minimal dependencies (only Tailwind CSS CDN)
- Optimized images and assets
- Efficient CSS and JavaScript
- No unnecessary external requests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions about this website, please contact:
- Email: info@changetheirlives.org
- GitHub Issues: [Create an issue](https://github.com/ShayneIsMagic/changetheirlives/issues)

---

**Change Their Lives** - Empowering communities through education, healthcare, and economic development. 