// Fetch and display items when the page loads
function fetchItems() {
    fetch('/api/items/')  // Call the API endpoint for GET request
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            const itemList = document.getElementById('item-list');
            itemList.innerHTML = '';  // Clear the current list
            data.forEach(item => {
                const li = document.createElement('li');  // Create new list item
                li.textContent = `${item.title}: ${item.description}`;  // Set content
                itemList.appendChild(li);  // Append to the list
            });
        })
        .catch(error => console.error('Error fetching items:', error));
}


document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const title = document.getElementById('item-title').value;
    const description = document.getElementById('item-description').value;

    // Send a POST request to add a new item
    fetch('/api/items/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
            'Content-Type': 'application/json',  // Send as JSON
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ title, description })  // Stringify the data
    })
    .then(response => response.json())
    .then(data => {
        console.log('Item added:', data);  // Log the added item
        fetchItems();  // Refresh the item list
    })
    .catch(error => console.error('Error adding item:', error));

    // Clear the input fields
    document.getElementById('item-title').value = '';
    document.getElementById('item-description').value = '';
});

// Fetch items on page load
fetchItems();
