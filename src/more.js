class More {
    constructor(resp) {
        this.resp = resp;
        this.film = document.getElementById('film');
        this.morecontainer = document.getElementById('morecontainer')
        // console.log(resp);
    }
    check(element) {
        if (element == "N/A" || !element) {
            return 'Unknown';
        }
        return element;
    }
    
    show(resp) {
        const title = resp.Title;
        const plot = resp.Plot;
        const year = resp.Released;
        const poster = resp.Poster;
        const genre = resp.Genre;
        const director = resp.Director;
        const time = resp.Time;
        const writers = resp.Writers;
        const production = resp.Production;
        const boxOffice = resp.BoxOffice;
        const awards = resp.Awards;
        const language = resp.Language;
        const imdbId = resp.imdbId;


        document.querySelector("btn").addEventListener("click", function () {
            document.querySelector("#morecontainer").style.display = "block";}),
        this.morecontainer.innerHTML=`
        <div id="morebackground"></div>
        <div id="morebox">
        <button type="button" id="moreclose" class="close" aria-label="Close" color="white">I want to search again!</button><div id="moreGrid">
        <img class="moreGridPoster"src="${poster}"></img>
        <div id="moreGridTitle">${title}</div>
        <div id="moreGridReleased">${released}</div>
        <div id="moreGridPlot">${plot}</div>
        <div id="moreGridGenre">${genre}</div>
        <div id="moreGridDirector">${director}</div>
        <div id="moreGridTime">${time}</div>
        <div id="moreGridWriters">${writers}</div>
        <div id="moreGridProduction">${production}</div>
        <div id="moreGridBoxOffice">${boxOffice}</div>
        <p id="moreGridRating">rating</p>
        <div id="moreGridAwards">${awards}</div>
        <div id="moreGridLanguage">${language}</div>
        <button type="button" class="fab fa-imdb" id="moreGridIMDB" href='https://www.imdb.com/title/${imdbId}'></button>
        </div>>
        </div>`
}

export default More;