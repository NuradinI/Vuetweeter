<template>
  <div>
     <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <div id="comment">
      <h4 class="content">{{ commentObject.username }} commented:</h4>
      <p class="content">{{ commentObject.content }}</p>
      <p class="content">{{ commentObject.createdAt }}</p>
    </div>
    <div id="icons">
      <get-comments class="icon" />
      <delete-comment class="icon" :commentObject="commentObject" />
      <edit-comment class="icon" :commentObject="commentObject"  />
      <comment-likes class="icon" :commentObject="commentObject"  />
    </div>
  </div>
</template>

<script>
import GetComments from "../components/getComments.vue";
import EditComment from "../components/editComments.vue";
import DeleteComment from "../components/deleteComments.vue";
import CommentLikes from "../components/likes.vue";
export default {
  components: {
    GetComments,
    EditComment,
    DeleteComment,
    CommentLikes
  },
  props: {
    commentObject: {
      type: Object
    }
  }
};
</script>

<style scoped>
#comment {
  padding: 0px 20px;
  color: #f1e9e3;
}
#icons {
  display: inline-flex;
  
}
.icon {
   margin: 0px 7px;
   color: #f1e9e3;
}
.content {
  font-family: "Piazzolla", serif;
}
</style>