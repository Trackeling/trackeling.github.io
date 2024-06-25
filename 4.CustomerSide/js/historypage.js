const searchBar = document.getElementById('Search');

const filterData = (query) => {
    const allCard = document.querySelectorAll('.history-content');

    allCard.forEach(elem => {
        let data = elem.querySelector('.bold-text');
        if (!data.innerHTML.toLowerCase().startsWith(query.toLowerCase())){
            elem.style.display = 'none';
        }
        else{
            elem.style.display = 'flex';
        }
    });
}

searchBar.addEventListener('input', () => {
    filterData(searchBar.value);
})