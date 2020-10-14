<template>
  <div id="site">
     <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@100&display=swap"
      rel="stylesheet"
    />
    <page-header></page-header>
    <div id="content">
      <edit-profile></edit-profile>
    </div>

    <delete-user />
  </div>
</template>

<script>
import PageHeader from "../components/header";
import editProfile from "../components/editProfile";
import DeleteUser from "../components/deleteUser";

export default {
  components: {
    editProfile,
    DeleteUser,
    PageHeader
  },
  
};
</script>

<style scoped>
#content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6vh;
   
  font-family: "Piazzolla", serif;
}

</style>