document.addEventListener('DOMContentLoaded', () => {
    // Product data object (dummy data for demonstration)
    const productData = {
        "product": {
            "id": 6937548554342,
            "title": "Embrace Sideboard",
            "description": "The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.",
            "vendor": "Marmeto",
            "product_type": "Cloth",
            "price": "$12999.00",
            "compare_at_price": "$19999",
            "options": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "Yellow": "#ECDECC"
                        },
                        {
                            "Green": "#BBD278"
                        },
                        {
                            "Blue": "#BBC1F8"
                        },
                        {
                            "Pink": "#FFD3F8"
                        }
                    ]
                },
                {
                    "name": "Size",
                    "position": 2,
                    "values": [
                        "Small",
                        "Medium",
                        "Large",
                        "Extra large",
                        "XXL"
                    ]
                }
            ],
            "images": [
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732"
                },
                {
                    "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731"
                }
            ]
        }
    };

    // Populate product data
    document.querySelector('.product-title').textContent = productData.product.title;
    document.querySelector('.product-vendor').textContent = productData.product.vendor;
    document.querySelector('.product-price').innerHTML = `${productData.product.price} <span class="discount">35% Off</span>`;
    document.querySelector('.original-price').textContent = productData.product.compare_at_price;
    document.querySelector('.product-description').textContent = productData.product.description;

    // Populate images
    const mainImage = document.querySelector('.main-image');
    mainImage.src = productData.product.images[0].src;
    const thumbnailSection = document.querySelector('.thumbnail-section');
    productData.product.images.forEach((image, index) => {
        // Create thumbnail images dynamically
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            mainImage.src = image.src; // Change main image on thumbnail click
        });
        thumbnailSection.appendChild(thumbnail); // Append thumbnail to thumbnail section
    });

    // Populate color options
    const colorOptions = document.querySelector('.color-options');
    productData.product.options[0].values.forEach(color => {
        // Create color options dynamically
        const colorSpan = document.createElement('span');
        const colorName = Object.keys(color)[0];
        const colorValue = color[colorName];

        colorSpan.classList.add('color');
        colorSpan.style.backgroundColor = colorValue;

        colorSpan.addEventListener('click', () => {
            // Highlight selected color
            document.querySelectorAll('.color').forEach(c => c.style.border = '1px solid #ccc');
            colorSpan.style.border = '2px solid black';
            colorSpan.style.boxShadow = '0 0 5px 2px rgba(0, 0, 0, 0.3)';
        });

        colorOptions.appendChild(colorSpan); // Append color option to color options
    });

    // Populate size options
    const sizeOptions = document.querySelector('.size-options');
    productData.product.options[1].values.forEach(size => {
        // Create size buttons dynamically
        const sizeButton = document.createElement('button');
        sizeButton.textContent = size;
        sizeButton.classList.add('size');
        sizeButton.addEventListener('click', () => {
            // Handle size selection
            document.querySelectorAll('.size').forEach(s => {
                s.classList.remove('active'); // Remove active class from all size buttons
                s.style.color = '#888'; // Reset text color for all buttons
                s.style.border = '1px solid #ccc'; // Reset border for all buttons
            });
            
            sizeButton.classList.add('active'); // Add active class to clicked size button
            sizeButton.style.color = 'black'; // Change text color of active button
            sizeButton.style.border = '1px solid black'; // Change border color of active button
        });
        sizeOptions.appendChild(sizeButton); // Append size button to size options
    });

    // Event listeners for quantity buttons
    document.getElementById('increase').addEventListener('click', increaseQuantity);
    document.getElementById('decrease').addEventListener('click', decreaseQuantity);

    // Add to cart button functionality
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        alert('Item added to cart!'); // Alert on add to cart button click
    });
});

// Function to increase quantity
function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    let currentQuantity = parseInt(quantity.textContent);
    quantity.textContent = currentQuantity + 1;
}

// Function to decrease quantity
function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    let currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 1) {
        quantity.textContent = currentQuantity - 1;
    }
}
