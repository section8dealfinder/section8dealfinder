// Sample properties data with states included
const properties = [
    {
        id: 1,
        title: "Beautiful Family Home",
        price: 350000,
        state: "California",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        title: "Modern Apartment",
        price: 220000,
        state: "Texas",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        title: "Luxurious Villa",
        price: 1200000,
        state: "Florida",
        image: "https://via.placeholder.com/300x200",
    },
];

// States array for the dropdown
const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin",
    "Wyoming", "Washington D.C."
];

// Populate the states dropdown
const stateFilter = document.getElementById('stateFilter');
states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
});

// Function to display properties
function displayProperties(properties) {
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = ''; // Clear previous listings
    properties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.className = 'property';
        propertyElement.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-details">
                <h2>${property.title}</h2>
                <p>${formatPrice(property.price)}</p>
                <p>${property.state}</p>
            </div>
        `;
        propertyList.appendChild(propertyElement);
    });
}

// Function to format price with commas
function formatPrice(price) {
    return `$${price.toLocaleString()}`;
}

// Function to apply filters
function applyFilters() {
    const minPrice = parseInt(document.getElementById('priceMin').value) || 0;
    const maxPrice = parseInt(document.getElementById('priceMax').value) || Infinity;
    const selectedState = document.getElementById('stateFilter').value;

    const filteredProperties = properties.filter(property => 
        property.price >= minPrice &&
        property.price <= maxPrice &&
        (selectedState === '' || property.state === selectedState)
    );

    displayProperties(filteredProperties);
}

// Function to toggle the filter section
function toggleFilter() {
    const filterSection = document.getElementById('filterSection');
    filterSection.classList.toggle('hidden');
    const button = filterSection.querySelector('.toggle-button');
    
    // Update button text based on visibility
    if (filterSection.classList.contains('hidden')) {
        button.innerHTML = 'Filters &#9654;'; // Arrow pointing right
    } else {
        button.innerHTML = 'Filters &#9664;'; // Arrow pointing left
    }
}

// Initial display
displayProperties(properties);
