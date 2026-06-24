# Chatka Grzybowo - Static Website

Modern, maintenance-free static website for Chatka Grzybowo room rentals.

## 📁 Structure

```
chatkagrzybowo/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Interactive features
├── images/             # Room photos (add your images here)
└── README.md           # This file
```

## 🖼️ Adding Images

Place your images in the `images/` folder with these names:

- `room-4person.jpg` - 4-person room
- `room-4person-balcony.jpg` - 4-person room with balcony
- `room-3person-balcony.jpg` - 3-person room with balcony
- `kitchen.jpg` - Kitchen area

**Recommended image specs:**
- Format: JPG or PNG
- Size: 800x600px or similar aspect ratio
- File size: < 500KB (compressed)

## 💰 Updating Prices

Open `index.html` and find the `<section id="pricing">` section (around line 190).

Edit the price values directly:

```html
<div class="price-value">od 200 zł/noc</div>
```

## 📝 Updating Content

All content is in `index.html`. Key sections to edit:

### Contact Information (lines 15-25)
- Email: `chatkagrzybowo@gmail.com`
- Phone: `513 442 515`
- Social media links

### Room Descriptions (lines 70-150)
Edit text, features, and amenities for each room.

### Amenities (lines 155-180)
Update what you offer guests.

### Pricing (lines 185-220)
Update room prices and seasonal notes.

## 🚀 Deployment

### Option 1: FTP Upload
1. Upload all files to your web server via FTP
2. Make sure `index.html` is in the root directory
3. Done!

### Option 2: Any Static Hosting
Works with:
- Netlify (drag & drop)
- GitHub Pages
- Cloudflare Pages
- Any web host with FTP

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css` (lines 10-19):

```css
:root {
    --primary-color: #2c5f8d;      /* Main blue */
    --secondary-color: #48a9a6;    /* Teal accent */
    --accent-color: #e76f51;       /* Orange buttons */
}
```

### Fonts
Change font family in `css/style.css` (line 22):

```css
font-family: 'Your Font', sans-serif;
```

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ No dependencies (no jQuery, no frameworks)
- ✅ Fast loading
- ✅ Smooth scrolling navigation
- ✅ Scroll animations
- ✅ SEO-friendly
- ✅ Zero maintenance required

## 🔧 Technical Details

- Pure HTML5, CSS3, JavaScript (ES6+)
- No build process needed
- No package manager required
- Works on all modern browsers
- Compatible with any web server

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Make sure images are in the `images/` folder
- Try clearing browser cache

**Styling looks broken?**
- Verify `css/style.css` uploaded correctly
- Check browser console for errors
- Clear browser cache

**Smooth scrolling not working?**
- Verify `js/script.js` uploaded correctly
- Check browser console for JavaScript errors

## 📞 Support

For questions about this website, contact: Maciej Tułaza

---

**Last updated:** June 2026
**Version:** 1.0
