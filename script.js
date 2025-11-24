// Cart array to store items
let cart = [];

// Display welcome message
function showMessage() {
    alert('Welcome to BEYOND! Start shopping now!');
    console.log('User clicked Shop Now button');
}

// Add item to cart
function addToCart(productName) {
    cart.push(productName);
    console.log(`${productName} added to cart`);
    console.log(`Cart now contains ${cart.length} items`);
    
    // Show confirmation
    const message = `${productName} has been added to your cart! (Total items: ${cart.length})`;
    alert(message);
    updateCartDisplay();
}

// Update cart display in console
function updateCartDisplay() {
    console.clear();
    console.log('=== BEYOND Shopping Cart ===');
    if (cart.length === 0) {
        console.log('Your cart is empty');
    } else {
        cart.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
        console.log(`\nTotal items: ${cart.length}`);
    }
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;
    
    // Log to console
    console.log('Form submitted:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Show confirmation
    alert(`Thank you, ${name}! We received your message and will get back to you soon.`);
    
    // Reset form
    form.reset();
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('BEYOND website loaded successfully!');
});

// Simple animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.product-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
