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
      birthdate: ""
    };
  },
  methods: {
    signUpUser: function() {
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
            birthdate: this.birthdate
          }
        })
        .then(response => {
          console.log("Success!");
          console.log(response);
          cookies.set("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          console.log("something failed");
        });
    }
  }
};
</script>

<style scoped>
#form {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40vh;
  text-align: center;
}
#site {
  display: grid;
  padding-left: 5vw;
  padding-right: 5vw;
}
.button {
  background-color: #0095f6;
  border-radius: 5px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  font-weight: 520;
  padding: 5px 85px;
  text-decoration: none;
  margin-left: 3vw;
  margin-right: 3vw;
}
.button:hover {
  background-color: #0061a7;
}
.button:active {
  position: relative;
  top: 1px;
}

#signup {
  color: #0095f6;
  text-decoration: none;
}
h4 {
  margin-top: 1.2vh;
  color: #8e8e8e;
}
h1 {
  font-family: "Lobster Two", cursive;
  font-size: 2.5em;
}
h5 {
  color: #8e8e8e;
}
</style>