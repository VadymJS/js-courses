let name = prompt('What is your name?');
let surname = prompt('What is your surname?');
let isAdult = confirm('Are you 18 years old?');

if(isAdult) {
    alert (`${name} ${surname}, вот ваши сигареты.`)
} else {
    alert (`${name} ${surname}, cори, водку не продам!`)
}