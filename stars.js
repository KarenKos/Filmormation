class Rating {

function (selector) {       // selector - argument 
    var element = selector ? document.querySelector(selector) : document,   //zwróci jeżeli selector_true : zwróci jeżeli selector_false - jezeli argument=selector-->1 element ustawiony na podstawie selektora  : jeżeli argument jest pusty to rozważa cały dokument
        components = element.querySelectorAll('[data-star]');  // odnalezienie wszystkich elementów o atrybucie data-star
    for (var i = 0; i < components.length; i++) {   // inkrementacja i od zera do długości komponentu
        applyContext(components[i]);   // wywołanie jednego zestawu gwiazdek
    }
}

var extractData = function (element) {  // zmienna extractData=funkcja o argumencie=element 
    var attr = element.getAttribute('data-star'); // dla atrybutu element nowej zmiennej attr przypisano wartość zdefiniowaną w 'data-star' ; getAttribute - wwywołanie tej watrości
    return Function('return {' + attr + '}')();
}


var data = extractData(component);  // wywołanie funkcji

data.items = data.items || 5;   // 5-gwiazdek
data.template = data.template || '#stars-default';  // opis struktór wizualnych obiektu
data.default = component.value || data.items;

var clone = template ? document.importNode(template.content, true) : document.createTextNode('\u2665');  // tworzy kopię węzła lub tworzy nowy węzeł 





// ------------dodatkowa obiekt dla ułatwienia zarządzania stanem komponentu z gwiazdkami


var template = document.querySelector(data.template), // funkcja zwraca pierwszy element wewnątrz dokumentu, który pasuje do selektora
    ctx = {
        value: data.default,             // aktualna wartość komponentu
        lastHover: data.default,         // aktualna wartość najechania kursorem --> zmiana jedynie wartości wyświetlanej
        total: data.items,               // łączna liczba gwiazdek
        component: component,            // 
        items: []
    };
for (var j = 0; j < data.items; j++) {   // inkrementacja j od zera do 5-tej gwiazdki
    //utwórz klon szablonu i wstaw go na stronę
    var clone = template ? document.importNode(template.content, true) : document.createTextNode('\u2665'),
        wrapper = document.createElement('span');
    wrapper.appendChild(clone);                                // wstawia określony węzeł na koniec listy clone elementu wrapper                                                   
    component.parentElement.insertBefore(wrapper, component);  // wstawia nowy węzeł-wrapper przed węzeł-component
    ctx.items[j] = wrapper;


    var template = document.querySelector(data.template);      //pobranie szablonu
    var clone = template ? document.importNode(template.content, true):(domyślny element) // jeżeli nie ma szablony wykorzystuje element domyślny

    wrapper.appendChild(clone);  //
    component.parentElement.insertBefore(wrapper, component);





    // ---------------działanie zdarzeń--------------------------
    
    wrapper.addEventListener('mouseenter', function (v, ctx) {    //najechanie na gwiazdkę kursorem    (typ_zdarzenia, obiekt_który_otrzymuje_zawiadomienie-funkcjajs,true-rejstracja zdarzenia/folse-bez)  
    if (ctx.lastHover !== v) {                                    // ustawienie wartość lastHover na nr porządkowy gwiazdki
            ctx.lastHover = v;                                    //wywołanie zdarzenia własnego onChanged
            onChanged(ctx);                                              
        }
    }.bind(this, j + 1, ctx));
    wrapper.addEventListener('mouseleave', function (v, ctx) {    // opuszczenie gwiazdki kursorem
        if (ctx.lastHover !== ctx.value) {                        //ustawienie wartości lastHover na nr zaakceptowanej gwiazdki
            ctx.lastHover = ctx.value;                            //wywołanie zdarzenia własnego onChanged
            onChanged(ctx);
        }
    }.bind(this, j + 1, ctx));
    wrapper.addEventListener('click', function (v, ctx) {         //klikniecie kursorem na gwiazdkę 
        if (ctx.value !== v) {
            ctx.value = v;
            component.value = v;
            if (data.click)
                data.click.bind(component, { value: v, tag: data.tag })();
        }
    }.bind(this, j + 1, ctx));

}

onChanged = function (ctx) {
    for (var j = 0; j < ctx.total; j++)
        ctx.items[j].className = j < ctx.lastHover ? 'selected' : '';   //ustawienie klasy selected na zaznaczonych gwiazdkach
}

.Rating span{
    color: #AAA;
}

.Rating .selected{
    color: #d9bc1a;
}
}