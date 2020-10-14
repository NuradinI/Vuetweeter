<template>
  <div>
    <div v-for="user in users" :key="user.userId">
      <follows-card :usersObject="user"  />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FollowsCard from "../components/followsCard.vue";
export default {
  props: {
    usersObject: {
      type: Object
    }
  },
  components: {
    FollowsCard
  },
  data() {
    return {
      follows: []
    };
  },
  methods: {
    getUsers: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          }
        })
        .then(response => {
          this.follows = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style scoped>
</style>