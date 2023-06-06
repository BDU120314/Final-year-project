const NotFoundMiddleware = (req, res) => {
    res.status(404).send("route is not found ")
  };
  
  
  module.exports = NotFoundMiddleware