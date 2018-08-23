class More {
    constructor(resp) { 
        console.log(resp);
     }
     show(){
         this.film = document.getElementById('film');
         this.film.classList.add("overlay");
         this.film.innerHTML += `<div id="overlay-message">foo</div>`
     }
};
  
  export default More;