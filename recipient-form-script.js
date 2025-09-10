document.getElementById("recipientForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let recipientData = {
        organizationName: document.getElementById("organizationName").value,
        foodType: document.getElementById("foodType").value,
        recipientLocation: document.getElementById("recipientLocation").value,
        maxCapacity: document.getElementById("maxCapacity").value,
        urgency: document.getElementById("urgency").value,
        contactInfo: document.getElementById("contactInfo").value
    };

    console.log("Recipient data to be sent:", recipientData);

    fetch('https://sustain-a-bite-backend.onrender.com/recipient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipientData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from backend:", data);
        if (data.success) {
            alert("Recipient information submitted successfully!");
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
