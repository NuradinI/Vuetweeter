import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from '../views/SignUp.vue';
import UpdateProfile from '../views/UpdateProfile.vue';
import TweetsPage from '../views/tweets.vue';
import LoginPage from '../views/login.vue';
import DeleteUser from '../views/deleteUser.vue';
import FeedPage from '../views/feed.vue';
import HomePage from '../views/homePage.vue'
import ExplorerPage from '../views/explorer.vue'
import FollowsPage from '../views/follows.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'signup-page',
    component: SignUpPage
  },
  {
    path: '/follows',
    name: 'follows-page',
    component: FollowsPage
  },
  {
    path: '/explorer',
    name: 'explorer-page',
    component: ExplorerPage
  },
  {
    path: '/updateprofile',
    name: 'update-profile',
    component: UpdateProfile
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
  },
  {
    path: '/deleteUser',
    name: 'deleteUser',
    component: DeleteUser
  },
  {
    path: '/feedvue',
    name: 'feedpage',
    component: FeedPage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
