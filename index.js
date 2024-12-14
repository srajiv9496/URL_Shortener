const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser");
const  {connectMongoDB} = require("./connection")

const URL = require("./models/url")

const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRoute")
const userRoute = require("./routes/user");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");

const app = express();
const PORT = 8001;

connectMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("MongoDB Connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL", "ADMIN"]),urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).send('Short URL not found');
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error('Error in GET route:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));