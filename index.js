console.log('funziono')
fetch('/.netlify/functions/retrieve-products')
  .then(response => response.json())
  .then(data => console.log(data));