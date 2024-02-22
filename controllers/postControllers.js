import Post from "../models/Post.js";

export const getAllPosts = async (req, res, next) => {
  // GET to http://<host>/posts
  // res.send("Get All posts Route");
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error); // return to your global error handler in the next Fn
  }
};

export const createNewPost = async (req, res, next) => {
  try {
    // POST to http://<host>/posts
    let { title, body } = req.body; // you got an access to that body bc of middleware express.json() in server.js
    let post = new Post(title, body);
    post = await post.save(); // save() is async Fn
    // console.log(post);
    // res.send("Created a New Post Route & saved to db");
    res.status(201).json({ message: "Post Created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    // GET to http://<host>/posts/<id>, ex: http://localhost:3000/posts/6
    // res.send("Get Post By ID Route");
    let postId = req.params.id; // from params. This is allowed when in Route I specified '/:id' Now if I want to get that value I can extract it in the req params.

    // use await bc of db.mjs file has exported the Promise
    // it returns 2 things and you destructure it and throw away 2nd one:
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
