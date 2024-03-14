
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function(event) {
  const query = event.target.value.toLowerCase();
  const filteredResults = filterResults(query);
  displayResults(filteredResults);
});

function filterResults(query) {
  const items = ['About us', 'Sponsor', 'Langueg', 'Episodes', 'Help'];
  return items.filter(item => item.toLowerCase().includes(query));
}

function displayResults(results) {
  searchResults.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
}
