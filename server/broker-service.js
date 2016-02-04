var BROKERS = require('./mock-brokers').data;

function findAll(req, res, next) {
    return res.json(BROKERS);

};

function findById(req, res, next) {
    var id = req.params.id;
    res.json(BROKERS[id - 1]);
}

exports.findAll = findAll;
exports.findById = findById;