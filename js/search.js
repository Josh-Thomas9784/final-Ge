const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const dataset = [
  { name: 'Apple', keywords: ['apple', 'fruit', 'healthy'], url: '/apple-page.html' },
  { name: 'Banana', keywords: ['banana', 'fruit', 'yellow'], url: '/banana-page.html' },
  { name: 'Carrot', keywords: ['carrot', 'vegetable', 'orange'], url: '/carrot-page.html' },
  { name: 'Broccoli', keywords: ['broccoli', 'vegetable', 'green'], url: '/broccoli-page.html' },
  { name: 'Tomato', keywords: ['tomato', 'vegetable', 'red'], url: '/tomato-page.html' }
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

  const html = filteredResults.map(result => {
    const keywords = result.keywords.map(keyword => `<span class="keywords">${keyword}</span>`).join(', ');
    return `
      <div class="autocomplete-item" data-url="${result.url}">
        ${result.name}<br>
        <div class="keywords">${keywords}</div>
      </div>
    `;
  }).join('');
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





// DELETE WHEN CHECKING IF NOT USED
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      }
  })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
      } else{
        entry.target.classList.remove('show2');
      }
  })
})


const hiddenElements1 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show3');
      } else{
        entry.target.classList.remove('show3');
      }
  })
})


const hiddenElements2 = document.querySelectorAll('.hidden3');
hiddenElements2.forEach((el) => observer2.observe(el));
