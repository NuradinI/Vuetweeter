<template>
  <div>
    <h1>Edit User</h1>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthday</p>
    <input type="text" id="birthdate-input" v-model="birthdate" />
    <br />
    <button @click="editProfile">Done</button>
    <h1>Your Tweets</h1>
    <delete-user></delete-user>
  </div>
</template>

<script>
import DeleteUser from '../components/DeleteUser'
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "editProfile",
  components: {
    DeleteUser
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },
  methods: {
    editProfile: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          console.log("Changed"), console.log(response);
          cookies.set("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          console.log("Something failed");
        });
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>