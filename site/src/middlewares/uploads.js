const multer = require("multer");
const path = require("path")

const imageFileFilter = (req, file, cb) => {

  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Solo se permiten imagenes!"));
  }
};

const storageProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, `../../public/images/products`));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-product-" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "- user -" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

const uploadProducts = multer({

  storage: storageProducts,
  fileFilter: imageFileFilter
})

const uploadUser = multer({

  storage: storageUser,
  fileFilter: imageFileFilter

})

module.exports = {
  uploadProducts,
  uploadUser
}





