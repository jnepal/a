var express = require('express');
var router  = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds139645.mlab.com:39645/todolist-nepal', ['todos'] )

/* Get the all ToDos*/
router.get('/todos', function(req, res, next){
  db.todos.find(function(err, docs){
    if(err){
      console.log("FindAll Error", err);
    }else{
      res.json(docs);
    }
  });
});

//Get Single ToDo
router.get('/todo/:id', function(req, res, next){
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, docs){
    if(err){
      console.log("FindOne Error", err);
    }else{
      res.json(docs);
    }
  });
});

//Save ToDo
router.post('/todo', function(req, res, next){
  var todo = req.body;
  if(!todo.text || !(todo.isCompleted+'')){
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  }else{
    db.todos.save(todo, function(err, docs){
      if(err){
        console.log("Save Error", err);
      }else{
        res.json(docs);
      }
    });
  }
});

//Update ToDo
router.put('/todo/:id', function(req, res, next){
  var id   = req.params.id;
  var todo = req.body;
  var updatedObj = {};
  if(todo.isCompleted){
    updatedObj.isCompleted = todo.isCompleted;
  }
  if(todo.text){
    updatedObj.text = todo.text;
  }
  if(!updatedObj){
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  }else{
    db.todos.update({
      _id: mongojs.ObjectId(id),
    }, updatedObj, {}, function(err, docs){
      if(err){
        console.log("Update Error", err);
      }else{
        res.json(docs);
      }
    })
  }
});

//Delete ToDo
router.delete('/todo/:id', function(req, res, next){
  var id = req.params.id;

  db.todos.remove({
    _id: mongojs.ObjectId(id)
  }, '', function(err, docs){
    if(err){
      console.log("Save Error", err)
    }else{
      res.json(docs);
    }
  });
});

module.exports = router;
