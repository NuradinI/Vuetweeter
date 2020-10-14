<template>
  <div>
    <i @click="isShow=!isShow" class="far fa-edit" ></i>
    <div v-if="isShow">
      <textarea v-model="comment"></textarea>
      <button @click="editComment">Edit Comment!</button>
    </div>
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
      comment: "",
      isShow: false
    };
  },
  methods: {
    editComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentObject.commentId,
            content: this.comment
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

<style scoped>
</style>