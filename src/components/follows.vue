<template>
  <div>
<button @click="followUser">Follow User!</button>
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'
  export default {
    props: {
      followId: {
        type: Number,
        required: true
      }
    },
    methods: {
    followUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: this.followId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
 
  }
  
</script>

<style scoped>

</style>