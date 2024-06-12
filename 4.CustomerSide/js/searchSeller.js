const searchBar = document.getElementById('Search');

const filterData = (query) => {
    const allCard = document.querySelectorAll('.sellerCardsSearch');

    allCard.forEach(elem => {
        let data = elem.querySelector('.sellerProfileText').children[1];
        if (!data.innerHTML.toLowerCase().startsWith(query.toLowerCase())){
            elem.style.display = 'none';
        }
        else{
            elem.style.display = 'flex';
        }
    });
}

searchBar.addEventListener('input', () => {
    filterData(searchBar.value)
})