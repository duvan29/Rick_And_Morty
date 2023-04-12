let myFavorites = []

// const postFav = (req, res) => {
//     myFavorites.push(req.body);
//     res.status(200).json(myFavorites)
// }

const postFav = (req, res) => {
    try{    
        myFavorites.push(req.body);
        return res.status(200).json(myFavorites);

    }catch(error) {res.status(404).json({message: error.message});};
};

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter((e) => e.id !== Number(id));
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}