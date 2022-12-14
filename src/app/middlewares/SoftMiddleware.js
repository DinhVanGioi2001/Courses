module.exports = function SoftMiddleware (req, res, next) {

    res.locals._sort = {
        enable: false,
        type: 'default'
    }

    if(req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enable = true,
        res.locals.type = req.query.type;
        res.locals.column = req.query.column;
    }

    next();
}