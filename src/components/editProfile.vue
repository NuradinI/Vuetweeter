<template>
  <div id="site">
    <div id="content">
      <h1 id="edit-profile">Edit Profile</h1>
    <p>Email <input type="email" ></p>
    
    <p>Username <input type="text" ></p>
    
    <p>Password <input type="password" ></p>
    
    <p>Bio <textarea id="bio-input" v-model="bio"></textarea></p>

    <p>Birthdate <input type="text" ></p>
    
    <br />
     <button  @click="editProfile">Edit</button>
    <p>{{ bioStatus }}</p>
    </div>
   
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "editProfile",

  data() {
    return {
      bio: "",
      bioStatus: "",
      email: '',
      username: '',
      password: '',
      birthdate: ''
    };
  },
  methods: {
    editProfile: function() {
      this.loginStatus = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "cV12Yhk7l53GbDYEz21x8SO6fFPxc8Tlcpy1BWglKmNKB"
          },
          data: {
            bio: this.bio,
            bioStatus: this.bioStatus,
            loginToken: cookies.get("session"),
            email: this.email,
            username: this.username,
            password: this.password,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          this.bioStatus = "Bio Edited!";
          console.log("Changed"), console.log(response);
        })
        .catch(error => {
          this.bioStatus = "Oops! Something went wrong...";
          console.log(error);
          console.log("Something failed");
        });
    }
  }
};
</script>

<style scoped>
#site{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media  only screen and (min-width:700px) {
  #site {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

}
  @media  only screen and (min-width:1150) {
  #site {
    display: grid;
    grid-template-columns:2fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

}


</style>