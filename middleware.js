module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide age");
  }
  if (req.query.age < 18) {
    resp.send("you can not access provide age");
  } else {
    next();
  }
};
