<template>
  <div id="content">
    <page-header></page-header>
      <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <br />
    <p class="delete">Password</p>
    <input class="delete" v-model="password" placeholder="Insert Password" type="password" />
    <br />
    <button class="delete" @click="deleteUser"> Delete Account! </button>
    <h3>{{loginStatus}}</h3>
  </div>
</template>

<script>
import PageHeader from '../components/header'
import axios from "axios";
import cookies from "vue-cookies";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      password: "",
      loginStatus: "",
    };
  },
  methods: {
    goBack: function() {
      this.$router.push("/updateprofile");
    },
    deleteUser: function() {
      this.loginStatus = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            loginToken: cookies.get("session"),
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.loginStatus = "Account Deleted";
          this.$router.push("/");
          cookies.set("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style scoped>
div {
 position: absolute;
 top: 50px;  
}
.delete {
  margin: 5px 0px;
    font-family: "Piazzolla", serif;

}
</style>