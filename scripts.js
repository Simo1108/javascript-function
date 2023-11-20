//E1- functie cu parametrul operator(+,-,*,/) pentru doua numere//
function calculator(num1,num2){
    const suma= num1+num2;
    const scadere = num1-num2;
    const inmultire = num1*num2;
    const impartire = num1/num2;
    const ouput= 'solution:'+ suma+';'+ scadere +';',inmultire + ';',impartire + ';';

    return output;
}
 console.log(calculator(1,2));

 function calculator(num1,num2,operator)
switch(operator)
  case '+';
  return num1+num2;
  case '-';
  return num1-num2;
  case '*';
  return num1*num2;
  case '/';
  return num1/num2;
  default:
  return "Invalid operator";
}
}

//E2 - Objects examples
const firstBook = {
    id: 1;
    title: 'Harry Potter';
    date: '15.11.1990';
}
getThis: function () {
    console.table(this);
}

const secondBook = {
    id: 2;
    title: "Back to the future";
    date:'15.11.1980';
    arrowFnDetails: () {
        console.log(this.title);
    }
normalFnDetails: function(){
    console.table(this.title)
}
}