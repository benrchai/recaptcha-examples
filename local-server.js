const express = require('express')
var path = require('path');
const app = express()
const port = 3000

app.get('/recaptcha-v2-checkbox.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/examples/recaptcha-v2-checkbox.html`);
});

app.get('/recaptcha-v2-checkbox-explicit.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/examples/recaptcha-v2-checkbox-explicit.html`);
});

app.get('/recaptcha-v2-invisible.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/examples/recaptcha-v2-invisible.html`);
});

app.get('/recaptcha-v3.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/examples/recaptcha-v3.html`);
});

app.get('/recaptcha-v3-explicit.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/examples/recaptcha-v3-explicit.html`);
});

app.get('/styles.css', function (req, res) {
  res.set('Content-Type', 'text/css');
  res.sendFile(`${__dirname}/styles.css`);
});

app.post('/verify', function (req, res) {
  console.log(req.body);
  res.status(200).json('SUCCESS!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))