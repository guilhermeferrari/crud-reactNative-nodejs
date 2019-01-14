var express = require('express');
var router = express.Router();
var model = require('../models/index');


/* router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', function (req, res, next) {
  model.Formulario.findAll({})
    .then(users => res.json({
      error: false,
      data: users
    }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }));
});

router.post('/', function (req, res, next) {
  const {
    first_name,
    last_name,
    bio
  } = req.body;
  model.Formulario.create({
    first_name: first_name,
    last_name: last_name,
    bio: bio
  })
    .then(user => res.status(201).json({
      error: false,
      data: user,
      message: "Novo usuario criado."
    }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }));
});

router.put('/:id', function (req, res, next) {
  const user_id = req.params.id;
  const { first_name, last_name, bio } = req.body;
  model.Formulario.update({
    first_name: first_name,
    last_name: last_name,
    bio: bio
  }, {
      where: {
        id: user_id
      }
  })
  .then(user => res.status(201).json({
    error: false,
    message: 'user has been updated'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

router.delete('/:id', function (req, res, next) {
  const user_id = req.params.id;
  model.Formulario.destroy({
    where: {
      id: user_id
    }})
    .then(status => res.status(201).json({
      error: false,
      message: 'user has been deleted.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});

module.exports = router;
