<template>
  <div>
    <page-header></page-header>
    <follows-card/>
  </div>
</template>

<script>
import PageHeader from "../components/header";
import FollowsCard from '../components/followsCard.vue'
export default {
  components: {
    PageHeader,
    FollowsCard
  }
};
</script>

<style scoped>
</style>