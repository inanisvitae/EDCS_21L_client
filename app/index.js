import express from 'express';
import compression from 'compression';

const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
