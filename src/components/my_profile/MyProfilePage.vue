<template>
  <div>
    <Navbar />
    <ChatBot />
    <v-container fill-height class="pa-16" fluid>
      <v-layout row wrap align-center class="pa-8">
        <v-flex sm12 md6 offset-md3>
          <v-card shaped class="account-info">
            <v-card-text>
              <v-card-title class="black--text">
                Account Information
              </v-card-title>
              <v-divider></v-divider>
              <v-container class="text-center">
                <form @submit.prevent="handleSubmit">
                  <v-text-field
                    prepend-icon="mdi-emoticon-happy"
                    type="text"
                    name="name"
                    v-model="getUser.name"
                    label="Name"
                    clearable
                    color="#562349"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-account"
                    type="text"
                    name="username"
                    v-model="getUser.username"
                    label="Username"
                    clearable
                    color="#562349"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-email"
                    type="text"
                    name="email"
                    v-model="getUser.email"
                    label="Email"
                    clearable
                    color="#562349"
                  ></v-text-field>
                  <h6
                    id="passwordChange"
                    @click="changePass"
                    class="black--text"
                  >
                    Change password
                    <v-icon @click="changePass" color="#562349"
                      >mdi-lead-pencil</v-icon
                    >
                  </h6>
                  <span id="span" hidden="true">
                    <v-text-field
                      prepend-icon="mdi-key"
                      type="password"
                      name="current_password"
                      label="Current password"
                      v-model="getUser.old_password"
                      clearable
                      color="#562349"
                      autocomplete="new-password"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="mdi-key"
                      type="password"
                      name="new_password"
                      label="New password"
                      v-model="getUser.new_password"
                      clearable
                      color="#562349"
                    ></v-text-field>
                  </span>

                  <!-- <v-text-field
                    prepend-icon="mdi-key"
                    type="password"
                    name="new_password"
                    v-model="new_password"
                    label="New password"
                    clearable
                    color="pink"
                  ></v-text-field> -->
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="update(getUser);snackbar = true"
                    dark
                    depressed
                    large
                    block
                    rounded
                    color="#562349"
                  >
                    <v-icon left small>mdi-account-edit</v-icon>
                    Edit
                  </v-btn>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
   <v-snackbar
      v-model="snackbar"
    >
    {{text}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Navbar from "../lonely_components/Navbar";
import ChatBot from "../lonely_components/ChatBot";
import router from "../../_helpers/router";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    Navbar,
    ChatBot,
  },
  data() {
    return {
      snackbar: false,
      text: `Your information was saved successfully!`,
    };
  },
  methods: {
    ...mapActions("users", ["getUserById", "updateUser"]),
    update(user) {
      const updatedUser = {
        userId: JSON.parse(localStorage.getItem("user")).userId,
        name: user.name,
        username: user.username,
        email: user.email,
        oldPassword: user.old_password,
        newPassword:user.new_password
      };
      console.log(updatedUser);
       console.log(updatedUser.oldPassword);
       console.log(updatedUser.newPassword);
      this.updateUser(updatedUser);
    },
    changePass() {
      var textFields = document.getElementById("span");
      var h6 = document.getElementById("passwordChange");
      textFields.hidden = false;
      h6.innerHTML = "Input your new password";
    },
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
    }),
    ...mapGetters("users", ["getUser"]),
  },
  created() {
    console.log(this.account.user.userId);
    this.getUserById(this.account.user.userId);
  },
};
</script>

<style scoped>
#passwordChange:hover {
  cursor: pointer;
}
</style>