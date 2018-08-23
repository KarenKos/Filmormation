import axios from "axios";
import Movie from "./movie";
// import More from "./more";

class Advanced {
    constructor() {
        const show = () => {
            // this.adv.removeEventListener('click', show);
            this.inputs=document.getElementById('inputs');
            this.inputs.innerHTML += '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Title</span></div><input id="title" type="text" class="form-control" placeholder="Your title" aria-label="tytul" aria-describedby="basic-addon1"></div>';
            this.inputs.innerHTML += '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Year</span></div><input id="year" type="number" class="form-control" placeholder="Release year" aria-label="tytul" aria-describedby="basic-addon1"></div>';
            this.inputs.innerHTML += '<div class="input-group mb-3"><div class="input-group-prepend"><label class="input-group-text" for="inputGroupSelect01">Type</label></div> <select id="type" class="custom-select" id="inputGroupSelect01"><option selected>Choose...</option><option value="1">Movie</option><option value="2">Series</option><option value="3">Episode</option></select></div>';
            this.inputs.innerHTML += '</br><button id="search" type="button" class="btn btn-success">Search</button>';
            this.title = document.getElementById('title');
            this.year = document.getElementById('year');
            this.type = document.getElementById('type');
            this.search = document.getElementById('search');
            this.results = document.getElementById('results');
            this.search.addEventListener('click', () => { this.query();}); 
        }
        this.film =document.getElementById('film');
        // this.film.innerHTML += '<button id="adv" type="button" class="btn btn-primary">Advanced search</button></br></br>';
        // this.adv= document.getElementById('adv');
        // this.adv.addEventListener('click',show); //te linie przywroca przycisk zaawansowanej szukajki
        show();
        }
        display(response){
            // console.log(response);
            this.results.innerHTML='';
            let moviecard=[];
            if (response.data.Response=="True"){
                for (let i =0; i<response.data.Search.length;i++){
                    let request = `http://www.omdbapi.com/?apikey=f63ccd1d&i=${response.data.Search[i].imdbID}`;
                    axios.get(request).then((response) => {
                        // console.log(request, response.data);
                        moviecard[i] = new Movie(response.data);
                        moviecard[i].renderResponse(response.data,i);
                        // console.log(request,response.data)
                    }).catch((error) => { console.log(error) });

                    // this.results.innerHTML += `<a href="https://www.filmweb.pl/Harry.Potter.I.Kamien.Filozoficzny">${response.data.Search[i].Title} rok: ${response.data.Search[i].Year} </br> </a>`;
                    // (response.data.Search[i].Poster != "N/A") ? (this.results.innerHTML += `<img src="${response.data.Search[i].Poster}"></br></a>`) :`</a >`;
                }
            }else{
                console.log(response.data.Error);
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
                    alert("Please provide title to search for");
                }
                if (y>=0 || y=="") {
                    (y=="")?year='':year = `&y=${y}`;
                    check++;
                } else {
                    alert('Year must be greater than zero');
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
            // console.log(this.title.value, this.year.value,this.type.value);
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
