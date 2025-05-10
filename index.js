import express, { json } from "express"
import cors from "cors"
import morgan from "morgan";

const router = express.Router()
const app = express()

// cors untuk membuka ip yang diperbolehkan komunikasi dengan server
app.use(cors())
// mendaftarkan folder public agar bisa diakses langsung oleh client
app.use(express.static('public'));
// template engine untuk memproses data dinamis
app.set('view engine', 'ejs')

// config parser data yang di kirim oleh client
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// hanya untuk menampilkan metodhe yang dikirim client
app.use(morgan("dev"))

// path router yang diregistrasi
router
    .get("/", (req, res) => {
        return         // return res.render('index', {data: [{ title: 'Yazid', message: 'Hello there!' }, { title: 'Yazi2', message: 'Hello there!' }]})

    })
    .post("/users", (req, res) => {
        console.log(req.body, "BODY", req.headers["token"])
        return res.status(200).json({ message: "Restfull api" })
    })
    .get("/query", (req, res) => {
        console.log(req.query, "QUERY")
        return res.status(200).json({ message: "Restfull api" })
    })
    .get("/users", (req, res) => {
        return res.render('users', { data: [{ title: 'Yazid3', message: 'Hello there!333' }, { title: 'Yazi2', message: 'Hello there!' }] })
    })
    .get("/products", (req, res) => {
        return res.status(200).json([{ name: "sabun" }, { name: "kopi" }])
    })


app.use(router)

const port = 3000

app.listen(port, () => {
    console.log("Listen port : " + port)
})


