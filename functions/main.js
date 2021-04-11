const Commerce = require('@chec/commerce.js');
const commerce = new Commerce(
    'pk_test_2592218f2ae77c7a987b880db97b4a8f3843d6a15647a'
);
commerce.products.list().then((product) => {
    console.log("Products retrieved: ", product)
});
