const { User, Cart } = require('../database/db.js')

const getUser = async (req, res) => {
    try {
        const user = await User.findAll({
            include:[
                {
                    model:Cart
                }
            ]
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
}

const postUser = async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    try {
        const user = await User.create({
            name, email, password, isAdmin
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
}

const bulkUser = async(req,res)=>{
    const bulk = req.body;
    console.log(bulk)
    try {
        const user = await User.bulkCreate(bulk)
        res.status(200).json(user) 
    } catch (err) {
        console.log(err);
        console.log('err create user for bulk');
    }
}

const deleteUser = async (req, res) => { 
    const { id } = req.params
    try {
        const user = await User.destroy({
            where: { id: id },
        });
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUser,
    postUser,
    bulkUser,
    deleteUser
}