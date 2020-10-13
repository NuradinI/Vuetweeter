<template>
  <div id="site">
    <div id="form">
      <h1>Tweeter</h1>
      <p>Email</p>
      <input type="text" id="email-input" v-model="email" />
      <p>Password</p>
      <input  type="password" id="password-input" v-model="password" />
      <br />
      <button class="button" @click="loginUser">Log In</button>
      <p>OR</p>
      <p>
        Don't have an account?
        <router-link to="/signup">SignUp</router-link>
      </p>
      <h3>{{ loginStatus }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading...";
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          this.$router.push('/feedvue');
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Check Email and Password input";
        });
    }
  }
};
</script>

<style scoped>
*{
  margin: 0
}
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
p {
  margin-top: 1.2vh;
  color: #8e8e8e;
}
h1 {
  font-family: "Lobster Two", cursive;
  font-size: 2.5em;
}
#email-input {
  padding: 9px 0 3px 40px;
  
}
#password-input {
  padding: 9px 0 3px 40px;
  
}
:-ms-input-placeholder {  
   text-align: center; 
   position: absolute;
  
}

</style>