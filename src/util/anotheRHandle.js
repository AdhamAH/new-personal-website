const express = require("express")
const nodemailer = require("nodemailer")

const router = express.Router()
const cors = require("cors")


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use("/", router)

const contactAddress = "contact@adhamabohasson.com"

const transport = {
    host: "gnld1002.siteground.eu",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "contact@adhamabohasson.com", // generated ethereal user
        pass: "OSXEP544QOyn", // generated ethereal password
    }
}

const transporter = nodemailer.createTransport(transport)


transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Server is ready to take messages")
  }
})

router.post("/send", (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const company = req.body.company

    const mail = {
      from: [contactAddress],
      to: "aah@adhamabohasson.com",
      subject: "new contact",
      html: `<h4>New message</h4>
      <p>name: ${name}</p>
      <p>company: ${company}</p>
      <p>message: ${message}</p>
      <p>replay to: ${email}</p>
      `,
    }
  transporter.sendMail(mail, (err, data) => {
      if (err) {
        
          res.send(err).json({
          
        status: "fail",
      })
    } else {
      res.json({
        status: "success",
      })
    }
  })
})
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})