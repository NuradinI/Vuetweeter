<template>
  <div>
   <i @click="isShow=!isShow" class="fas fa-edit"></i>
    <div v-if="isShow"> 
      <textarea v-model="tweet"></textarea>
      <button @click="editTweet">Post!</button>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    tweetObject: {
      type: Object
    }
  },
  data() {
    return {
      tweet: "",
      isShow: false
    };
  },
  methods: {
    editTweet() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetObject.tweetId,
            content: this.tweet
          }
        })
        .then(response => {
          console.log(response);
          //want a textbox to appear after clicking on the editTweet button and you can write your new tweet in there and it updates
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>