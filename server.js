const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');
var bodyParser = require('body-parser')

// use for data on Postman...
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// router...
app.use('/api', routes);

// server...
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost: ${PORT}`);
  });
});
