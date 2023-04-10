const axios = require("axios");

const getCharById = (res,id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
    const {id, name, gender, species, origin, image, status } = data;
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify({id, name, gender, species, origin, image, status }));
    })
    .catch((reason) => {
    res.writeHead(500,{"Content-Type": "text/plain"});
    res.end(reason.message);
    })
}

module.exports = getCharById;