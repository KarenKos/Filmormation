class Rating {

  constructor(){
  this.przycisk = document.getElementById('Rating');
  
  
  const koloruj = (e)=>{
        for (let star of this.tablica){  
          star.style.color='black';
        }
        e.currentTarget.style.color ="#f6ff45"; 
        let idpressed = e.currentTarget.id;     
          for (let i=0; idpressed!=this.tablica[i].id; i++){   
            console.log(idpressed, this.tablica[i].id);
            this.tablica[i].style.color = "#f6ff45";        
          }
  }

  this.tablica=[];
    for (let i=0;i<5;i++){   
      this.tablica[i] = document.getElementById(`star${i + 1}`);
      console.log(this.tablica[i]);
      this.tablica[i].addEventListener('click',(e)=>koloruj(e));
    }


}

    
}
let rating = new Rating();
stars = new Rating();
stars.renderResponse();
 console.log(stars); 
