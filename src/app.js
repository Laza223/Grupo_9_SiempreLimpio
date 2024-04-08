var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');  //PUT Y DELETE HABILITADO
const partials = require("express-partials")
const session = require("express-session")

const checkUser = require("./middlewares/checkUser")
const checkUserCookies  = require('./middlewares/checkUserCookies');

/* RUTAS */
const authRoutes = require("./routes/authentication.routes");
const userRoutes = require("./routes/user.routes");
const cartRoutes = require("./routes/cart.routes");
const homeRoutes = require("./routes/home.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");


var app = express();

//app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({ secret: "palabra secreta"}) );
app.use(checkUser)
app.use(checkUserCookies)


/* CONFIGS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ENRUTADORES */
app.use("/", homeRoutes);
app.use("/autenticacion", authRoutes);
app.use("/perfil", userRoutes);
app.use("/carrito", cartRoutes);
app.use("/productos", productRoutes);
app.use("/admin", adminRoutes);

app.use((req,res, next) => {
  res.status(404).render("notFound")
})

// catch 404 and forward to error handler
/* app.use(function(err,req, res, next) {
  console.log("error",err);
  console.log("--------------------");
  console.log(req);
  console.log("--------------------");
  console.log(res);
  next(createError(404));
}); */

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development}
  console.log("error",err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(methodOverride('_method')); //PUT Y DELETE HABILITADO

module.exports = app;
