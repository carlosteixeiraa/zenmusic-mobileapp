var express = require('express');
var request = require('request');
var app = express();
var port = process.env.PORT || 18733;

app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/genres', (req, res) => {
  res.render('home');
});

app.get('/browse', (req, res) => {
  var musics;
  if(req.query.q) {
    request('https://zenmusic-infoapi.herokuapp.com/music/search/' + req.query.q, { json: true }, (err, ress, body) => {
      if (err) {
        console.log(err);
      } else {
        if(req.query.m) {
          res.render('browse', {
            musics: body,
            query: req.query.q,
            playermusicid: req.query.m,
            playermusictitle: req.query.t,
            playing: true,
          });
        } else {
          res.render('browse', {
            musics: body,
            query: req.query.q,
            playermusicid: req.query.m,
            playermusictitle: req.query.t,
            playing: false
          });
        }

      }
    });



  } else {
    res.render('browse');
  }
});

app.get('/player', (req, res) => {
  res.render('player');
});

app.listen(port, () => {
  console.log('mobile app listening on http://localhost:' + port);
});
