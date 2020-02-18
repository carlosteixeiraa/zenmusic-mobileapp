var express = require('express');
var request = require('request');
var app = express();
var port = process.env.PORT || 18733;

app.set('view engine', 'pug');
app.use(express.static('static'));

/*
app.get('/client', (req, res) => {
  if(req.query.q) {
    request('https://zenmusic-infoapi.herokuapp.com/music/search/' + req.query.q, { json: true }, (err, ress, body) => {
      if (err) {
        console.log(err);
      } else {
        if(req.query.m) {
          res.render('main', {
            musics: body,
            query: req.query.q,
            playermusicid: req.query.m,
            playermusictitle: req.query.t,
            playing: true,
            page: req.query.page,
            browse: true
          });
        } else {
          res.render('main', {
            musics: body,
            query: req.query.q,
            playermusicid: req.query.m,
            playermusictitle: req.query.t,
            playing: false,
            page: req.query.page,
            browse: true
          });
        }
      }

    });
  } else {
    res.render('main');
  }

  });
*/

app.get('/client', (req, res) => {

          res.render('main', {
            query: req.query.q,
            playermusicid: req.query.m,
            playermusictitle: req.query.t,
            playing: true,
            page: req.query.page,
            browse: true
          });

});


app.listen(port, () => {
  console.log('mobile app listening on http://localhost:' + port);
});
