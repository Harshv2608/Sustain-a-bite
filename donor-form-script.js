document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let donorData = {
        restaurantName: document.getElementById("restaurantName").value,
        foodType: document.getElementById("foodType").value,
        quantity: document.getElementById("quantity").value,
        location: document.getElementById("location").value,
        expirationDate: document.getElementById("expirationDate").value,
        priority: document.getElementById("priority").value,
        contactInfo: document.getElementById("contactInfo").value
    };

    console.log("Donor data to be sent:", donorData);

    fetch('http://localhost:3000/donor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donorData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from backend:", data);
        if (data.success) {
            alert("Donor information submitted successfully!");
            window.location.href = "results.html";
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error submitting data:", error);
        alert("Error submitting data: " + error.message);
    });
});
