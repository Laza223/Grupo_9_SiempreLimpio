module.exports = (req, res, next) => {
    if(req.session.registerMsg) {
      res.locals.registerSuccess = req.session.registerMsg
    }
  
    next()
  };