<template>
  <div class="register">
    <!-- <h2>New to Autuas? Create a free account</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          type="text"
          v-model="user.name"
          v-validate="'required'"
          name="name"
          class="form-control"
          placeholder="Name..."
          :class="{ 'is-invalid': submitted && errors.has('name') }"
        />
        <div v-if="submitted && errors.has('name')" class="invalid-feedback">
          {{ errors.first("name") }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.username"
          v-validate="'required'"
          name="username"
          class="form-control"
          placeholder="Username..."
          :class="{ 'is-invalid': submitted && errors.has('username') }"
        />
        <div
          v-if="submitted && errors.has('username')"
          class="invalid-feedback"
        >
          {{ errors.first("username") }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.email"
          v-validate="'required'"
          name="email"
          class="form-control"
          placeholder="Email..."
          :class="{ 'is-invalid': submitted && errors.has('email') }"
        />
        <div v-if="submitted && errors.has('email')" class="invalid-feedback">
          {{ errors.first("email") }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          placeholder="Password..."
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">
          Register
        </button>
        <img
          v-show="status.registering"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form> -->

    <v-container fill-height class="pa-5" fluid>
      <v-layout row wrap align-center class="pa-16">
        <v-flex sm12 md6 offset-md3>
          <v-card shaped class="registerCard">
            <v-toolbar flat dark color="#562349">
              <v-toolbar-title class="title">Create an account</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-container class="text-center">
                <form @submit.prevent="handleSubmit">
                  <v-text-field
                    id="name"
                    prepend-icon="mdi-emoticon"
                    name="name"
                    v-model="user.name"
                    label="Name"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    id="username"
                    prepend-icon="mdi-account"
                    name="username"
                    v-model="user.username"
                    label="Username"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    id="email"
                    prepend-icon="mdi-email"
                    name="email"
                    v-model="user.email"
                    label="Email"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    id="password"
                    prepend-icon="mdi-key"
                    type="password"
                    name="password"
                    v-model="user.password"
                    label="Password"
                    required
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-btn
                    id="submit-button"
                    type="submit"
                    dark
                    depressed
                    medium
                    rounded
                    color="#562349"
                  >
                    <v-icon left small>mdi-lock</v-icon>
                    Sign up
                  </v-btn>
                  <img
                    v-show="status.registering"
                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  />
                </form>
                <br />
                <router-link to="/login" id="cancelLink" class="btn btn-link"
                  >Cancel</router-link
                >
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { router } from "../../_helpers";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user).then(() => {
            router.push("/login");
          });
        }
      });
    },
  },
};
</script>
<style  scoped>
.register {
  background-image: url("././background.jpg");
  height: 100vh;
}
.v-card {
  opacity: 1;
}
</style>