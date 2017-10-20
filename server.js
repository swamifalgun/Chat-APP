const express = require('express');
const app = express();
const chatcat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatcat.session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', chatcat.router);

chatcat.ioServer(app).listen(app.get('port'), () => {
    console.log('Application running on port:', app.get('port'));
});