<template>
  <div>
    <i @click="postLikes" class="far fa-heart"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies';
export default {
      props: {
    tweetObject: {
      type: Object
    },
  },
  data() {
    return {
      like: false
    };
  },
  methods: {
    postLikes() {
      axios.request({
        url: "https://tweeterest.ml/api/tweet-likes",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB",
          data: {
              loginToken: cookies.get('session'),
              tweetId: this.tweetObject.tweetId 
          }
        }
      }).then((response) => {
          console.log(response)
      }).catch((error) => {
          console.log(error)
      })
    }
  }
};
</script>

<style scoped>
</style>