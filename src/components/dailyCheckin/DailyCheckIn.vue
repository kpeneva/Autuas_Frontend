<template>
  <v-stepper class="stepper" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="#562349">
        I am physically...
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2" color="#562349">
        I am mentally...
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" 
      color="#562349">
        I am emotionally...
      </v-stepper-step>
    </v-stepper-header>

    <v-container fluid class="container">
      <v-stepper-items>
        <v-stepper-content class="content" step="1">
          <v-container class="main-content">
            <h4>Physically I am...</h4>
            <v-simple-table class="contentTable">
              <tbody>
                <tr
                  v-for="item in PhysicalStates"
                  :key="item.value"
                  @click="SavePhysicalState(item.value)"
                  :class="{ highlight: dailyCheckIn.physicalState === item.value }"
                >
                  <td style="text-align: center">{{ item.name }}</td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-btn dark color="#562349" @click="e1 = 2"> Continue </v-btn>
            <v-btn id="cancelLink" text href="./"> Cancel </v-btn>
          </v-container>
          <v-container class="icon-container">
            <v-img
              v-bind:src="source"
              alt="Happy Unicorn"
              max-height="150"
              max-width="150"
            ></v-img>
          </v-container>
        </v-stepper-content>

        <v-stepper-content class="content" step="2">
          <v-container class="main-content">
            <h4>Mentally I am...</h4>
            <v-simple-table class="contentTable">
              <tbody>
                <tr
                  v-for="item in MentalStates"
                  :key="item.value"
                  @click="SaveMentalState(item.value)"
                  :class="{ highlight: dailyCheckIn.mentalState === item.value }"
                >
                  <td style="text-align: center">{{ item.name }}</td>
                </tr>
              </tbody>
            </v-simple-table>

            <v-btn dark color="#562349" @click="e1 = 3"> Continue </v-btn>

            <v-btn text href="./"> Cancel </v-btn>
          </v-container>
          <v-container class="icon-container">
            <v-img
              v-bind:src="source2"
              alt="Happy Unicorn"
              max-height="150"
              max-width="150"
            ></v-img>
          </v-container>
        </v-stepper-content>

        <v-stepper-content class="EmotionalContent" step="3">
          <h4>Emotionally I am...</h4>
          <v-container class="positive-content">
            <v-simple-table class="PositiveTable">
              <tbody>
              <img
              src="../../../public/happy-monkey.png"
              alt="Happy Monkey"            
            ><img>
                <tr
                  v-for="item in PositiveFeelings"
                  :key="item.value"
                  @click="SavePositiveFeeling(item.value)"
                  :class="{ highlight: dailyCheckIn.positiveFeelings === item.value }"
                >
                  <td style="text-align: center">{{ item.name }}</td>
                </tr>
              </tbody>
               
            </v-simple-table>
          </v-container>
          <v-container class="negative-content">
            <v-simple-table class="NegativeTable">
              <tbody>
              <img
              src="../../../public/sad-monkey.png"
              alt="Sad Monkey"
            ><img>
                <tr
                  v-for="item in NegativeFeelings"
                  :key="item.value"
                  @click="SaveNegativeFeeling(item.value)"
                  :class="{ highlight: dailyCheckIn.negativeFeelings === item.value }"
                >
                  <td style="text-align: center">{{ item.name }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          <v-container class="emotionButtons">
            <v-btn dark color="#562349" @click="SaveDailyCheckIn()"> Continue </v-btn>
            <v-btn text href="./"> Cancel </v-btn>    
             </v-container>
             </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-container>
  </v-stepper>
</template>


<script>
import {checkInServices} from '../../api_services/checkIn.service.axios'
import moment from 'moment'
import { router } from '../../_helpers';
const PhysicalStates = Object.freeze({
  GREAT: { value: 1, name: "Great" },
  GOOD: { value: 2, name: "Good" },
  OKAY: { value: 3, name: "Okay" },
  MEH: { value: 4, name: "Meh" },
  BAD: { value: 5, name: "Bad" },
  AWFUL: { value: 6, name: "Awful" },
});
const MentalStates = Object.freeze({
  GREAT: { value: 1, name: "Great" },
  GOOD: { value: 2, name: "Good" },
  OKAY: { value: 3, name: "Okay" },
  MEH: { value: 4, name: "Meh" },
  BAD: { value: 5, name: "Bad" },
  AWFUL: { value: 6, name: "Awful" },
});
const PositiveFeelings = Object.freeze({
  HOPEFUL: { value: 1, name: "Hopeful" },
  EXCITED: { value: 2, name: "Excited" },
  HAPPY: { value: 4, name: "Happy" },
  ENTHUSIASTIC: { value: 5, name: "Enthusiastic" },
  CALM: { value: 6, name: "Calm" },
  MOTIVATED: { value: 8, name: "Motivated" },
});
const NegativeFeelings = Object.freeze({
  WORRIED: { value: 2, name: "Worried" },
  HELPLESS: { value: 4, name: "Helpless" },
  INSECURE: { value: 5, name: "Insecure" },
  DISCOURAGED: { value: 6, name: "Discouraged" },
  LONELY: { value: 7, name: "Lonely" },
  UNHAPPY: { value: 8, name: "Unhappy" },
});
export default {
  data() {
    return {
      dailyCheckIn: {
        //for the local it should be moment().format();
        date: moment(),
        physicalState: '',
        mentalState: '',
        positiveFeelings: '',
        negativeFeelings: '',
        userId: JSON.parse(localStorage.getItem('user')).userId
      },
      source: "unicorn.png",
      source2: "cat.png",
      e1: 1,
      PhysicalStates,
      MentalStates,
      PositiveFeelings,
      NegativeFeelings,
    };
  },
 
  methods: {
    SwitchImage(item) {
      switch (item) {
        case 1:
          this.source = "very-unicorn.png";
          this.source2 = "great-cat.png";
          break;
        case 2:
          this.source = "good-unicorn.png";
          this.source2 = "good-cat.png";
          break;
        case 3:
          this.source = "okay-unicorn.png";
          this.source2 = "okay-cat.png";
          break;
        case 4:
          this.source = "meh-unicorn.png";
          this.source2 = "meh-cat.png";
          break;
        case 5:
          this.source = "poor-unicorn.png";
          this.source2 = "poor-cat.png";
          break;
        case 6:
          this.source = "awful-unicorn.png";
          this.source2 = "awful-cat.png";
          break;
        default:
          this.source = "unicorn.png";
          this.source2 = "cat.png";
      }
    },
    SavePhysicalState(item) {
      this.dailyCheckIn.physicalState = item;
      console.log(this.dailyCheckIn.physicalState);
      this.SwitchImage(item);
    },
    SaveMentalState(item) {
      this.dailyCheckIn.mentalState = item;
      console.log(this.dailyCheckIn.mentalState);
      this.SwitchImage(item);
    },
    SavePositiveFeeling(item) {
      this.dailyCheckIn.positiveFeelings = item;
      console.log(this.dailyCheckIn.positiveFeelings);
    },
    SaveNegativeFeeling(item) {
      this.dailyCheckIn.negativeFeelings = item;
      console.log(this.dailyCheckIn.negativeFeelings);
    },
    SaveDailyCheckIn(){
     checkInServices.saveDailyCheckIn(this.dailyCheckIn);
      console.log(this.dailyCheckIn.userId);
      console.log(this.dailyCheckIn.date)
      router.push('/')
    }
  }

  };
</script>

<style scoped>
.container {
  background-color: #ad6989;
}
.contentTable {
  margin-bottom: 10px;
  width: 30vw;
  height: auto;
  
}
.PositiveTable img,
.NegativeTable img{
  display:block;
  max-width: 100px;
  max-height: 100px;
  margin-left:auto;
  margin-right:auto;

}
.positive-content { 
  width: 50%;
  float: left;
  margin-top:1rem ;
}
.negative-content {
  float: right;
  width: 50%;
  margin-top:1rem ;
}

tr {
  height: 10vh;
  
}
h4 {
  color: white;
}
.content {
  overflow: hidden;
}
.EmotionalContent {
  overflow: hidden;
}
.main-content {
  margin-left: 10rem;
  float: left;
  width: 50%;
}
.icon-container {
  margin-top: 6em;
  margin-left: 4em;
}
.highlight {
  background-color: #562349 !important ;
  color:white;
}
tr:hover {
  cursor: pointer;
}
tr:hover td{
  background-color:#562349;
  color:white;
}

</style>