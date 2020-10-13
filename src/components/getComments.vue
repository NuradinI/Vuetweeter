<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <comment-card :tweetObject="tweet"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentCard from '../components/commentCard.vue';
export default {
  props: {
    tweetId: {
        type: Number
    }
  },
  data() {
    return {
      comments: []
    }
  },
  components: {
    CommentCard
  },
  methods: {
    getComments: function() {
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
        },
        params: {
            tweetId: this.tweetId
        }
      }).then((response) => {
          console.log(response)
          this.comments = response.data

      }).catch((error) => {
          console.log(error)
      })
    },
  
  }
};
</script>

<style scoped>
</style>