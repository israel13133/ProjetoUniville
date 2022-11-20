let postalCode = document.querySelector('#postalCode');
let address = document.querySelector('#address');
let province = document.querySelector('#province');
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let submit = document.querySelector('#js-submit');
const form = document.querySelector('form');

postalCode.value = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let postalCodeValue = postalCode.value;

    if(!postalCodeValue) return alert("Informe seu CEP")

    let script = document.createElement('script');
    script.src = `http://viacep.com.br/ws/${postalCodeValue}/json/?callback=fillAddress`;
    document.body.appendChild(script);
})

function fillAddress(response){

    if("erro" in response){
        alert('CEP não encontado');
        return;
    }

    address.value = response.logradouro;
    province.value = response.bairro;
    city.value = response.localidade;
    state.value = response.uf;
}