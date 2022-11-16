import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import expresslayout from 'express-ejs-layouts'
import employeeRoute from './routes/employeeRoute.js'
import indexRoute from './routes/indexRoute.js'

const app = express()
const port = 3000

app.set('view engine','ejs')

app.use(cors())
app.use(express.json())
app.use(expresslayout)
app.use(employeeRoute)
app.use(indexRoute)
app.use(express.static('./public'))
app.use(express.static('./public/foto'))


const main = async (req,res) => {
    await mongoose.connect('mongodb+srv://iqblfrdsyh:punyaiqbal@cluster0.gume9tn.mongodb.net/company?retryWrites=true&w=majority')
    .finally(console.log('connected'))
}

main().catch(error => console.log(error))

app.listen(port, () => {
    console.log(`Server belanja pada port ${port}`)
  })



