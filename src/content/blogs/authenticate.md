---
title: How to Authenticate and authorize in nodejs
published: Jul 29, 2021
language: English
---

Have you ever wanted to authenticate and authorize your users on your website? and you don't know-how. this can affect your web app as everyone is concerned about their privacy. There are several ways to handle authentication, we can rely on third-party services like Passport. But in this article, we will use a very simple & self-developed approach, which will help us to understand the core part of the authentication.

**Requirements**

- Nodejs

- database: PostgreSQL or other you know

**Technology Used**

- Database: PostgreSQL

- Password Hash: bcrypt

- Token: JWT(jsonwebtoken)

- Multer for uploading photos

- Cloudinary for storing user photo

**npm(node package manager) to install
**

```bash
npm i bcrypt  cloudinary jsonwebtoken multer pg
```

**Basic Structure**

First, make your basic express server.

```js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

router.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
```

**Registration / Signup**

First, make a file named register.js in your directory it should look like this.

```js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("./db"); // database connection
const jwtGenerator = require("./jwtGenerator");
// make a file named multer.js in your directory
const upload = require("./multer");
// make a file named cloudinary to keep your credentials
const cloudinary = require("./cloudinary");

router.post("/register", upload, async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);

    const photo = result.url;
    // it checks if the email is used or not
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (user_name,user_photo, user_email, user_password) VALUES ($1, $2, $3,$4, $5) RETURNING *",
      [name, photo, email, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.status(200).json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
```

**Login**

```js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("./db");
const jwtGenerator = require("./jwtGenerator");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
```

**Verify**
You can put it anywhere you want for example login.js or residter.js

```js
// the file must be required in order to verify the user
const authorize = require("./authorize");

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});
```

**jwtGenerator file**

this file must exist in order to generate the token it should look like this.

```js
const jwt = require("jsonwebtoken");

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id,
    },
  };

  return jwt.sign(payload, yourJwtSecret, { expiresIn: "2h" });
}

module.exports = jwtGenerator;
```

**multer file**

```js
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("photo");

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb({ message: "Error: Images Only!" }, false);
  }
}

module.exports = upload;
```

**cloudinary file**

In this file, your will need to register in cloudinary the URL:https://cloudinary.com/users/register/free

After doing so go to dashboard and copy and paste your credentials it will be like this

```js
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: //CLOUDINARY_NAME,
    api_key: //CLOUDINARY_API_KEY,
    api_secret: //CLOUDINARY_API_SECRET,
});

module.exports = cloudinary ;
```

**authorize file**

```js
const jwt = require("jsonwebtoken");
require('dotenv').config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, //jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}
```

**db file**

```js
const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "//your password",
  port: 5432,
  database: "//name of your database",
});

module.exports = pool;
```

**Now in server or main file should look like this**

```js
const express = require("express");
const app = express();
const pool = require("./db");
const authorize = require("./authorize");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.use("/", require("./routes/register"));

app.use("/", require("./login"));

router.get("/", async (req, res) => {
  res.send("hello");
});

router.get("/profile", authorize, async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM user WHERE user_id = $1", [
      req.user.id,
    ]);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
```

**Important folder**

- uploads folder(should make it so, that multer can access it)

**Additional**
for database

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_photo VARCHAR(255) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);
```

**As a conclusion** you can take this further, and it was written to help people out there who have no clue or have but have never tried and take this article as personal experience and I am not an expert but there are millions of ways to make this work if you face any problem, please tell me I will be happy to help you. you can contact me on my email: brunoblaise94@gmail.com and if it is scary to you and you do not where to start, please let me know if you need a version of this article in a video and I post here mainly pern (PostgreSQL(database), expressjs(server-side), reactjs(client/frontend), nodejs(backend) staffs and errors during the deployment every two weeks. I have a nice day.
