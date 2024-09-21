var posts=["posts/4a17b156.html","posts/29c15ce3.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };