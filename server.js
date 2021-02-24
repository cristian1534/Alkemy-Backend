const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');

// use...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router...
app.use('/api', routes);

// server...
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost: ${PORT}`);
  });
});
