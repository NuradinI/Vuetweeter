<template>
  <div class="container">
    <page-header></page-header>
    <br>
    <br>
    <page-tweets/>
    <get-tweets />
    <get-comments/>
  </div>
</template>

<script>
import PageTweets from '../components/pageTweets';
import PageHeader from "../components/header";
import GetTweets from "../components/getTweets";
import GetComments from '../components/getComments'
export default {
  components: {
    PageHeader,
    GetTweets,
    PageTweets,
    GetComments
  }
};
</script>

<style scoped>
.maketweet {
  background-color: #31b0d5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}

</style>