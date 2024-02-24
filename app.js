const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const methodOverride = require("method-override")

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride("_method"))

/* RUTAS */
const productCart = require("./routes/cart.routes");
const otherRoutes = require("./routes/other.routes");
const detalleProductRoutes = require("./routes/products.routes");




/* ENRUTADORES */
app.use("/", otherRoutes);
app.use("/productCart", cartRoutes);
app.use("/detalleProductos", detalleProductRoutes);



app.listen(port, () => console.log(`http://localhost:${port}`));
