---
title: PostgreSQL – How to add Array Data Type and Quiz Api in Nodejs
published: Aug 29, 2021
language: English
---

Have you ever wanted to add array data types in your application for example when trying to make a quiz app and you had been confused? How to do it in PostgreSQL and as a bonus I will show you how to add it using Nodejs and test it in postman In addition I assume you have basic knowledge of both technologies. In the leading paragraphs will see how to implement it.

**Requirements**

- Nodejs installed

- Postgresql installed

- Postman installed

**What will cover**

1. Array Data type in Postgres

2. Post data in the table using nodejs

3. Test it using Postman

**Steps to follow**

**NPM installs **

```
npm i express pg cors
```

**files**

**database.sql file**

```
CREATE TABLE test(
  test_id uuid DEFAULT uuid_generate_v4(),
  test_name VARCHAR(255) NOT NULL,
  test_question VARCHAR(255) NOT NULL,
  test_choice varchar[4] NOT NULL,  --this is important you can choose  it to be text number any thing you want but always specify the limit of your array
  test_answer  VARCHAR(255) NOT NULL,
  teacher_email VARCHAR(255) NOT NULL,
  class_year_content VARCHAR(255) NOT NULL,
  timestamp timestamp default current_timestamp,
  PRIMARY KEY(test_id)
);
```

**data type in PostgreSQL how to declare arrays in Postgres**

```
CREATE TABLE sal_emp (
    name            text,
    pay_by_quarter  integer[],
    schedule        text[][],
   summary        varchar[]
);

```

**Nodejs part**

```
npm init -y
```

**db.js file in the parent folder and it should include this**

```
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "your password",
  host: "localhost",
  port: 5432,
  database: "your database"
});

module.exports = pool;
```

**index.js file in the parent folder and it should include this**

```
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

app.post('/test', async (req, res) => {
  try {
    const {name, question, answers, email, classe} = req.body;
    const newTodo = await pool.query(
      'INSERT INTO test (test_name, test_question, test_choice, test_answer, teacher_email, class_year_content) VALUES ($1, $2, $3,$4,$5, $6) RETURNING *',
      [name, certificate, question, req.body.choices, answers, email, classe],
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get('/test', async (req, res) => {
  try {
    const user = await pool.query('SELECT * from test');

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
```

make sure to run

```
 npm start
```

**postman**

![https___college-.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630257499400/v9pAqSonX.png)

click send

As conclusion this is very important as above we have learned many things that will help you in the future if you face any error please tell me in the comments and I will be thrilled to help you out. Thank you very much and I hope it helped you
