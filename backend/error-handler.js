const ErrorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  res.status(500).send("something is wrong")
};
module.exports = ErrorHandlerMiddleware
