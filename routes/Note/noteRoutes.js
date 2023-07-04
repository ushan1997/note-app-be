const express = require('express');
const router = express.Router();
const Note = require('../../models/Note');

router.post("/note/add", async (req, res) => {
    console.log(req.body)
    const note = new Note(req.body);
    await note.save(note)
      .then((result) => {
        res.status(200).send({ result });
      })
      .catch((error) => {
        res.status(400).send({ error });
      });
  });

  router.get('/note/all', async (req, res) => {
    await Note.find()
        .then(data => {
            res.status(200).send({ data: data })
        }).catch(err => {
            res.status(500).send({ data: err.message })
        })
})

router.get('/note/:id', async (req, res) => {
    const noteId = req.params.id;
    await Note.findById(noteId)
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
});



module.exports = router;