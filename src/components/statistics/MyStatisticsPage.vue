<template>
  <div>
    <Navbar />
    <ChatBot />
    <v-container class="statistics-content">
      <v-row>
        <v-col>
          <pie v-if="loaded" :chartData="pieData" class="pie"></pie>
        </v-col>
        <v-col>
          <pie v-if="loaded2" :chartData="feelingsPieData" class="pie"></pie>
        </v-col>
      </v-row>
    </v-container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#583d72"
        fill-opacity="1"
        d="M0,64L40,106.7C80,149,160,235,240,245.3C320,256,400,192,480,176C560,160,640,192,720,224C800,256,880,288,960,282.7C1040,277,1120,235,1200,181.3C1280,128,1360,64,1400,32L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <v-container fluid class="reflective_diary">
      <v-row>
        <v-col>
          <v-container id="diaryLogs" style="display: none">
            <div class="diaryLogs">
              <v-card
                flat
                max-width="344"
                v-for="diaryLog in allDiaryLogs"
                :key="diaryLog.id"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-4">
                      {{ diaryLog.type }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="description">
                      {{ diaryLog.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
          </v-container>
          <v-btn id="buttonLog" @click="ShowDiaryLogs()" block>
            View Diary Logs
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Pie from "../lonely_components/Pie";
import Navbar from "../lonely_components/Navbar";
import ChatBot from "../lonely_components/ChatBot";
export default {
  components: {
    Navbar,
    Pie,
    ChatBot,
  },
  data: () => ({
    loaded: false,
    pieData: null,
    loaded2: false,
    feelingsPieData: null,
  }),
  methods: {
    ...mapActions("statistics", [
      "getAllGoalsCount",
      "getCompletedGoalsCount",
      "getIncompletedGoalsCount",
      "getPositiveFeelingsCount",
      "getNegativeFeelingsCount",
    ]),
    ...mapActions("diaryLogs", ["getDiaryLogsByUserId"]),
    fillPieData() {
      this.pieData = {
        labels: ["CompletedGoals", "Incompleted Goals"],
        datasets: [
          {
            label: "Data",
            data: [
              this.completedGoalsCount,
              this.incompletedGoalsCount,
            ],
            backgroundColor: ["#726a95", "#719fb0"],
          },
        ],
      };
    },
    fillFeelingsPieData() {
      this.feelingsPieData = {
        labels: ["Negative Feelings", "Positive Feelings"],
        datasets: [
          {
            label: "Feelings Data",
            data: [this.negativeFeelingsCount, this.positiveFeelingsCount],
            backgroundColor: ["#9f5f80", "#bedbbb", "#ffdada"],
          },
        ],
      };
    },
    ShowDiaryLogs() {
      var x = document.getElementById("diaryLogs");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.querySelector("#buttonLog").innerHTML = "Hide Diary Logs";
      } else {
        x.style.display = "none";
        document.querySelector("#buttonLog").innerHTML = "View Diary Logs";
      }
    },
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
    }),
    ...mapGetters("statistics", [
      "allGoalsCount",
      "completedGoalsCount",
      "incompletedGoalsCount",
      "negativeFeelingsCount",
      "positiveFeelingsCount",
    ]),
    ...mapGetters("diaryLogs", ["allDiaryLogs"]),
  },
  created() {
    // just to make sure that after each update it will show the pie
    // this.fillPieData();
    // this.loaded = true;
    // this.fillFeelingsPieData();
    // this.loaded2 = true;
    //diary logs
    this.getDiaryLogsByUserId(this.account.user.userId);
  },
 mounted() {
    this.loaded = false;
    this.loaded2 = false;
    Promise.all([
      this.getAllGoalsCount(this.account.user.userId),
      this.getCompletedGoalsCount(this.account.user.userId),
      this.getIncompletedGoalsCount(this.account.user.userId),
      this.getPositiveFeelingsCount(this.account.user.userId),
      this.getNegativeFeelingsCount(this.account.user.userId),
    ]).then(() => {
      this.fillPieData();
      this.loaded = true;
      this.fillFeelingsPieData();

      this.loaded2 = true;
    });
  },
};
</script>

<style scoped>
.pie {
  width: 300px;
}
.statistics-content {
  margin-top: 5rem;
  margin-left: 13rem;
}
.reflective_diary {
  margin-top: -0.5rem;
  background-color: #583d72;
  height: 100%;
}
.diaryLogs {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 3rem;
}
#buttonLog {
  margin-top: 5rem;
  text-align: center;
}
</style>