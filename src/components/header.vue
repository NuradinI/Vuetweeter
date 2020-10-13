<template>
  <div>
    <ul>
      <li>
        <router-link to="/feedvue">Feed</router-link>
      </li>
      <li>
        <router-link to="/explorer">Explore</router-link>
      </li>
      <li>
        <router-link to="/follows">Follows</router-link>
      </li>
      <li>
        <router-link to="updateprofile">UserProfile</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0095f6;
  position: fixed;
  top: 0;
  width: 100%;
  right: 0.4px;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #124d77;
}

.active {
  background-color: #4CAF50;
}
</style>