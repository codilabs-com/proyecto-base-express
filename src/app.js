const app = require('express')(),
    session = require('express-session'),
    port = 3000;

var servicesRoute = require('./services/services.route'),
    viewsRoute = require('./views/views.route');

app.use(session({
  secret: 'codiredes',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');
app.use('/api', servicesRoute);
app.use('/', viewsRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))