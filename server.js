var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    properties = require('./server/property-service'),
    brokers = require('./server/broker-service'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

app.get('/properties', properties.findAll);
app.get('/properties/favorites', properties.getFavorites);
app.get('/properties/:id', properties.findById);
app.post('/properties/likes', properties.like);
app.post('/properties/favorites', properties.favorite);
app.delete('/properties/favorites/:id', properties.unfavorite);

app.get('/brokers', brokers.findAll);
app.get('/brokers/:id', brokers.findById);

app.listen(app.get('port'), function () {
    console.log('Realty server listening on port ' + app.get('port'));
});