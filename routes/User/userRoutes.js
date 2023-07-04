const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/user/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.findOne({ username: username, password: password }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                errors: err.message
            });
        }
        if (!user) {
            return res.status(404).send({
                message: 'email or password is mismatch!',
            });
        }
        return res.status(200).send({
            message: 'Login successfully',
            user
        });
    });
});

router.post('/user/register', async (req, res) => {
    console.log(res.body)
    console.log(req.body)
    const user = new User(req.body);
    await user.save()
        .then(data => {
            res.status(201).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
});

router.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    await User.findById(userId)
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
});


module.exports = router;