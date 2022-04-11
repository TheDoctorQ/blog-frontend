<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      post: {}
    };
  },
  created: function () {
    this.showPost();
  },
  methods: {
    showPost: function () {
      console.log('showing post...')
      // get data from rails show action
      console.log(this.$route.params.id);
      axios.get(`/posts/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.post = response.data;
      })
    }
  },
};
</script>

<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
    <p>id: {{ post.id }}</p>
    <p>title: {{ post.title }}</p>
    <p>body: {{ post.body }}</p>
    <p>image: {{ post.image }}</p>
    <img v-bind:src="post.image" />
    <br />
    <a href="/posts/">All Posts</a>
  </div>
</template>

<style></style>