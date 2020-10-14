<template>
  <div id="site">
     <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <div id="tweet">
      <h3 id="post">Post a Tweet!</h3>
      <textarea v-model="tweet"></textarea>
      <br />
      <button @click="postTweet">Submit</button>
      <p id="status"></p>
      <h3 class="tweets"></h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      tweet: ""
    };
  },
  methods: {
    postTweet() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.tweet
          }
        })
        .then(response => {
          console.log(response);
          document.getElementsByClassName("tweets").innerHTML = this.tweet;
        })
        .catch(error => {
          console.log(error);
          document.getElementById("status").innerHTML =
            "Oops! Something went wrong";
        });
    }
  }
};
</script>

<style scoped>
#site {
  text-align: center;
  background-color: rgb(21, 32, 43);
}
h3 {
  padding-top: 4vh;
}
#post {
color: #f1e9e3;
  font-family: "Piazzolla", serif;
}
</style>