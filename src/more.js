class More {
    constructor(resp) {
        this.film = document.getElementById('film');
        // console.log(resp);
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
     show(){
         this.film.classList.add("overlay");
         this.film.innerHTML += `<div id="info"></div>`;
         this.info=document.getElementById('info');
        //  this.info.innerHTML='';

         this.info.innerHTML +='<button id="hide" type="button" class="btn btn-primary">Back</button></br></br>'
         this.hide=document.getElementById('hide');
         this.hide.addEventListener('click', (e)=>this.hideme(e))
     }

     
};
  
  export default More;