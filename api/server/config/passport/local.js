const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, user) => {

  const User = user;

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      if (user) {
        done(null, user);
      } else {
        done(user.error, null);
      }
    } catch (err) {
      done(err, null);
    }
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,  // allows for entire request to be passed in callback
  }, async (req, email, password, done) => {
    const userEmailTaken = await User.findOne({where: {email:email}});
    if (userEmailTaken) {
      return done(null, false, {message: 'Email already in use'});
    } else {
      const passwordHash =  bcrypt.hashSync(password, 10);
      const data = {
        email: email,
        password: passwordHash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };

      const newUser = await User.create(data);
      if(newUser) {
        return done(null, newUser);
      } else {
        return done(null, false);
      }
    }
  }));

  passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
      const userEmailExists = await User.findOne({where: {email: email}});
      if (!userEmailExists) {
        return done(null, false, { message: 'Email does not exist' });
      } 
      if ( bcrypt.compareSync(user.password, password)) {
        return done(null, false, { message: 'Incorrect password'});
      }

      const userInfo = user.get();
      return done(null, userInfo);
    } catch (err) {
      console.log("Error: ", err);
      return done(null, false, { message: 'Error encountered during signin'});
    }
  }));
  
};