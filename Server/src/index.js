const http = require("http");
// const data = require('./utils/data');
const getCharById = require("./controllers/getCharById");


const PORT = 3001; 

const server = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;

    switch (true) {
        case url.includes("/rickandmorty/character/"):
                const id = url.split('/').pop();
                return getCharById(res, id)


                // const personaje = data.find(element => element.id === parseInt(id));
                // res.writeHead(200, {'Content-Type' : 'application/json'});
                // return res.end(JSON.stringify(personaje));
        
        default:
            res.writeHead(404, {'Content-Type' : 'text/plain'}) 
            return res.end("Route not found");
    }
    
}).listen(PORT, 'localhost')




