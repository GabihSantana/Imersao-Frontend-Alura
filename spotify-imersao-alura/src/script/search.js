/* Selecionando os elementos */
const search_input = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

/* Função que realizará a busca na API */
function requestApi(searchTerm){
    /* Irá filtrar pelo nome do artista */
    const url= `http://localhost:3000/artists?name_like=${searchTerm}`

    /* Irá buscar com a promesa de um retorno */
    fetch(url)
        .then((response) => response.json()) /* Transforma a resposta para json */
        .then((result) => displayResults(result)) /* Vai para função para organizar como vai ser exibido */
}

/* Função que irá mostrar o resultado obtido da busca na API */
function displayResults(result) {
    resultPlaylist.classList.add('hidden') /* esconde o display das playlists */

    /* Pega os elementos do HTML busca que foram estruturados para receber o resultado da busca */
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");

    /* E para cada resultado, na tag img src= irá receber a url que está na api */
    result.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name; /* e irá coletar o nome que está na API e exibir  */
    });

    /* Exibe os resultados */
    resultsArtist.classList.remove('hidden');

}

/* Colocando evento no input, transformando para lowerCase para realizar a busca */
document.addEventListener('input', () => {
    const searchTerm = search_input.value.toLowerCase();
    if(searchTerm === ""){
        resultsArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }
    /* caso o input não seja nulo, irá realizar a pesquisa do termo */
    requestApi(searchTerm);
})

/* json-server --watch  api-artists/artists.json --port 3000 */