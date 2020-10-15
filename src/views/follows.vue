<template>
  <div id="site">
    <page-header/>
    <div v-for="user in users" :key="user.userId">
      <follows-card :usersObject="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FollowsCard from "../components/followsCard.vue";
import PageHeader from '../components/header.vue';
export default {
  
  data() {
    return {
      users: []
    };
  },
  props: {
    usersObject: {
      type: Object,
      required: true
    }
  },
  components: {
    FollowsCard,
    PageHeader
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
          this.users = response.data;
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