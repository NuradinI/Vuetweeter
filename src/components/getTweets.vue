<template>
  <div id="body">
      
      <div v-for="tweet in tweets" :key="tweet.tweetId" >
<tweet-card :tweetObject="tweet" />
      </div>
  </div>
</template>

<script>
import axios from "axios";
import TweetCard from '../components/tweetCard.vue'
export default {
    components: {
        TweetCard,
    },
  data() {
    return {
      tweets: []
    };
  },
  methods: {
    getTweets: function() {
      axios.request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
        },
        
      }).then((response) => {
          this.tweets = response.data
          
          console.log(response)
      }).catch((error) => {
          console.log(error)
      })
    }
  },
  mounted () {
      this.getTweets();
  },
};
</script>

<style scoped>
#body {
  background-color: rgb(21, 32, 43);
}
</style>