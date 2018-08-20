class Movie 
{
    constructor(resp) 
    {
        this._resp = resp;
        this._film = document.querySelector("#film");
    }
    renderResponse(resp)
    {
        //Wyświetlanie informacji o błędzie
        if (!resp) 
        {
            console.log(resp.status);
        }
        //tworzenie zmiennych, w których będą przechowane informacje o filmie
        const title = resp.Title;
        const plot = resp.Plot;
        const year = resp.Released;
        const poster = resp.Poster;

        //Tworzenie karty z informacjami o filmie na podstawie bootstrap
        this._film.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
        <p class="card-text">${plot}</p>
        </div>
        </div>`;
        return;
    }
}
export default Movie;