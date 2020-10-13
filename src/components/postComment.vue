<template>
  <div>
    <i class="fas fa-comments"></i>
    <div v-if="isShow"> 
<textarea v-model="comment"></textarea>
    <button @click="postComment" >Post Comment!</button>
    </div>
    
    <h4 id="comment"></h4>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    tweetId: {
      type: Number
    }
  },
  data() {
    return {
      comment: "",
      isShow: false
    };
  },
  methods: {
    postComment: function() {
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
        },
        data: {
          loginToken: cookies.get("session"),
          tweetId: this.tweetId,
          content: this.comment
        }
      }).then((response) => {
          console.log(response)
          document.getElementById('comment').innerHTML = this.comment
      }).catch((error) => {
          console.log(error)
          
      })
    }
  }
};
</script>

<style scoped>
</style>