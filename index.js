document.addEventListener("DOMContentLoaded", function () {
    console.log('funziono')
    fetch('/.netlify/functions/retrieve-products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('products').innerHTML('Nome: ' + data.products[0].name)
        });
});