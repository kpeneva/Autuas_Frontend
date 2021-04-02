<template>
  <div>
    <Navbar />
    <ChatBot />
    <v-container fluid>
      <v-row class="top">
        <v-col cols="12">
          <h1 class="greeting">Hi {{ account.user.name }}!</h1>
          <!-- <p>You are logged in :)</p>
        <h3>Current users: </h3>
        <ul v-if="users.items">
            <li v-for="user in users.items" :key="user.id">
                {{user.name + ', ' + user.email}}
            </li>
        </ul> -->
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="selectedActivity"
            :items="items"
            label="Filter Activities"
            return-object
            outlined
            @change="filterActivities(selectedActivity)"
            color="#562349"
            class="select"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-simple-table>       
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Duration
                </th>
                <th class="text-left">
                    Click to play
                </th>
            </tr>
        </thead>
        <tbody class="hello">
            <tr
                v-for="item in breathingAudios"
                :key="item.name"
            >
            <td>{{item.name}}</td>
            <td>{{item.duration}}</td>
            <td>
                <v-icon @click="Play()">mdi-play</v-icon>
            </td>
            </tr>
        </tbody>
         <tbody>
            <tr
                v-for="item in balanceAudios"
                :key="item.name"
            >
            <td>{{item.name}}</td>
            <td>{{item.duration}}</td>
            <td>
                <v-icon @click="Play()">mdi-play</v-icon>
            </td>
            </tr>
        </tbody>
        </v-simple-table> -->
    <v-container>
      <v-row dense>
        <v-col
          v-for="audio in balanceAudios"
          :key="audio.name"
          cols="12"
        >
          <v-card :color="audio.color" dark v-if="selectedActivity === 'Body Scan' || selectedActivity==='All Activities'">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="audio.name">
                </v-card-title>
                <v-card-subtitle v-text="audio.duration"></v-card-subtitle>
                <v-card-actions>
                  <v-icon
                    @click.prevent="
                      audio.isPlaying ? pause(audio) : play(audio)
                    "
                    >{{ audio.isPlaying ? "mdi-pause" : "mdi-play" }}</v-icon
                  >
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
         
        <v-col
          v-for="audio in breathingAudios"
          :key="audio.name"
          cols="12"
          
        >
          <v-card :color="audio.color" dark v-if="selectedActivity === 'Breathing'|| selectedActivity==='All Activities'">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="audio.name">
                </v-card-title>
                <v-card-subtitle v-text="audio.duration"></v-card-subtitle>
                <v-card-actions>
                  <v-icon
                    @click.prevent="
                      audio.isPlaying ? pause(audio) : play(audio)
                    "
                    >{{ audio.isPlaying ? "mdi-pause" : "mdi-play" }}</v-icon
                  >
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      
        <v-col
          v-for="audio in meditationAudios"
          :key="audio.name"
          cols="12"
        >
          <v-card :color="audio.color" dark v-if="selectedActivity === 'Meditation'|| selectedActivity==='All Activities'">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="audio.name">
                </v-card-title>
                <v-card-subtitle v-text="audio.duration"></v-card-subtitle>
                <v-card-actions>
                  <v-icon
                    @click.prevent="
                      audio.isPlaying ? pause(audio) : play(audio)
                    "
                    >{{ audio.isPlaying ? "mdi-pause" : "mdi-play" }}</v-icon
                  >
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../lonely_components/Navbar";
import ChatBot from "../lonely_components/ChatBot";
export default {
  components: {
    Navbar,
    ChatBot,
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
    }),
    play(audio) {
      audio.isPlaying = true;
      audio.sound.play();
    },
    pause(audio) {
      audio.isPlaying = false;
      audio.sound.pause();
    },
  },
  data() {
    return {
      selectedActivity: 'All Activities',
      items: [
        "All Activities",
        "Breathing",
        "Body Scan",
        "Meditation",
      ],
      breathingAudios: [
        {
          name: "5 minute breathing",
          duration: 5.31,
          guidance: "Mindful Awareness Research Center, UCLA",
          color: "#9f5f80",
          sound: new Audio(require("../../../public/MARC5MinuteBreathing.mp3")),
          isPlaying: false,
        },
        {
          name: "3 minute breathing",
          duration: 3.35,
          guidance: "Peter Morgan, Free Mindfulness",
          color: "#583d72",
          sound: new Audio(
            require("../../../public/FreeMindfulness3MinuteBreathing.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "Six minute breath awareness",
          duration: 6.32,
          guidance: "Melbourne Mindfulness Center & Still Mind",
          color: "#ffba93",
          sound: new Audio(
            require("../../../public/StillMind6MinuteBreathAwareness.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "Ten minute mindfulness of breathing",
          duration: 10.01,
          guidance: "Padraig O'Morain",
          color: "#d1c145",
          sound: new Audio(
            require("../../../public/PadraigTenMinuteMindfulnessOfBreathing.mp3")
          ),
          isPlaying: false,
        },
      ],
      balanceAudios: [
        {
          name: "Four minute body scan",
          duration: 4.01,
          guidance: "Melbourne Mindfulness Center & Still Mind",
          color: "#bedbbb",
          sound: new Audio(
            require("../../../public/StillMind4MinuteBodyScan.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "Body scan",
          duration: 14.36,
          guidance: "Vidyamala Burch, Breathworks",
          color: "#8db596",
          sound: new Audio(require("../../../public/BreathworksBodyScan.mp3")),
          isPlaying: false,
        },
      ],
      meditationAudios: [
        {
          name: "Compassionate Breath",
          duration: 11.33,
          guidance: "Vidyamala Burch, Breathworks",
          color: "#95adbe",
          sound: new Audio(
            require("../../../public/VidyamalaCompassionateBreath.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "Breath, Sound and Body",
          duration: 12.0,
          guidance: "Mindful Awareness Research Center, UCLA",
          color: "#be3144",
          sound: new Audio(
            require("../../../public/MARCBreathSoundBodyMeditation.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "Breath, Sound, Body, Thoughts, Emotions",
          duration: 19.0,
          guidance: "Mindful Awareness Research Center, UCLA",
          color: "#ad6989",
          sound: new Audio(
            require("../../../public/MARCCompleteMeditation.mp3")
          ),
          isPlaying: false,
        },
        {
          name: "The Tension Release Meditation",
          duration: 5.45,
          guidance: "UCSD Center for mindfulness",
          color: "#562349",
          sound: new Audio(
            require("../../../public/VidyamalaTensionRelease.mp3")
          ),
          isPlaying: false,
        },
      ],
    };
  },
};
</script>
<style  scoped>
.top{
  margin-left:4rem;
  margin-top:1rem;
}
</style>
