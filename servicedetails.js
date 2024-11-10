
        function loadServiceDetails(serviceId) {
    // Find the selected service by id
    const selectedService = services.find(service => service.id === serviceId);

    // Set service title and description
    document.getElementById('service-title').innerText = selectedService.title;
    document.getElementById('service-description').innerText = selectedService.description;
    document.getElementById('service-price').innerText = `Shs${selectedService.price}`;
    
    // Set the service image
    const serviceImage = document.getElementById('service-image'); // Use the correct ID 'service-image'
    if (serviceImage) {
        serviceImage.src = selectedService.image;
        serviceImage.alt = selectedService.title;
    }

    // Dynamically set the "Add to Cart" button
    const addToCartBtn = document.getElementById('add-to-cart-btn'); // Make sure you have this button in your HTML
    if (addToCartBtn) {
        addToCartBtn.setAttribute('onclick', `addToCart(${selectedService.id})`);
    }
document.getElementById('grid-section').style.display = 'none';

    document.getElementById('service-details').style.display = 'block';

    // Generate the horizontal grid of other services
    generateOtherServices(serviceId);
}