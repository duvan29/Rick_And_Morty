const users = require('../utils/users')


const login = (req, res) => {
    const { email, password } = req.query;
    const accept = users.find(e => email === e.email && password === e.password)
    if(accept){
        res.status(200).json({access: true})
    }
    else{
        res.status(404).json({access: false})
    }
}



module.exports = { login };