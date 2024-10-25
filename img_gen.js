const search = document.querySelector('#search');
const searchbtn = document.querySelector('#search-btn');
const imgContainer = document.querySelector('.image-container');

searchbtn.addEventListener('click', async () => {
    const search_value = search.value.trim();
    
    if (search_value === '') {
        alert('Please enter a search term');
        return;
    }

    const key = '0iDU6E4clY07SdAO-LmG0G-GUfjiZYrjeuZPwe3X2rY';
    const url = `https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        disImages(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});

function disImages(data) {
    imgContainer.innerHTML = ''; // Clear previous images

    data.results.forEach(element => {
        const img = document.createElement('img');
        img.src = element.urls.regular;
        imgContainer.appendChild(img);
    });
}

