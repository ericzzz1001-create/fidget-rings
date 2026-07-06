// Product data
const products = [
    {
        id: 1,
        name: "Stainless Steel Ring",
        price: 12.99,
        emoji: "🌀",
        description: "Premium stainless steel with smooth rotation",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 2,
        name: "Gold Plated Ring",
        price: 14.99,
        emoji: "✨",
        description: "Elegant gold plated design for everyday wear",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        name: "Rainbow Spinner",
        price: 9.99,
        emoji: "🌈",
        description: "Colorful multi-band ring spinner",
        rating: "⭐⭐⭐⭐☆"
    },
    {
        id: 4,
        name: "Black Onyx Ring",
        price: 15.99,
        emoji: "⚫",
        description: "Sleek black stone inlay with smooth bearings",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 5,
        name: "Titanium Pro",
        price: 19.99,
        emoji: "⚡",
        description: "Ultra-durable titanium construction",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 6,
        name: "Rose Gold Classic",
        price: 13.99,
        emoji: "💕",
        description: "Beautiful rose gold finish with comfort fit",
        rating: "⭐⭐⭐⭐☆"
    },
    {
        id: 7,
        name: "Crystal Diamond Ring",
        price: 17.99,
        emoji: "💎",
        description: "Cubic zirconia stones for extra sparkle",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 8,
        name: "Matte Black Minimal",
        price: 11.99,
        emoji: "⬛",
        description: "Modern minimalist design in matte black",
        rating: "⭐⭐⭐⭐☆"
    }
];

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadCartFromLocalStorage();
    setupContactForm();
});

// Load products into the grid
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-rating">${product.rating}</div>
                <div class="price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToLocalStorage();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartCount();
    displayCart();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Display cart
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        totalPriceSpan.textContent = '0.00';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div>
                    <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = cartHTML;
    totalPriceSpan.textContent = total.toFixed(2);
}

// Open cart modal
function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
    displayCart();
}

// Close cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Setup cart icon click
document.addEventListener('click', function(event) {
    if (event.target.closest('.cart-icon')) {
        openCart();
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
        closeCart();
    }
};

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order! Total: $${total.toFixed(2)}\n\nThis is a demo. In a real application, you would be redirected to a payment processor.`);
    
    // Clear cart
    cart = [];
    saveCartToLocalStorage();
    updateCartCount();
    closeCart();
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
}

// Scroll to shop
function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// Local storage functions
function saveCartToLocalStorage() {
    localStorage.setItem('fidgetRingsCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('fidgetRingsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 999;
        animation: slideInRight 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);