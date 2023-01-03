const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");

// Import routes
const userRoutes = require("./routes/users.routes");

// Set up template engines
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));

// API routes
// users
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hahahhaa");
});

app.get("/blogs", (req, res) => {
  //
  res.sendFile("/blogs.html", { root: "./public" });
});

app.get("/users", (req, res) => {
  res.sendFile("/users.html", { root: "./public" });
});

app.get("/demo-ejs", (req, res) => {
  // Get all users
  // users
  res.render(`demo-ejs`, {
    username: "Chiến hiến máu",
    numbers: [1, 2, 3, 4, 5],
  });
});

// Model - View - Controller

// Model - Sẽ chứa những đoạn logic code về business (nghiệp vụ) của dự án

// View - Sẽ chứa những đoạn logic code để render ra trang web

// Controller - Sẽ chứa những logic code để điều khiển luồng của chương trình

// NOTE:
// - Model sẽ được phình to
// - Controller phải tối giản

app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
