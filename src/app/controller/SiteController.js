const Course = require('../models/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class SiteController {
    //[GET]/news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
