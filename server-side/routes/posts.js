// file: routes/posts.js

const express = require('express');
const route = express.Router();
const Post = require('../models/post');

route.get('/', function(req, res, next) {
  Post.findAll(function(err, result) {
    
    if (err) return res.status(400).send(err);
    res.status(200).send({ posts: result ? result : [] });
    // res.status(200).json({ posts: result })
    // res.render('post/index', { posts: result });
  });
});
route.get('/:id', function(req, res, next) {
  Post.findOne(req.params.id, function(err, result) {
    
    if (err) return res.status(400).send(err);
    //ini false undefined, null, false, 0
    res.status(200).send({ posts: result ? result : {} });
    // res.status(200).json({ posts: result })
    // res.render('post/index', { posts: result });
  });
});

route.get('/create', function(req, res, next) {
  res.render('post/create');
});

route.post('/', function(req, res, next) {
  Post.store(req.body, function(err, result) {
    if (err) {
      res.status(400).send({ status: 'Error', err })
    }
    res.status(200).send({ status: 'Ok' })
    // res.redirect('/posts');
  });
});

route.post('/destroy/:id',function(req, res, next) {
  Post.destroy(req.params.id, function(err, result) {
    if (err) {
      res.status(400).send({ status: 'Error', err })
    }
    res.status(200).send({ status: 'Ok' })
  })
})

route.post('/:id', function(req, res) {
  Post.update(req.params.id, req.body, function(err, result) {
    if (err) {
      res.status(400).send({ status: 'Error', err })
    }
    res.status(200).send({ status: 'Ok' })
    
  })
})

// route.get('/edit/:id', function(req, res) {
//   Post.findOne(req.params.id, function(err, result) {
//     if (err) console.log('error finding post');
//     res.render('post/edit', { post: result });
//   })
// })

module.exports = route;








