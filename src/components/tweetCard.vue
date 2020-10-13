<template>
  <div id="site">
    <link href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap" rel="stylesheet">
    <div id="tweet">
      <h3 class="content">{{tweetObject.username}}</h3>
      <p class="content">{{tweetObject.content}}</p>
      <h5 class="content">{{ tweetObject.createdAt }}</h5>
    </div>
    <div id="icons">
      <delete-tweet class="icon" :tweetObject="tweetObject" />
      <edit-tweet class="icon" :tweetObject="tweetObject" />
      <post-comment class="icon" :tweetId="tweetObject.tweetId" />

    </div>
  </div>
</template>

<script>
import DeleteTweet from "../components/deleteTweet.vue";
import EditTweet from "../components/editTweet.vue";
import PostComment from "../components/postComment.vue";
export default {
  components: {
    DeleteTweet,
    EditTweet,
    PostComment
  },
  props: {
    tweetObject: {
      type: Object
    }
  }
};
</script>

<style scoped>
#site {
  padding: 1px 1px;
  display: inline-block;
  
}
.content {
    padding: 6px 3px;
    color: #f1e9e3;
    font-family: 'Piazzolla', serif;

}
#icons {
    display: inline-flex;
}
.icon {
    margin: 0px 12px;
}
.tweet {
        margin: 15px 0px;
}
</style>