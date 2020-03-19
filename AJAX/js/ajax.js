'use strict';
function pobierz(){

    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
    let dane = document.createElement('div')
    dane.setAttribute('id', 'dane-programisty')
    console.log(dane)
    dane.innerHTML = "Imie: " + res.imie + " "+ "Nazwisko: " + res.nazwisko;
    document.body.appendChild(dane); 
    })}
    
// function hello(){
//     console.log('Hello', this)
//   }
  
//   const person = {
//     name: 'Natalia',
//     age: 29,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job, phone) {
//     console.group(`${this.name} info:`)
//       console.log(`Name is ${this.name}`)
//       console.log(`Age is ${this.age}`)
//       console.log(`Job is ${job}`)
//       console.log(`Phone is ${phone}`)
//       console.groupEnd()
//    }
//   }

//   const ana = {
//       name: 'Anna',
//       age: 23
//   }
  
// //   const fnAnaInfoLog = person.logInfo.bind(ana, 'front', '84638657')
// //   fnAnaInfoLog('front', '84638657')

//     // person.logInfo.call(ana, 'front', '3869420')
//     person.logInfo.apply(ana, ['front', '3869420'])


//     const array = [1, 2, 3, 4, 5]

//     // function multBy(array, n){
//     //     return array.map(function(i){
//     //         return i*n
//     //     })
//     // }    console.log(multBy(array, 15))
    
//     Array.prototype.multBy = function(n){
//         return this.map(function(i){
//             return i*n
//         })
//     }
//     console.log(array.multBy(8))
    
