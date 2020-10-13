<template>
  <div id="site">
    <div id="form">
      <h1>Sign Up</h1>
      <p>Email</p>
      <input type="text" id="email-input" v-model="email" />
      <p>Username</p>
      <input type="text" id="username-input" v-model="username" />
      <p>Password</p>
      <input type="password" id="password-input" v-model="password" />
      <p>Bio</p>
      <textarea id="bio-input" name v-model="bio"></textarea>
      <p>Birthday</p>
      <input type="text" id="birthday-input" v-model="birthdate" />
      <br />
      <button class="button" @click="signUpUser">SignUp</button>
      <br />
      <h3>{{ loginStatus }}</h3>
      <router-link to="/">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "SignUpForm",

  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: "",
      loginStatus: ''
    };
  },
  methods: {
    signUpUser: function() {
      this.loginStatus = 'Loading..'
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
            
          }
        })
        .then(response => {
          this.loginStatus = "Account Created";
          this.$router.push('/feedvue')
          console.log(response);
          cookies.set("session", response.data.loginToken);

        })
        .catch(error => {
          this.loginStatus = "Oops! Something went wrong.."
          console.log(error);
          console.log("something failed");
        });
    }
  }
};
</script>

<style scoped>

</style>