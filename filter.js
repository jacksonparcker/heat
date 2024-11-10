
function filterServicesByType(selectedType) {
    const serviceContainer = document.getElementById('servi-grid');
    serviceContainer.innerHTML = ''; // Clear previous content

    // Filter services based on the selected type, or show all if 'All' is selected
    const filteredServices = selectedType === 'All' 
        ? services 
        : services.filter(service => service.type === selectedType);

    // If no services are found, display a message
    if (filteredServices.length === 0) {
        serviceContainer.innerHTML = '<p>No services available for this category.</p>';
        return;
    }

    // Loop through filtered services and dynamically create service elements
    filteredServices.forEach(service => {
        const serviceElement = document.createElement('div');
        
        serviceElement.className = 'grid-item';

        // Set the inner HTML of the service element
        serviceElement.innerHTML = `
            <div>
                <img src="${service.image}" class="serviceimage" alt="${service.title}">
            </div>
            <div class="item-name">${service.title}</div>
            <div class="item-price">Shs${service.price}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${service.id})">Add to Cart</button>
        `;

        // Add event listener to load service details when clicked
        serviceElement.addEventListener('click', () => {
    document.querySelector('.grid-sectio').style.display = 'none';
    loadServiceDetails(service.id);
});

        // Append the new service element to the container
        serviceContainer.appendChild(serviceElement);
    });
 // Hide the details section
            document.getElementById('filter-items').style.display = 'none'; // Hide the details section
            document.getElementById('profile-details').style.display = 'none'; // Hide the details section
            document.getElementById('tosend').style.display = 'none'; // Hide the details section
            document.getElementById('cart-popup').style.display = 'none'; // Hide the details section
            document.getElementById('grid-sectio').style.display = 'block'; // Hide the details section
            
}

function filterServices() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const gridContainer = document.getElementById('services-grid');
    gridContainer.innerHTML = ''; // Clear the grid
              document.getElementById('service-details').style.display = 'none'; // Hide the details section
            document.getElementById('filter-items').style.display = 'none'; // Hide the details section
            document.getElementById('profile-details').style.display = 'none'; // Hide the details section
            document.getElementById('tosend').style.display = 'none'; // Hide the details section
            document.getElementById('cart-popup').style.display = 'none'; // Hide the details section
            document.getElementById('grid-sectio').style.display = 'none'; // Hide the details section
            document.getElementById('grid-section').style.display = 'block'; // Show the grid section
            document.getElementById('grid-section').style.display = 'block';
    services.filter(service => service.title.toLowerCase().includes(query))
        .forEach(filteredService => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Ensure the correct service image is used
            gridItem.innerHTML = `
                <img src="${filteredService.image}" class="serviceimage" alt="${filteredService.title} image">
                <div class="item-name">${filteredService.title}</div>
                <div class="item-price">Shs${filteredService.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${filteredService.id})">Add to Cart</button>
            `;
            gridItem.addEventListener('click', () => loadServiceDetails(filteredService.id));
            gridContainer.appendChild(gridItem);
            
        });
}

        // Load the grid items on page load
        window.onload = generateGridItems;