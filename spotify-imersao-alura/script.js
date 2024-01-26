/* Selecionando os elementos */
const search_input = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

/* Função que realizará a busca na API */
function requestApi(searchTerm){
    const url= `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

/* Função que irá mostrar o resultado obtido da busca na API */
function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");

    result.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });

    resultsArtist.classList.remove('hidden');

}

/* Colocando evento no input, transformando para lowerCase para realizar a busca e caso o input não seja nulo, irá realizar a pesquisa do termo */
document.addEventListener('input', () => {
    const searchTerm = search_input.value.toLowerCase();
    if(searchTerm === ""){
        resultsArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})