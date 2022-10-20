const users = []
const bcrypt = require('bcrypt')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          bcrypt.compare(password, users[i].password, function(err, success) {
            if(!err) {
              if(success) {
                let account = users[i]
                account.password = ''
                console.log('good')
                res.status(200).send(account)
              } else {
                res.status(400).send("oops")
              }
            } else {
              console.log("Bcrypt down call the guard!!")
            }
          })
        } else {
        res.status(400).send("User not found.")
      }
      }
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        let { username, email, password, firstName, lastName } = req.body
        let userAcct = {}
        userAcct.username = username
        userAcct.email = email
        userAcct.firstName = firstName
        userAcct.lastName = lastName
        bcrypt.hash(password, 10, (err, hashPass) => {
          userAcct.password = hashPass
          users.push(userAcct)
        })
        res.status(200).send(userAcct)
    }
}