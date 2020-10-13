<template>
  <div>
    <page-header></page-header>
<edit-profile></edit-profile>
<delete-user/>

  </div>
</template>

<script>
import PageHeader from '../components/header'
import editProfile from '../components/editProfile';
import DeleteUser from '../components/deleteUser'

  export default {
    components: {
      editProfile,
      DeleteUser,
      PageHeader
      
    }
  }
</script>

<style scoped>

</style>