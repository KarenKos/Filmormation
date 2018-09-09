class Rating {

    constructor() {
        document.getElementById('moreGridRating').innerHTML += this.render()
        this.przycisk = document.getElementById('Rating');// zrobilem z przycisku atrybut poprzednio byla to tylko zmienna w ramach konstruktora to nie ma wiekszego wplywu na efekt ale przyda sie przy rozbudowywaniu

        // var star1 = document.getElementById('star1');   
        // var star2 = document.getElementById('star2');
        // var star3 = document.getElementById('star3');  
        // var star4 = document.getElementById('star4');
        // var star5 = document.getElementById('star5');  

        // var tablica = [star1,star2,star3,star4,star5];

        // this.przycisk.addEventListener("click",(e) => {  
        //   e.target.style.color ="#f6ff45";
        //   console.log(e.target);
        //   let idpressed=e.target.id;
        //   for (let i=0; idpressed!=tablica[i].id; i++){
        //     console.log(idpressed, tablica[i].id);
        //       tablica[i].style.color = "#f6ff45";
        //   }to dziala ale tylko jak sie kliknie na button nie na gwiazdke
        const koloruj = (e) => {
            for (let star of this.tablica) {
                star.style.color = 'black';
            }
            e.currentTarget.style.color = "#f6ff45";
            let idpressed = e.currentTarget.id;
            for (let i = 0; idpressed != this.tablica[i].id; i++) {
                // console.log(idpressed, this.tablica[i].id);
                this.tablica[i].style.color = "#f6ff45";
            }
        }

        this.tablica = [];
        for (let i = 0; i < 5; i++) {
            this.tablica[i] = document.getElementById(`star${i + 1}`);
            // console.log(this.tablica[i]);
            this.tablica[i].addEventListener('click', (e) => koloruj(e));
        }

        //listener po zajsciu zdarzenia do funkcji w której jesteśmy przekazuje obiekt {event} ja nazwalem go e
        //w ramach e.target siedzi najnizej polozony element DOM ktory zostal klikniety, w naszym wypadku jest to gwiazdka ktora nas interesuje
        //w tej linii odwolujemy sie do tej wlasnie gwiazdki i zmieniamy wlasciwosc .style.color (ktory e target ma ponieważ jest obiektem js)
    }

    render() {
        return `
        <div id="Rating">
            <button id="star1">
                <i class="fas fa-star"></i>
            </button>
            <button id="star2">
                <i class="fas fa-star"></i>
            </button>
            <button id="star3">
                <i class="fas fa-star"></i>
            </button>
            <button id="star4">
                <i class="fas fa-star"></i>
            </button>
            <button id="star5">
                <i class="fas fa-star"></i>
            </button>
        </div>`
    }


}
// let rating = new Rating();// tworze obiekt na bazie klasy rating by wymusic wykonanie konstruktora, to jest wazna czesc bez tego nie zadziala, po podpięciu pod caly projekt ta linia bedzie gdzie indziej (w innym pliku js)
export default Rating; //ta linia bedzie potrzebna jak bedziemy podpinac tą część pod całość



3

// class Rating {

// function (selector) {       // selector - argument 
//     var element = selector ? document.querySelector(selector) : document,   //zwróci jeżeli selector_true : zwróci jeżeli selector_false - jezeli argument=selector-->1 element ustawiony na podstawie selektora  : jeżeli argument jest pusty to rozważa cały dokument
//         components = element.querySelectorAll('[data-star]');  // odnalezienie wszystkich elementów o atrybucie data-star
//     for (var i = 0; i < components.length; i++) {   // inkrementacja i od zera do długości komponentu
//         applyContext(components[i]);   // wywołanie jednego zestawu gwiazdek
//     }
// }

// var extractData = function (element) {  // zmienna extractData=funkcja o argumencie=element 
//     var attr = element.getAttribute('data-star'); // dla atrybutu element nowej zmiennej attr przypisano wartość zdefiniowaną w 'data-star' ; getAttribute - wwywołanie tej watrości
//     return Function('return {' + attr + '}')();
// }


// var data = extractData(component);  // wywołanie funkcji

// data.items = data.items || 5;   // 5-gwiazdek
// data.template = data.template || '#stars-default';  // opis struktór wizualnych obiektu
// data.default = component.value || data.items;

// var clone = template ? document.importNode(template.content, true) : document.createTextNode('\u2665');  // tworzy kopię węzła lub tworzy nowy węzeł 





// // ------------dodatkowa obiekt dla ułatwienia zarządzania stanem komponentu z gwiazdkami


// var template = document.querySelector(data.template), // funkcja zwraca pierwszy element wewnątrz dokumentu, który pasuje do selektora
//     ctx = {
//         value: data.default,             // aktualna wartość komponentu
//         lastHover: data.default,         // aktualna wartość najechania kursorem --> zmiana jedynie wartości wyświetlanej
//         total: data.items,               // łączna liczba gwiazdek
//         component: component,            // 
//         items: []
//     };
// for (var j = 0; j < data.items; j++) {   // inkrementacja j od zera do 5-tej gwiazdki
//     //utwórz klon szablonu i wstaw go na stronę
//     var clone = template ? document.importNode(template.content, true) : document.createTextNode('\u2665'),
//         wrapper = document.createElement('span');
//     wrapper.appendChild(clone);                                // wstawia określony węzeł na koniec listy clone elementu wrapper                                                   
//     component.parentElement.insertBefore(wrapper, component);  // wstawia nowy węzeł-wrapper przed węzeł-component
//     ctx.items[j] = wrapper;


//     var template = document.querySelector(data.template);      //pobranie szablonu
//     var clone = template ? document.importNode(template.content, true):(domyślny element) // jeżeli nie ma szablony wykorzystuje element domyślny

//     wrapper.appendChild(clone);  //
//     component.parentElement.insertBefore(wrapper, component);





//     // ---------------działanie zdarzeń--------------------------

//     wrapper.addEventListener('mouseenter', function (v, ctx) {    //najechanie na gwiazdkę kursorem    (typ_zdarzenia, obiekt_który_otrzymuje_zawiadomienie-funkcjajs,true-rejstracja zdarzenia/folse-bez)  
//     if (ctx.lastHover !== v) {                                    // ustawienie wartość lastHover na nr porządkowy gwiazdki
//             ctx.lastHover = v;                                    //wywołanie zdarzenia własnego onChanged
//             onChanged(ctx);                                              
//         }
//     }.bind(this, j + 1, ctx));
//     wrapper.addEventListener('mouseleave', function (v, ctx) {    // opuszczenie gwiazdki kursorem
//         if (ctx.lastHover !== ctx.value) {                        //ustawienie wartości lastHover na nr zaakceptowanej gwiazdki
//             ctx.lastHover = ctx.value;                            //wywołanie zdarzenia własnego onChanged
//             onChanged(ctx);
//         }
//     }.bind(this, j + 1, ctx));
//     wrapper.addEventListener('click', function (v, ctx) {         //klikniecie kursorem na gwiazdkę 
//         if (ctx.value !== v) {
//             ctx.value = v;
//             component.value = v;
//             if (data.click)
//                 data.click.bind(component, { value: v, tag: data.tag })();
//         }
//     }.bind(this, j + 1, ctx));

// }

// onChanged = function (ctx) {
//     for (var j = 0; j < ctx.total; j++)
//         ctx.items[j].className = j < ctx.lastHover ? 'selected' : '';   //ustawienie klasy selected na zaznaczonych gwiazdkach
// }

// .Rating span{
//     color: #AAA;
// }

// .Rating .selected{
//     color: #d9bc1a;
// }
// }
// export default Rating;