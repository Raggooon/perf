const fetch = require('node-fetch');

exports.handler = async function(event) {
    const { url } = event.queryStringParameters;
    try {
        const response = await fetch(url);
        const data = await response.text();
        return {
            statusCode: 200,
            body: data
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server Error: ' + error.message
        };
    }
};

