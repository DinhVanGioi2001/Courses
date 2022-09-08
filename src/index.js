const express = require('express');
const hbs = require('express-handlebars');
var morgan = require('morgan');
var methodOverride = require('method-override')
const path = require('path');
const app = express();
const port = 3000;

const SoftMiddleware = require('./app/middlewares/SoftMiddleware');

const route = require('./routes');
// connnect to db
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

// giúp cho xử lý dữ liệu từ form submit lên sẽ láy xuống được
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// custom middleware    
app.use(SoftMiddleware);

// HTTP logger
// app.use(morgan('combined'))

// Template handlebars
app.engine(
    'hbs', hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: () => {
                
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Router init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
