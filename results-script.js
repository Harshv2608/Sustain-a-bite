// Fetch matches from the backend
fetch('http://localhost:3000/get-matches')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const matches = data.matches;

            // Clear previous rows in the tables
            document.querySelector('#donor-table tbody').innerHTML = '';
            document.querySelector('#recipient-table tbody').innerHTML = '';

            // Prepare donor rows
            let donorRows = '';
            matches.forEach(match => {
                donorRows += `
                    <tr>
                        <td>${match.Donor}</td>
                        <td>${match.FoodType}</td>
                        <td>${match.QuantityTransferred}</td>
                        <td>${match.Recipient}</td>
                        <td>${match.RecipientLocation}</td>
                        <td>${match.ExpirationDate}</td>
                        <td>${match.Priority}</td>
                    </tr>
                `;
            });
            // Append all donor rows at once
            document.querySelector('#donor-table tbody').innerHTML = donorRows;

            // Prepare recipient rows
            let recipientRows = '';
            matches.forEach(match => {
                recipientRows += `
                    <tr>
                        <td>${match.Recipient}</td>
                        <td>${match.FoodType}</td>
                        <td>${match.QuantityTransferred}</td>
                        <td>${match.Donor}</td>
                        <td>${match.DonorContact}</td>
                        <td>${match.ExpirationDate}</td>
                        <td>${match.Priority}</td>
                    </tr>
                `;
            });
            // Append all recipient rows at once
            document.querySelector('#recipient-table tbody').innerHTML = recipientRows;
        } else {
            console.error(data.message);
            alert('No matches found.');
        }
    })
    .catch(error => {
        console.error('Error fetching matches:', error);
    });
