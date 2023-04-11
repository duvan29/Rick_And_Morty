let myFavorites = []

// const postFav = (req, res) => {
//     myFavorites.push(req.body);
//     res.status(200).json(myFavorites)
// }

const postFav = (req, res) => {
    try{
        const {id, name, status, species, gender, origin, image} = req.body;

        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: "The require information is missing"});
        if(myFavorites.includes(id)) return res.status(404).json({message: "This character is already belongs to your favorites"});

        myFavorites.push({id, name, status, species, gender, origin, image});
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