<template>
  <div id="site">
        <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <div id="content">
      <h3> Name: {{usersObject.username}}</h3>
      <p> Bio: {{usersObject.bio}}</p>
      <p> Birthdate: {{usersObject.birthdate}}</p>
    </div>

    <follow-users />
    <unfollow-user />
  </div>
</template>

<script>
import FollowUsers from "../components/follows.vue";
import UnfollowUser from "../components/unFollow.vue";
export default {
  components: {
    FollowUsers,
    UnfollowUser
  },
  props: {
    usersObject: {
      type: Object
    },
    followId: {
      type: Number
    }
  }
};
</script>

<style scoped>
#site {
  background-color: rgb(21, 32, 43);
}
#content {
   color: #f1e9e3;
   font-family: "Piazzolla", serif;
   padding-top: 10vh;
  
}
</style>