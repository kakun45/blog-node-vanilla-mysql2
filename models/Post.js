// ES6. Mian file to interract with db.
import db from "../config/db.mjs";

// Create a Post and use different db methods; Vanilla SQL
class Post {
  constructor(title, body) {
    // to create fields on this obj
    this.title = title;
    this.body = body;
  }

  // to save to db; only accessible on an instance of this class
  save() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1; // 0-based
    let day = d.getDate();

    let createdAtDate = `${year}-${month}-${day}`;
    console.log(createdAtDate);

    let sql_statement = `
    INSERT INTO posts (
      title, 
      body,
      created_at
    )
    VALUES (
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    );
    `;
    // MUST use '' around strings
    // MUST NOT put the comma at the end of query after: '${createdAtDate}' this crushes the server as invalid SQL syntax.

    // return a SQL statrement to a user as a Promise
    return db.execute(sql_statement); // save() is no longer async, let's handle await not here
  }

  // no need of instance of the class use: Post.findAll();
  // V.S.
  // const p = new Post();
  // p.findAll();
  static findAll() {
    let sql = `SELECT * FROM posts;`;
    return db.execute(sql); // promise
  }
  static findById(id) {
    // id is not a str, => doesn't need '' around
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql); // promise
  }
}

export default Post;
