import express from 'express';
import compression from 'compression';

const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
