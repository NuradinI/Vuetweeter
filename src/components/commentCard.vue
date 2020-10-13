<template>
  <div>
      <h4>{{ tweetObject.username }} commented:</h4>
      <p>{{ tweetObject.content }}</p>
      <p>{{ tweetObject.createdAt }}</p>
  <get-comments/>
<delete-comment/>
<edit-comment/>

  </div>
</template>

<script>
import GetComments from '../components/getComments.vue'
import EditComment from "../components/editComments.vue";
import DeleteComment from "../components/deleteComments.vue";
export default {
  components: {
    GetComments,
    EditComment,
    DeleteComment
  },
  props: {
    tweetObject: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>