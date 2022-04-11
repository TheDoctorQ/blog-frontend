<script>import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Posts Index Page!",
      posts: [],
    };
  },
  created: function () {
    this.PostsIndex();
  },
  methods: {
    PostsIndex: function () {
      console.log("posts index...")
      axios.get('/posts.json').then(response => {
        console.log(response.data);
        this.posts = response.data;
      }
      )
    }
  },
};
</script>

<template>
  <div class="posts-index">
    <div v-for="post in posts">
      {{ post.title }}
      <br />
      <router-link v-bind:to="`/posts/${post.id}`">More Info</router-link>
      <br />
      {{ post.body }}
      <br />
      <img v-bind:src="post.image_url" />
      <hr />
    </div>
  </div>
</template>