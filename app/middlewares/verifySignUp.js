const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({username: req.body.username})
      .exec((err, user) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {

    // por si se envia el role en un string desde un form en vez de un array como
    //  venia por defecto
    let rol = typeof (req.body.roles);
    if(typeof (req.body.roles) === 'string' ){
      let issetROLES = ROLES.includes(req.body.roles)
      console.log(issetROLES);
      if (!issetROLES){
        return res.status(400).send({
          message: `ERROR! Role ${req.body.roles} does not exist!`
        });
      }
    }
    else{
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: `Failed! Role ${req.body.roles[i]} does not exist!`
          });
          return;
        }
      }
    }

  }
  next();
};

const verifySignUp = { checkDuplicateUsernameOrEmail, checkRolesExisted };

module.exports = verifySignUp;
