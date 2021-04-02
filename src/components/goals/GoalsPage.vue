<template>
  <div class="hello">
    <Navbar />
    <ChatBot />
    <v-container fill-height fluid>
      <v-layout row wrap align-center>
        <v-flex sm12 md8 offset-md2>
          <v-card>
            <v-card-text>
              <h2 class="black--text" style="text-align:center;padding:2rem;">{{account.user.name}}'s Goals</h2>
              <v-container class="text-center">
                <form class="goalsForm" @submit.prevent="onSubmit" ref="form">
                  <v-row>
                    <v-col 
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                    id="newGoal-title"
                    outlined
                    type="text"
                    v-model="newgoal.title"
                    placeholder="Add Goal..."
                    clearable
                    color="purple darken-2"
                  >
                  </v-text-field>
                    </v-col>
                    <v-col 
                    cols="12"
                    sm="6"
                    >
                     <v-select :items="items" id="select" outlined v-model="newgoal.goalType" placeholder="Select Goal Type" color="purple darken-2">
                  </v-select>
                    </v-col>
                   <v-col cols="12">
                  <v-textarea
                  id="description"
                  color="purple darken-2"
                  no-resize
                  rows="3"
                    outlined
                    type="text"
                    v-model="newgoal.description"
                    placeholder="Add more detail"
                    clearable
                  >
                  </v-textarea>
                   </v-col>
                  <v-btn id="addGoalButton" type="submit" dark depressed color="#562349" rounded block >
                    <v-icon left>mdi-plus</v-icon>
                    Add
                  </v-btn>
                  </v-row>
                </form>
                <v-divider></v-divider>
                <div class="goals">
                  <v-card v-for="goal in allGoals" :key="goal.id">
                    <v-toolbar class="goal" flat dark color="#562349">
                      <v-row justify="space-around" display="flex" align="center">
                      <v-toolbar-title>
                        <v-icon                     
                          @click.prevent="removeGoal({ id: goal.id, userId: goal.userId})"
                          >mdi-delete</v-icon
                        >
                        <v-icon @click="changeCompleted(goal)" style="margin-left:15rem;"
                          >mdi-check</v-icon
                        >
                        </v-toolbar-title>
                        </v-row>
                      
                    </v-toolbar>
                    <v-card-text
                      :class="{ iscomplete: goal.completed === true }"
                    >
                      <v-container class="title">
                        {{ goal.title }}
                      </v-container>
                      <v-divider></v-divider>
                      <v-container class="goalType">
                        {{ goal.goalType }}
                      </v-container>
                      <v-divider></v-divider>
                      <v-container class="description">
                        {{ goal.description }}
                      </v-container>
                    </v-card-text>
                  </v-card>
              
                  <!-- <div
        v-for="goal in allGoals"
        :key="goal.id"
        @click="changeCompleted(goal)"
        class="goal"
        :class="{iscomplete:goal.completed}"
      >
        {{ goal.title }}
                  <v-icon @click="removeGoal(goal.id)">mdi-delete</v-icon>
      </div> -->
                </div>
               
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../lonely_components/Navbar";
import ChatBot from "../lonely_components/ChatBot"
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    Navbar,
    ChatBot
  },

  data() {
    return {
      newgoal: {
        title: "",
        description: "",
        goalType:"",
        completed: false,
        userId: JSON.parse(localStorage.getItem("user")).userId,
      },
      items: [
        "Life Goal",
        "Yearly Goal",
        "Montly Goal",
        "Weekly Goal",
        "Daily Goal",
      ],
    };
  },
  methods: {
    ...mapActions("goals", [
      "addGoal",
      "removeGoal",
      "updateGoal",
      "getAllGoals",
      "getGoalsByUserId",
    ]),
    onSubmit() {
      console.log(this.newgoal.title);
      console.log(this.newgoal.description);
      console.log(this.newgoal.goalType);
      console.log(this.newgoal.userId);
      console.log(this.newgoal.completed);
      this.addGoal(this.newgoal);
      this.$refs.form.reset();
    },
    changeCompleted(goal) {
      const updateGoal = {
        //updating only the completed value
        id: goal.id,
        title: goal.title,
        goalType: goal.goalType,
        description: goal.description,
        completed: !goal.completed,
        userId: goal.userId,
      };
      this.updateGoal(updateGoal);
    },
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
    }),
    ...mapGetters("goals", ["allGoals"]),
  },
  created() {
    this.getGoalsByUserId(this.account.user.userId);
  },
};
</script>

<style scoped>
form {
  display: flex;
}
.singleGoal {
  cursor: pointer;
}
.goals {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.goal {
  text-align: center;
  position: relative;
}

.iscomplete {
  text-decoration: line-through !important;
}
</style>