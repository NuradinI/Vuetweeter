<template>
  <div>
    <button @click="deleteUser">Delete User</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
    name: 'delete-user',
  methods: {
    deleteUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "delete"
        })
        .then(response => {
          console.log("deleted");
          cookies.set("session", response.loginToken);
        })
        .catch(error => {
          console.log("Failed");
        });
    }
  }
};
</script>

<style scoped>
</style>