const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');

router.post("/comment/add", async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save()
      .then((result) => {
        res.status(200).send({ result });
      })
      .catch((error) => {
        res.status(400).send({ error });
      });
  });

router.get('/comment/:id', async (req, res) => {
    const commentId = req.params.id;
    await Comment.findById(commentId)
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
});

router.get('/comment/all', async (req, res) => {
    await Comment.find({})
        .then(data => {
            res.status(200).send({ data: data })
        }).catch(err => {
            res.status(500).send({ data: err.message })
        })
})

module.exports = router;