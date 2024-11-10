
function submitCart() {
    const email = "2024acek645f@kab.ac.ug";
    const subject = "Cart Submission";
    const body = cart.map(item => `${item.title}: Shs${item.price}`).join('<br>') +
                 `<br><br>Total: $${document.getElementById('cart-total').innerText}` +
                 `<br><br>Location: ${document.getElementById('location').value}` +
                 `<br><br>Phone: ${document.getElementById('phone').value}` +
                 `<br><br>Address: ${document.getElementById('address').value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: email,
        Password: "9B50EA530BFE09271469EA47D925548659B4",
        To: email,
        From: email,
        Subject: subject,
        Body: body, // Fixing the Body concatenation
    }).then(
            () => {
              success();
              
            }
    ).catch(
        error => {
                        () => {
              success();
              
            }
        }
    );
}

// Assuming you already have the event listener for the form submission
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    submitCart();
});