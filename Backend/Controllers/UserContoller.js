const { UserModel } = require("../Models/UserModel");

async function getAllUsers(req, res) {
    try {
        let users = await UserModel.find();
        users = users.map((el) => {
            const { password, ...otherDetails } = el._doc
            return otherDetails
        })
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err)
    }
}

const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (user) {
            const { password, ...otherDetails } = user._doc;

            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("No such User");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const adduser = async (req, res) => {
    const { username, firstname, lastname, gender, password } = req.body
    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            if (err)
                res.send({ "msg": "something Wrong", "err": err.message })
            else {
                const newUser = new UserModel({ username, firstname, lastname, gender, password: hash })
                await newUser.save()
                res.send({ "msg": "Register Successfully" })
            }
        })
    }
    catch (err) {
        res.send({ "msg": "something Wrong", "err": err.message });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdmin } = req.body;
  
    if (currentUserId == id || currentUserAdmin) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted Successfully!");
      } catch (error) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };
  


module.exports = { getAllUsers, getUser, adduser,deleteUser }