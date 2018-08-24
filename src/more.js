import axios from "axios";

class More {
    constructor(resp) {
        this.film = document.getElementById('film');
        // this.resp=resp;
        // console.log('more',this.resp);
     }
    check(element) {
        if (element == "N/A" || !element) {
            return 'Unknown';
        }
        return element;
    }
    hideme(e){
        this.film.classList.remove("overlay");
        this.info.parentNode.removeChild(this.info);
    }
     show(e){
              this.film.classList.add("overlay");
              this.film.innerHTML += `<div id="info"></div>`;
              this.info = document.getElementById("info");
              this.info.innerHTML = "";
              //  this.info.innerHTML +='<button id="hide" type="button" class="btn btn-primary">Back</button></br></br>'
              //  this.hide=document.getElementById('hide');
              //  this.hide.addEventListener('click', (e)=>this.hideme(e))

            //   console.log(e.target.title);
               let request = `http://www.omdbapi.com/?apikey=f63ccd1d&i=${e.target.title}&plot=full`;
               axios.get(request).then((response) => {
                   console.log(request, response.data);
                    this.resp=response.data;
              this.info.innerHTML += `
                                <div id="morecontainer">
                                    <div id="morebackground"></div>
                                    <div id="morebox">
                                        <button type="button" id="moreclose" class="close" aria-label="Close" color="white">
                                            I want to search again!
                                    </button>
                                        <div id="moreGrid">
                                            <div id="moreGridPoster"><img src="${this.resp.Poster}"></img></div>
                                            <div id="moreGridTitle">${this.resp.Title}</div>
                                            <div id="moreGridReleased">${this.resp.Released}</div>
                                            <div id="moreGridPlot">${this.resp.Plot}</div>
                                            <div id="moreGridGenre">${this.resp.Genre}</div>
                                            <div id="moreGridDirector">${this.resp.Director}</div>
                                            <div id="moreGridTime">${this.resp.Runtime}</div>
                                            <div id="moreGridWriters">${this.resp.Writer}</div>
                                            <div id="moreGridProduction">${this.resp.Production}</div>
                                            <div id="moreGridBoxOffice">${this.resp.BoxOffice}</div>
                                            <p id="moreGridRating">Czekamy na Eweline</p>
                                            <div id="moreGridAwards">${this.resp.Awards}</div>
                                            <div id="moreGridLanguage">${this.resp.Language}</div>
                                            <button type="button" class="fab fa-imdb" id="moreGridIMDB">TEST</button>
                                        </div>
                                    </div>
                                </div>`;
              this.hide = document.getElementById("moreclose");
              this.hide.addEventListener("click", e =>
                this.hideme(e)
              );
            }
        )  
    } 
};
  export default More;