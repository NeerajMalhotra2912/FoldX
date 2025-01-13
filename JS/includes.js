// Function to load an HTML file into a specified element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ' + filePath);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Load the navbar and footer
loadHTML('navbar', 'navbar.html');
// loadHTML('footer', 'footer.html');
