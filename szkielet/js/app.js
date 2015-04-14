var drawNumber = function (min, range){
	return numb = Math.floor((Math.random() * (range+min -1) + min));
};

var compChoice = drawNumber(1, 100);
//var userChoice;
var result; 

//1. akcja - nasluchuj na click
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(e){
	//zapobiegamy domyslnej akcji przegladarki
	e.preventDefault();
    //alert(e.timeStamp);
    //debugger; - zatrzymanie wykonywania kodu w tej linijce
    var userChoice = parseInt(form.userChoice.value);
    result =  choiceCompare (userChoice, compChoice);

    var show= createElementWithText ('p', result);
    document.body.appendChild(show);
});


var choiceCompare = function (userChoice, compChoice){
//2. Porownaj to wylosowane z tym wpisanym
    if (userChoice > compChoice){
        return result = 'Twoja liczba jest wieksza, wpisz mniejsza';
    }
    if (userChoice < compChoice){
        return result = 'Twoja liczba jest mniejsza, wpisz wieksza';
    }
    else {
        return result = 'Wygrales';
    }
};

//3ab wstaw nowy elem,wrzuc na str
var createElementWithText = function (mojTag, tekstTagu){
    var newElem = document.createElement(mojTag);
    newElem.innerText = tekstTagu;
    return newElem;
};

//zmienne zadeklarowane na zewn funkcji
//zmienna--
//ogranicz liczbe wywolan np mozna zgadywac tylko 5 razy