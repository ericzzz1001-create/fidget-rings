# Fidget Rings E-Commerce Store 💍

A modern, responsive e-commerce website for fidget rings built with HTML, CSS, and JavaScript.

## Features

✨ **Product Showcase**
- 8 premium fidget ring products
- Product ratings and descriptions
- Emoji-based visual indicators
- Responsive product grid layout

🛒 **Shopping Cart**
- Add/remove products
- Quantity management
- Real-time cart count
- Modal cart display
- Local storage persistence (cart survives page refresh)

💳 **Checkout**
- Order summary with total price calculation
- Demo checkout functionality
- Order confirmation alerts

📧 **Contact**
- Contact form for customer inquiries
- Form validation and submission handling
- Success notifications

🎨 **Design Features**
- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Professional color scheme (purple & blue)
- Toast notifications for user actions

## File Structure

```
fidget-rings/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive layout
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and gradients
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **Local Storage API** - Cart persistence

## How to Use

1. **View Products** - Scroll through the product catalog with detailed descriptions and prices
2. **Add to Cart** - Click "Add to Cart" on any product
3. **View Cart** - Click the cart icon (🛒) in the top-right corner
4. **Manage Cart** - Adjust quantities or remove items
5. **Checkout** - Click checkout to complete your purchase
6. **Contact Us** - Fill out the contact form for inquiries

## Product Catalog

- Stainless Steel Ring - $12.99
- Gold Plated Ring - $14.99
- Rainbow Spinner - $9.99
- Black Onyx Ring - $15.99
- Titanium Pro - $19.99
- Rose Gold Classic - $13.99
- Crystal Diamond Ring - $17.99
- Matte Black Minimal - $11.99

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Features in Detail

### Shopping Cart
- Items are saved to browser's local storage
- Cart persists across browser sessions
- Real-time price calculation
- Quantity controls for each item

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly buttons
- Optimized layouts for all screen sizes

### User Notifications
- Toast notifications when items are added
- Success messages for form submissions
- Order confirmation alerts

## Customization

### Adding Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 9,
    name: "Your Product Name",
    price: 19.99,
    emoji: "🎨",
    description: "Product description",
    rating: "⭐⭐⭐⭐⭐"
}
```

### Styling
Modify colors and styles in `styles.css`. Key color variables:
- Primary: #667eea (purple)
- Secondary: #764ba2 (darker purple)
- Accent: #f093fb (pink)

## Future Enhancements

- Product filtering and search
- User authentication
- Real payment gateway integration
- Order tracking
- Customer reviews
- Wishlist functionality
- Product variants (size, color)
- Inventory management

## License

Created for educational purposes.

---

Made with 💜 for fidget ring enthusiasts!