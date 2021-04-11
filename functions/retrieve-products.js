exports.handler = async function(event, context) {
    console.log("Retrieving products")
    return {
        statusCode: 200,
        body: JSON.stringify({products : [
            {id : "AA001", name: "pizza", price: 13.50},
            {id : "AA002", name: "coca", price: 3.50}
        ]})
    };
} 
