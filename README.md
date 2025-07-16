# Change Their Lives - Zero Barriers

A modern, responsive website for the Zero Barriers organization, focused on empowering individuals to overcome barriers and achieve their full potential.

## Features

- **Modern Design**: Clean, responsive layout using Tailwind CSS
- **Zero Barriers Branding**: Uses the organization's red and green color scheme
- **Accessible**: Built with accessibility in mind
- **Fast Loading**: Optimized for performance
- **Mobile Friendly**: Responsive design that works on all devices

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
- **Build Command**: Leave empty (no build process needed)
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
├── index.html          # Main website file
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Customization

### Colors
The website uses Zero Barriers brand colors:
- **Green** (`#16a34a`): Used for growth areas and positive elements
- **Red** (`#dc2626`): Used for areas needing improvement

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

**Zero Barriers** - Empowering individuals to overcome barriers and achieve their full potential. 