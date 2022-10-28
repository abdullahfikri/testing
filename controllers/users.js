const bcrypt = require('bcrypt');

exports.signin = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
};
