import Vue from "vue";
import Router from "vue-router";

import HomePage from "../components/home/HomePage.vue";
import LogInPage from "../components/login/LogInPage";
import RegisterPage from "../components/register/RegisterPage";
import DailyCheckIn from "../components/dailyCheckin/DailyCheckIn";
import MyProfilePage from "../components/my_profile/MyProfilePage";
import GoalsPage from "../components/goals/GoalsPage";
import MyStatisticsPage from "../components/statistics/MyStatisticsPage";
import ReflectiveDiaryPage from "../components/reflective_diary/ReflectiveDiaryPage";
import WelcomePage from "../components/welcome/WelcomePage";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LogInPage },
    { path: "/register", component: RegisterPage },
    { path: "/checkIn", component: DailyCheckIn },
    { path: "/profile", component: MyProfilePage },
    { path: "/goals", component: GoalsPage },
    { path: "/statistics", component: MyStatisticsPage },
    { path: "/diary", component: ReflectiveDiaryPage },
    { path: "/welcome", component: WelcomePage },

    // otherwise redirect to home
    { path: "*", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register", "/welcome"];
  console.log(to.path)
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
