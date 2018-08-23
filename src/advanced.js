import axios from "axios";
import More from "./more";

class Advanced {
    constructor() {
        const show = () => {
            this.film.innerHTML +='<div id="inputs"></div>';
            this.inputs=document.getElementById('inputs');
            this.inputs.innerHTML += '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Tytuł</span></div><input id="title" type="text" class="form-control" placeholder="Podaj tytuł" aria-label="tytul" aria-describedby="basic-addon1"></div>';
            this.inputs.innerHTML += '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Rok premiery</span></div><input id="year" type="number" class="form-control" placeholder="Podaj rok premiery" aria-label="tytul" aria-describedby="basic-addon1"></div>';
            this.inputs.innerHTML += '<div class="input-group mb-3"><div class="input-group-prepend"><label class="input-group-text" for="inputGroupSelect01">Typ</label></div> <select id="type" class="custom-select" id="inputGroupSelect01"><option selected>Wybierz...</option><option value="1">Film</option><option value="2">Serial</option><option value="3">Epizod</option></select></div>';
            this.inputs.innerHTML += '</br><button id="search" type="button" class="btn btn-success">Szukaj</button>';
            this.film.innerHTML += '</br><div id =results></div>';
            this.title = document.getElementById('title');
            this.year = document.getElementById('year');
            this.type = document.getElementById('type');
            this.search = document.getElementById('search');
            this.results = document.getElementById('results');
            this.search.addEventListener('click', () => { this.query();}); 
        }
        this.film =document.getElementById('film');
        this.film.innerHTML += '<button id="adv" type="button" class="btn btn-primary">Zaawansowana Szukajka</button></br></br>';
        this.adv= document.getElementById('adv');
        this.adv.addEventListener('click',show);
        }
        display(response){
            console.log(response);
            this.results.innerHTML='';
            if (response.data.Response=="True"){
                for (let i =0; i<5;i++){
                    this.results.innerHTML += `<a href="https://www.filmweb.pl/Harry.Potter.I.Kamien.Filozoficzny">${response.data.Search[i].Title} rok: ${response.data.Search[i].Year} </br> </a>`;
                    (response.data.Search[i].Poster != "N/A") ? (this.results.innerHTML += `<img src="${response.data.Search[i].Poster}"></br></a>`) :`</a >`;
                }
            }else{
                this.results.innerHTML += response.data.Error;
            }
        }
        query(){
            let title,year,type;
            const validation = (t,y,ty)=>{
                let check=0;
                if (t!=""){
                    title = `s="${t}"`;
                    check++;
                }else{
                    alert('Podaj szukany tytuł');
                }
                if (y>=0 || y=="") {
                    (y=="")?year='':year = `&y="${y}"`;
                    check++;
                } else {
                    alert('Rok musi być wiekszy od zera');
                }
                switch(ty){
                    case '1':
                        type=`&type="movie"`;
                        break;
                    case '2':
                        type = `&type="series"`;
                        break;
                    case '3':
                        type = `&type="episode"`;
                        break;
                    default:
                        type = '';
                }
                return (check==2)?true:false;
            }
            console.log(this.title.value, this.year.value,this.type.value);
            if(validation(this.title.value, this.year.value,this.type.value)){
                let request = `http://www.omdbapi.com/?apikey=f63ccd1d&${title}${type}${year}`;
                console.log(request);
                axios.get(request).then((response)=>{
                    this.display(response);
                }).catch((error)=>{console.log(error)});
            }
        }
    }
  
  export default Advanced;
