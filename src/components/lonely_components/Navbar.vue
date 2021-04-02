<template>
  <nav>
    <v-toolbar flat color="#4f3a65">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <v-toolbar-side-icon><v-img class="mr-3" src='../../../public/logo2.2.png' height="60px" width="120px"></v-img></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn dark flat color="#562349">
        <router-link class="white--text" to="/login" style="text-decoration:none">Logout
        <v-icon  right>mdi-logout-variant</v-icon>
        </router-link>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app color="#574f7d">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="#95adbe">
          <v-list-item
            class="link"
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon class="white--text" v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-text="link.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      selectedItem: 0,
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-account", text: "My profile", route: "/profile" },
        { icon: "mdi-chart-bar", text: "My statistics", route: "/statistics" },
        { icon: "mdi-book-open-page-variant-outline ", text: "Reflective Diary", route: "/diary" },
        { icon: "mdi-star", text: "Goals", route: "/goals" },
        {icon:"mdi-head-check-outline ", text:"Daily Check-In", route:"/checkin"}
      ],
    };
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
</style>

