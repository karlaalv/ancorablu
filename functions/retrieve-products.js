exports.handler = async function(event, context) {
    console.log("Retrieving products")
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World!"})
    };
} 
