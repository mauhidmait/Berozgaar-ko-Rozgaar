const mongoose = require('mongoose');
const router = require('express').Router();   
const User = mongoose.model('User');
const utils = require('../lib/utils');


router.get('/api/profile', utils.authMiddleware, (req, res, next) => {
    // console.log(req.jwt);
    const userId = req.jwt.sub; // Retrieve the user ID from the req object
  
    // Assuming you have a User model representing your MongoDB collection
    User.findById(userId)
      .then((user) => {
        if (user) {
          const profileData = {
            username: user.username,
            // Include other profile properties as needed
          };
  
          res.status(200).json({ success: true, profileData: profileData, msg: "You are successfully authenticated to this route!" });
        } else {
          res.status(404).json({ success: false, msg: "User not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ success: false, msg: "An error occurred while fetching the profile data" });
      });
  });

// Validate an existing user and issue a JWT
router.post('/api/login', function(req, res, next){

    User.findOne({ username: req.body.username })
        .then((user) => {

            if (!user) {
                res.status(401).json({ success: false, msg: "could not find user" });
            }
            
            // Function defined at bottom of app.js
            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
            
            if (isValid) {

                const tokenObject = utils.issueJWT(user);

                res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });

            } else {

                res.status(401).json({ success: false, msg: "you entered the wrong password" });

            }

        })
        .catch((err) => {
            next(err);
        });
});

// Register a new user
router.post('/api/register', function(req, res, next){
    // res.send('register');
    const saltHash = utils.genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt
    });

    try {
    
        newUser.save()
            .then((user) => {
                res.json({ success: true, user: user });
            });

    } catch (err) {
        
        res.json({ success: false, msg: err });
    
    }

});

module.exports = router;