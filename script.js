// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btnCalcular');
// const form = document.querySelector('#form');

// const parrafo = document.getElementById('result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//     //console.log({event});
//     //event.preventDefault();
//     let calc = +input1.value + +input2.value;
//     parrafo.innerText = 'Resultado: ' + calc;
// }

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btnEnviar = document.getElementById('btnEnviar');
const form = document.getElementById('form2');
const parrafo = document.getElementById('result');

form.addEventListener('submit',evento);

function evento(event){
    event.preventDefault()
    extractNumbers(input1.value);
    const nombre = input2.value;
    parrafo.innerText = nombre+' naciste en el '+info.day+' '+info.month+' '+info.year;
}

function extractNumbers(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
      result.push(str.substr(i, 2));
    }
    
    depuration(result);
    
  }

function depuration(numbers){
    let anno = '';
    let mes = numbers[1];
    let dia = numbers[2];

    year(numbers[0])
    

    function year(ano) {
        if (ano <= 21) {
            anno = '20' + ano
        } else if (ano >= 21) {
            anno = '19' + ano
        }
        return anno;
    }
    
    return info = {
        year: anno,
        month: mes,
        day: dia
    };
    
}  

//let prueba = ['00', '02', '09', '76', '70', '0']
//console.log(prueba[3].at(-1));