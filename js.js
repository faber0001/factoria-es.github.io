
var date = Number(prompt("Indica el numero de datos"));
while (date === null || date === "00") {
    var date = Number(prompt("debes ingresar solo numeros"));



}
document.getElementById('num_datos').innerHTML = 'Datos a consultar: ' + '[ ' + date + ' ]' ;

console.log("El numero de datos es:" + date);

var x = Number(prompt("Ingresa numero guia"));
while (x === null || x === "00" || x > 37 || x < 0) {
    var x = Number(prompt("Debes ingresar solo numeros entre (0) y (37)"));


}

console.log("el numero x es:" + x);

var rep = new Array();
var rnm = new Array();
var rfp = new Array();
var rfn = new Array();
var crp = 0;
var cfp = 0;
var cdv = 0;


var narray = new Array();
var contnumbers = new Array();
var devregister = new Array();
var devnumbers = new Array();

for (let i = 0; i < date; i++) {
    var y = Number(prompt("Ingresa numero nuevo"));
    while (y === null || y === "00" || y > 37 || y < 0) {
        var y = Number(prompt("Debes ingresar solo numeros entre (0) y (37)"));


    }




    if (x === y) {
        rep.unshift(i + 1);
        rnm.unshift(x);
        contnumbers.unshift(x, y);
        alert("RP en el evento:  " + "[ " + rep + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");


        console.log("Repeticion en el evento: " + i);
        document.getElementById('rtas').innerHTML = 'Rep: ' + '[ ' + rep + ' ]' + '( ' + rnm + ' )  ';
        narray.unshift(x, y);
        crp = 0;

    } else if ((x % 2 === 0) && (x - 1 === y) || (x !== 0) && (x + 1 === y)) {

        rfp.unshift(i + 1);
        alert("FP en el evento:  " + "[ " + rfp + " ]" + "  El numero: " + "(" + x + ")" + " " + "( " + y + ")");
        rfn.unshift(x, y);
        narray.unshift(x, y);
        contnumbers.unshift(x, y);
        cfp = 0;
        document.getElementById('rfps').innerHTML = 'Rfp: ' + '[ ' + rfp + ' ]' + '( ' + rfn + ' )';


    }
    if (i > 1 && contnumbers[0] === contnumbers[2]) {

        devregister.unshift(i + 1);
        alert("Dev en el evento:  " + "[ " + (i + 1) + " ]" + "  El numero: " + "(" + x + ")" + " ");
        console.log();
        devnumbers.unshift(x);
        document.getElementById('rdev').innerHTML = 'Rdev: ' + '[ ' + devregister + ' ]' + '( ' + devnumbers + ' )';
        cdv = 0;
    }
   
    document.getElementById('rnum').innerHTML = 'Registro: ' + '[ ' + contnumbers + ' ] ';
    alert("No repit " + "[ " + crp + " ]");
    alert("No FP" + "[ " + cfp + " ]");
    alert("No Dev" + "[ " + cdv + " ]");
    crp++;
    cfp++;
    cdv++;


    x = y;


}