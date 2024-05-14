const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const dataset = [
  { name: 'Apple', keywords: ['apple', 'fruit', 'healthy'], url: 'geoSub.html' },
  { name: 'Banana', keywords: ['banana', 'fruit', 'yellow'], url: 'geoSub.html' },
  { name: 'Carrot', keywords: ['carrot', 'vegetable', 'orange'], url: 'geoSub.html' },
  { name: 'Broccoli', keywords: ['broccoli', 'vegetable', 'green'], url: 'geoSub.html' },
  { name: 'Tomato', keywords: ['tomato', 'vegetable', 'red'], url: 'geoSub.html' }
];

function showAutocompleteResults() {
  const query = searchInput.value.toLowerCase();
  const filteredResults = dataset.filter(item =>
    item.keywords.some(keyword => keyword.includes(query))
  );

  if (query.length === 0) {
    searchResults.innerHTML = '';
    return;
  }

  const html = filteredResults.map(result => `<div class="autocomplete-item" data-url="${result.url}">${result.name}</div>`).join('');
  searchResults.innerHTML = html;

  const autocompleteItems = document.querySelectorAll('.autocomplete-item');
  autocompleteItems.forEach(item => {
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      window.location.href = url;
    });
  });
}

searchInput.addEventListener('input', showAutocompleteResults);