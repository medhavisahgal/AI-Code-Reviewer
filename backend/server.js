const app = require('./src/app')
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
//this is for testing the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});
