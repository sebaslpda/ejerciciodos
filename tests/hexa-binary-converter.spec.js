/*/function comparar(numeroHexa){
 //  var Array = ["0", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];
  // if ((Array.indexOf(numeroHexa))){
   // return ""
//}
//}

function comparar(numeroHexa){
    //guarda en lista de caracteres el numero hexadecimal que ingresa
    var listaCaracteres = numeroHexa.split("")
    }*/


// entra un numero hexadecimal y lo convierte en binario 
  function comparar("numeroHexa"){
    var resultado = "" 
    var listaCaracteres = numeroHexa.split("")

    listaCaracteres.forEach(function(element) {
        switch(element){
            case "0": 
            resultado = resultado + "0000";
            break;
            case "1": 
            resultado = resultado + "0001";
            break;
            case "2": 
            resultado = resultado + "0010";
            break;
            case "3": 
            resultado = resultado + "0011";
            break;
            case "4": 
            resultado = resultado + "0100";
            break;
            case "5": 
            resultado = resultado + "0101";
            break;
            case "6": 
            resultado = resultado + "0110";
            break;
            case "7": 
            resultado = resultado + "0111";
            break;
            case "8": 
            resultado = resultado + "1000";
            break;
            case "9": 
            resultado = resultado + "1001";
            break;
            case "A": 
            resultado = resultado + "1010";
            break;
            case "B": 
            resultado = resultado + "1011";
            break;
            case "C": 
            resultado = resultado + "1100";
            break;
            case "D": 
            resultado = resultado + "1101";
            break;
            case "E": 
            resultado = resultado + "1110";
            break;
            case "F": 
            resultado = resultado + "1111";
            break;
        }
        
      });
      alert(resultado); 
    }


    //ciclo para devolver 4 caracteres del binario que ingrese
   
 // function funcion(numeroBin){ 
    var numeroBin = "111122223333"
for (var i = 0; i < numeroBin.length; i++) {
      var n = numeroBin.substr(-4);
      numeroBin = numeroBin.substr(0, numeroBin.length -4)
      console.log(n);
      
   }
if (numeroBin != 0 && numeroBin < 4){
  numeroBin.padStart (4, 0)
}

//devuelve el numero hexadecimal segun la tabla ingresando un binario 
var lista = [{hexa:"0", binario: "0000"},
             {hexa:"1", binario: "0001"},
             {hexa:"2", binario: "0010"},
             {hexa:"3", binario: "0011"},
             {hexa:"4", binario: "0100"},
             {hexa:"5", binario: "0101"},
             {hexa:"6", binario: "0110"},
             {hexa:"7", binario: "0111"},
             {hexa:"8", binario: "1000"},
             {hexa:"9", binario: "1001"},
             {hexa:"A", binario: "1010"},
             {hexa:"B", binario: "1011"},
             {hexa:"C", binario: "1100"},
             {hexa:"D", binario: "1101"},
             {hexa:"E", binario: "1110"},
             {hexa:"F", binario: "1111"},]
function (binarioSeparado)
             var resultado = lista.filter(function(compara){
  return compara.binario === res}).map(function (compara){
    return compara.hexa
    })
    console.log(resultado)



//combinando funciones 
var lista = [{hexa:"0", binario: "0000"},
             {hexa:"1", binario: "0001"},
             {hexa:"2", binario: "0010"},
             {hexa:"3", binario: "0011"},
             {hexa:"4", binario: "0100"},
             {hexa:"5", binario: "0101"},
             {hexa:"6", binario: "0110"},
             {hexa:"7", binario: "0111"},
             {hexa:"8", binario: "1000"},
             {hexa:"9", binario: "1001"},
             {hexa:"A", binario: "1010"},
             {hexa:"B", binario: "1011"},
             {hexa:"C", binario: "1100"},
             {hexa:"D", binario: "1101"},
             {hexa:"E", binario: "1110"},
             {hexa:"F", binario: "1111"},]

             var numeroBin = "111100001111"
             var final = ""
             for (var i = 0; i < numeroBin.length; i++) {
              if (numeroBin.length != 0 && numeroBin.length < 4){
                n = numeroBin.padStart (4, 0)     
              var n = numeroBin.substr(-4);
                   numeroBin = numeroBin.substr(0, numeroBin.length -4)
                   var resultado = lista.filter(function(compara){
                    return compara.binario === n}).map(function (compara){
                      return final = compara.hexa + final
                       })
                      console.log(final)
                                  }
             
             }

// ejercicio echo con while 
             var lista = [{hexa:"0", binario: "0000"},
             {hexa:"1", binario: "0001"},
             {hexa:"2", binario: "0010"},
             {hexa:"3", binario: "0011"},
             {hexa:"4", binario: "0100"},
             {hexa:"5", binario: "0101"},
             {hexa:"6", binario: "0110"},
             {hexa:"7", binario: "0111"},
             {hexa:"8", binario: "1000"},
             {hexa:"9", binario: "1001"},
             {hexa:"A", binario: "1010"},
             {hexa:"B", binario: "1011"},
             {hexa:"C", binario: "1100"},
             {hexa:"D", binario: "1101"},
             {hexa:"E", binario: "1110"},
             {hexa:"F", binario: "1111"},]
             var final = ""
function pasaDeBinarioAHexa(numeroBin){
 while (numeroBin.length != 0)
 {
   var n = numeroBin.substr(-4);
   if (numeroBin.length < 4){
   n = numeroBin.padStart (4, 0)
   }
numeroBin = numeroBin.substr(0, numeroBin.length -4)
   var resultado = lista.filter(function(compara){
   return compara.binario === n}).map(function (compara){
   return final = compara.hexa + final
                      
 })}}
 console.log(final)