var posts=["posts/4a17b156.html","posts/29c15ce3.html","posts/f7dc1405.html","posts/6b877bd2.html","posts/7473ed9b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };