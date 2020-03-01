const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
const SimpleSnackbar = "./components/res"

const app = express()
app.use(express.urlencoded({ extended: true }))

const contactAddress = "contact@adhamabohasson.com"

const mailer = nodemailer.createTransport({
  host: "gnld1002.siteground.eu",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "contact@adhamabohasson.com", // generated ethereal user
    pass: "OSXEP544QOyn", // generated ethereal password
  },
})
app.post("/contact", function(req, res) {
  mailer.sendMail(
    {
      from: [contactAddress],
      to: "adham.ahasson@gmail.com" ,
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function(err, info) {
      if (err) return res
                 .status(500)
                 .send(console.log(err+"error"))
                 .send(err)
      res.redirect("http://localhost:8000/#success").send(console.log('sent'))

      
    }
  )
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})