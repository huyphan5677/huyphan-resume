# My Resume Portfolio

A modern, responsive portfolio website with two distinct views:

## 🌐 Web View (`index.html`)
- Modern, interactive portfolio website
- Tabbed navigation (About, Experience, Education, Skills)
- Responsive design with beautiful gradients and animations
- Mobile-friendly layout
- Contact information with clickable links

## 📄 Resume View (`resume.html`)
- Clean, professional resume format
- Optimized for PDF export
- Print-friendly styling
- Traditional resume layout
- One-click PDF export functionality

## 🚀 Features

- **Easy Content Management**: All content is stored in `config.js` for easy editing
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **PDF Export**: Resume version can be exported to PDF with Ctrl+P or the export button
- **GitHub Pages Ready**: Automatic deployment to GitHub Pages
- **Professional Styling**: Clean, modern design that looks great in both web and print formats

## 📁 Project Structure

```
├── config.js          # All your personal data and content
├── index.html          # Interactive web portfolio
├── resume.html         # PDF-exportable resume
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment
└── README.md           # This file
```

## ✏️ Editing Your Content

All your personal information, experience, education, and skills are stored in `config.js`. Simply edit this file to update your portfolio:

```javascript
const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  },
  experience: [
    {
      company: "Company Name",
      position: "Your Position",
      duration: "Date Range",
      achievements: [
        "Your achievements..."
      ]
    }
  ],
  // ... more sections
};
```

## 🚀 Deploying to GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Make sure it's public for GitHub Pages

2. **Upload Your Files**
   - Upload all files to your repository
   - Make sure to include the `.github/workflows/deploy.yml` file

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The deployment will happen automatically on each push

4. **Access Your Site**
   - Your portfolio will be available at: `https://yourusername.github.io/repository-name`

## 📱 Usage

### Web View
- Navigate to `index.html` (or your GitHub Pages URL)
- Use the tabs to explore different sections
- Responsive design adapts to your screen size
- Click "View Resume" to access the PDF-ready version

### Resume View
- Navigate to `resume.html`
- Click "Export to PDF" or press Ctrl+P to save as PDF
- Professional formatting optimized for applications
- Click "Web View" to return to the interactive portfolio

## 🎨 Customization

### Colors
The main brand color is defined in the CSS. To change it, update these values:
- Primary color: `#667eea`
- Secondary color: `#764ba2`

### Styling
- Edit the `<style>` sections in the HTML files to customize appearance
- The web view uses modern CSS Grid and Flexbox
- The resume view uses print-optimized styles

### Content
- All content is in `config.js`
- Add new sections by extending the configuration object
- Update the HTML templates if you add new data fields

## 📞 Support

If you need help customizing your portfolio or have questions about deployment, feel free to reach out!

## 📄 License

This project is open source and available under the MIT License.
