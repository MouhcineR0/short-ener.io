require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const v1Router = require("./modules/v1/urls/url.routes");

const app = express();

app.use(cookieParser());


app.use(
	cors({
		origin: process.env.FRONTEND_URL || "*",
		credentials: true
	}));


app.use("/api/v1", v1Router);

// Global Error handler ...

// app.use()



const PORT = process.env.PORT || 3307;

app.listen(PORT, () => {
    console.log(`running on process PORT ${PORT}`);
})