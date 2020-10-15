<template>
  <div>
      <i @click="likeComment" class="far fa-heart"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    commentObject: {
      type: Object
    }
  },
data() {
    return {
        commentId: this.commentObject.commentId,
        userId: this.commentObject.userId,
        username: this.commentObject.username
    }
},
  methods: {
    likeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentObject.commentId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style  scoped>
</style>