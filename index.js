import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const createdPosts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
  res.render("index.ejs", { createdPosts });
});

// Create new blog
app.get("/create", (req, res) => {
  res.render("create.ejs");
});

// Submit new blog
app.post("/submit", (req, res) => {
  const month = new Date().getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date().getDate();
  const blogDate = monthNames[month] + " " + date;

  const blogPost = {
    blogTitle: req.body["blogTitle"],
    blogContent: req.body["blogContent"],
    blogDate,
    blogLink: "continue reading"
  };

  createdPosts.push(blogPost);
  console.log(createdPosts);
  res.redirect("/");
  //   alert("new");
});

// View a blog
app.get("/view/:postId", (req, res) => {
    const index = req.params.postId;
    console.log(index);

    res.render("view.ejs", {createdPosts, postId: index});
});


// View a blog
app.get("/view/:postId", (req, res) => {
    const index = req.params.postId;
    console.log(index);

    res.render("view.ejs", {createdPosts, postId: index});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
