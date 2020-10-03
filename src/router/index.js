import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from '../views/SignUp.vue';
import EditProfile from '../views/editProfile.vue';
import TweetsPage from '../views/tweets.vue';
import LoginPage from '../views/login.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'signup-page',
    component: SignUpPage
  },
  {
    path: '/editprofile',
    name: 'edit-profile',
    component: EditProfile
  },
  {
    path: '/tweets',
    name: 'tweets-page',
    component: TweetsPage
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
