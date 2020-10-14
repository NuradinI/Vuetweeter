<template>
  <div>
    <i @click="deleteComment" class="far fa-trash-alt"></i>
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
  methods: {
    deleteComment: function() {
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
        },
        data: {
            loginToken: cookies.get('session'),
            commentId: this.commentObject.commentId
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