<template>
  <div id="site">
    <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <div id="tweet">
      <h3 class="content">{{tweetObject.username}}</h3>
      <p id="p-tag" class="content">{{tweetObject.content}}</p>
      <h5 id="h5-tag" class="content">{{ tweetObject.createdAt }}</h5>
    </div>
    <div id="icons">
      <delete-tweet class="icon" :tweetObject="tweetObject" />
      <edit-tweet class="icon" :tweetObject="tweetObject" />
      <post-comment class="icon" :tweetId="tweetObject.tweetId" />
      <like-button class="icon"/>
    </div>
    <get-comments :tweetId="tweetObject.tweetId"/>
  </div>
</template>

<script>
import GetComments from '../components/getComments.vue'
import LikeButton from '../components/likes.vue';
import DeleteTweet from "../components/deleteTweet.vue";
import EditTweet from "../components/editTweet.vue";
import PostComment from "../components/postComment.vue";
export default {
  components: {
    DeleteTweet,
    EditTweet,
    PostComment,
    LikeButton,
    GetComments
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
  font-family: "Piazzolla", serif;
}
#icons {
  display: inline-flex;
}
.icon {
  margin: 0px 12px;
  color: #f1e9e3;
}
.tweet {
  margin: 15px 0px;
}
#p-tag {
  padding: 0px 10px;
}
#h5-tag {
  padding: 0px 10px;
}
</style>