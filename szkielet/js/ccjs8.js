//wazna rzecz
//zasieg zmiennych

/*
var b; // zmienna globalna zadeklarowana
//poza funkcja


function a (){
	var b = 4;
	//ta zmienna dostepna jest tylko w trakcie wykonywania funkcji
	//zmienna lokalna
}
a();
console.log(b);



var c; // zmienna globalna zadeklarowana
//poza funkcja


function a (){
	c = 4;
	//zmienna zadeklarowana wczesniej przypisuje jej teraz wartosc;
}
a();
console.log(c);
*/


var d = 5; // zmienna globalna zadeklarowana
//poza funkcja

function a (e){ // e ma wartosc zmiennej d
	e = 4;
	//zmienna d jest tworzona na potrzeby funkcji a
}
a(d); //do funkcji przekazuje wartosc pod zmienna d; czyli 5;
console.log(d);


//debuggowanie kodu w chrome
//f12
//sources
//znajdz plik w sciezce i kliknij
//kliknij na nr linii - break point
// strzalka w prawo - idz do nowej linii
//w dol - wejdz w funkcje
//w gore - wyjdz z funkcji 



