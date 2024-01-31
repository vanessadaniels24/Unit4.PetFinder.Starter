async function getPetByOwner() {
    const owner = document.getElementById('owner').value;
    const resultContainer = document.getElementById('resultContainer');
    
    try {
        const response = await fetch(`/api/v1/pets/owner?owner=${owner}`);
        const data = await response.json();

        if (response.ok) {
            resultContainer.innerHTML = `<p>Pet found:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            resultContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        resultContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}

async function getPetByName() {
    const petName = document.getElementById('petName').value;
    const resultContainer = document.getElementById('resultContainer');

    try {
        const response = await fetch(`/api/v1/pets/${petName}`);
        const data = await response.json();

        if (response.ok) {
            resultContainer.innerHTML = `<p>Pet found:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            resultContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
        resultContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}