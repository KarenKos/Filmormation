import More from "./more";
// import Rating from "./rating";

class Movie {
    constructor(resp) {
        this._resp = resp;
        this._film = document.querySelector("#results"); //MW: zmienilem selektor na results; nie zmienialem nazwy zmiennej by nie motac w kodzie
        // this.submit2 = document.querySelector("#submit2");
        this.more = new More(this._resp);
    }
    displayMore(event) {
        event.preventDefault();
        this.more.show();
    }
    renderResponse(resp) {
        const title = resp.Title;
        const plot = resp.Plot;
        const year = resp.Released;
        const poster = resp.Poster;
        if (title === undefined) {
            alert("Nie znaleziona filmu.\nSpróbuj użyć wyszukiwania zaawansowanego.");
        }
        else if (!resp) {
            console.log(resp.status);
        }
        else if (poster === "N/A") {
            if (plot === "N/A" & year === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">date of release is undefined</h6>
                <p class="card-text">Plot is undefined</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else if (plot === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                <p class="card-text">Plot is undefined</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else if (year === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">date of release is undefined</h6>
                <p class="card-text">${plot}</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                <p class="card-text">${plot}</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
        }
        else {
            if (plot === "N/A" & year === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">date of release is undefined</h6>
                <p class="card-text">Plot is undefined</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else if (plot === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                <p class="card-text">Plot is undefined</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else if (year === "N/A") {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">date of release is undefined</h6>
                <p class="card-text">${plot}</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
            else {
                this._film.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${poster}/100px180/" alt="Film image">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                <p class="card-text">${plot}</p>
                <a href="#" id="submit2" class="btn btn-primary">More</a>
                </div>
                </div>`;
                // this.submit2.addEventListener("click", this.displayMore);
            }
        }
        let submit2 = document.querySelector("#submit2");
        // console.log(submit2);
        submit2.addEventListener("click", ()=>this.displayMore(event));
        return;
    }
}
export default Movie;