const express = require('express');
const mysql = require('mysql');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      if (error) {
        console.error('エラーが発生しました:', error);
        return;
      }
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      if (error) {
        console.error('エラーが発生しました:', error);
        return;
      }
      res.redirect('/');
    }
  );
});

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      if (error) {
        console.error('エラーが発生しました:', error);
        return;
      }
      res.redirect('/');
    }
  );
});

app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      if (error) {
        console.error('エラーが発生しました:', error);
        return;
      }
      res.render('edit.ejs', {item: results[0]});
    }
  );
});

app.post('/update/:id', (req, res) => {
  connection.query(
    'UPDATE items SET name=? WHERE id=?',
    [req.body.itemName, req.params.id],
    (error,results)=>{
      if (error) {
        console.error('エラーが発生しました:', error);
        return;
      }
      res.redirect('/');
    }
  );
});

app.listen(3000);
