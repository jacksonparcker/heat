
        // Add item to the cart
        function addToCart(serviceId) {
            const selectedService = services.find(service => service.id === serviceId);
            cart.push(selectedService);
            updateCart();
        }

        // Update cart icon and display total
        function updateCart() {
            const cartCount = document.getElementById('cart-count');
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');

            cartCount.innerText = cart.length;

            // Populate cart items
            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `<span>${item.title}</span> <span>Shs${item.price}</span>
                                      <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>`;
                cartItemsContainer.appendChild(cartItem);
            });

            cartTotal.innerText = total.toFixed(2);
        }

        // Remove item from cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
        // Toggle cart popup visibility
        function toggleCartPopup() {
            const cartPopup = document.getElementById('cart-popup');
            cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
        }
