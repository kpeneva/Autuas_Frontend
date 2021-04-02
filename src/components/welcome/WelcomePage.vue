<template>
  <div>
      <ChatBot />
      <!-- Welcome Page - First Part with join now -->
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <h1 class="greeting">Welcome to Autuas!</h1>
          <v-container class="buttons">
            <v-btn class="logIn" dark flat color="#562349" rounded outlined>
              <router-link
                class="black--text"
                to="/login"
                style="text-decoration: none"
                >Join us now
                <v-icon right>mdi-login-variant</v-icon>
              </router-link>
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img class="image" v-bind:src="mushroom"></v-img>
        </v-col>
      </v-row>
    </v-container>

        <!-- Wave -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#562349"
        fill-opacity="1"
        d="M0,64L30,96C60,128,120,192,180,229.3C240,267,300,277,360,282.7C420,288,480,288,540,256C600,224,660,160,720,149.3C780,139,840,181,900,218.7C960,256,1020,288,1080,261.3C1140,235,1200,149,1260,106.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
        <!-- About us - a.k.a What is Autuas -->
    <v-container fluid class="aboutus">
      <v-row>
        <v-col>
          <h1 class="white--text">What is Autuas</h1>
        </v-col>
      </v-row>
      <v-row no-gutters>

          <!-- Card for web application -->
        <v-col>
          <v-card class="roundedCard" width="150" height="150" outlined>
             <v-avatar size="75" class="avatar1" ><img v-bind:src="web"><img></v-avatar>
          </v-card>
          <h3 class="white--text">Free Web Based Application</h3>
        </v-col>

        <!-- Card for focuses on mental health bla bla -->
        <v-col >
          <v-card class="roundedCard" width="150" height="150" outlined>
           
             <v-avatar size="75" class="avatar" ><img v-bind:src="mentalH"><img></v-avatar>
           
          </v-card>
          <h3 class="white--text">
            Focuses on Mental Well-Being and Mindfulness
          </h3>
        </v-col>

        <!-- Card for convenient way to process negative emotions -->
        <v-col >
          <v-card class="roundedCard" width="150" height="150" outlined>
              <v-avatar size="80" class="avatar2" ><img v-bind:src="meditation"><img></v-avatar>
          </v-card>
           
          <h3 class="white--text align-end">
            Convenient Way to Process Negative Emotions and Stress
          </h3>
          </v-col>
       
      </v-row>

    </v-container>
    <!-- Stress statistics -->
    <v-container fluid class="statistics">
      <v-row>
        <v-col>
          <h2>Why is Mental Health Important</h2>
          <v-carousel v-model="carrousel" class="carrousel">
            <v-carousel-item
              class="gifs"
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide.src"
            >
              <v-responsive>
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex class="text-carrousel">
                      <span class="subheading">{{ slide.text }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-responsive>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script >
import Footer from '../lonely_components/Footer'
import ChatBot from '../lonely_components/ChatBot'
export default {
  components: {Footer, ChatBot},
  data() {
    return {
      mushroom: "w.png",
      web: "domain-registration.png",
      mentalH: "head.png",
      meditation: "relaxation.png",
      carrousel: 0,
      slides: [
        {
          src: "insomnia.gif",
          title: "Effects of Stress on the Body and Mental Health",
          text: "66% have reported lost of sleep due to stress",
        },
        {
          src: "lonely.gif",
          title: "Effects of Stress on the Body and Mental Health",
          text:
            "37% of adults who report feeling stress claim loneliness is an outcome of stress.",
        },
        {
          src: "beaty.gif",
          title: "Stress By Age and Gender",
          text:
            "36% of women report high levels of stress due to their acceptance of their physical appearance and body image, compared to only 23% of men",
        },
        {
          src: "unproductivity.gif",
          title: "Workplace stress",
          text:
            "One in four employees say they are at risk of burning out in the next 12 months.",
        },
        {
          src: "eating-stress.gif",
          title: "Behavioural effects of stress",
          text:
            "46% reported that they ate too much or ate unhealthily due to stress. 29% reported that they started drinking or increased their drinking, and 16% reported that they started smoking or increased their smoking.",
        },
        {
          src: "mental_stress.gif",
          title: "Causes of stress",
          text:
            "Younger people have higher stress related to the pressure to succeed. 60% of 18-24 year olds and 41% of 25-34 year olds cited this, compared to 17% of 45-54s and 6% of over 55s.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kufam:wght@500&display=swap");
.greeting {
  font-family: "Kufam", cursive;
  font-size: 80px;
  text-align: center;
  margin-top: 3rem;
  margin-left: 13rem;
}
.image {
  width: 340px;
  height: 340px;
  margin-left: 4rem;
}
.buttons {
  font-family: "Kufam", cursive;
  margin-top:1.5rem;
  margin-left: 19rem;
}
.aboutus {
  margin-top: -0.5rem;
  background-color: #562349;
}
.white--text{
  font-family: "Kufam", cursive;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 7rem;
}
.white--text:after{
    content:"";
    display:block;
    width: 6em;
    max-width:70%;
    border-bottom: 0.1em solid white;
    margin: 30px auto 0;
}
.text {
  text-align: center;
  width: 50%;
  margin-top: 40px;
  margin-left: 4rem;
  color: white;
  font-family: "Kufam", cursive;
}
.subheading {
  color: white;
  font-size: 19px;
}
h2{
font-family: "Kufam", cursive;
  margin-top: 4rem;
  margin-bottom: 7rem;
  color:#562349;
  font-size:40px;
  text-align: center;
}
h2:after{
     content:"";
    display:block;
    width: 10em;
    max-width:70%;
    border-bottom: 0.1em solid #562349;
    margin: 30px auto 0;
}

.text-carrousel {
  background-color: #562349;
  width: 100%;
}
.carrousel {
  margin-top: 3rem;
  margin-left: 22rem;
  margin-bottom:10rem;
  width: 50%;
}
.roundedCard {
  border-radius: 60%;
  margin-left:9rem;

}
h3 {
    font-family: "Kufam", cursive;
    font-size: 20px;
    text-align: center;
    margin-top:2rem;
    margin-left:1.5rem;
    margin-bottom:5rem;
}
.avatar{
    margin-top:2rem;
    margin-left: 2rem;
}
.avatar1{
      margin-top:2.4rem;
    margin-left: 2.4rem;
}
.avatar2{
      margin-top:2rem;
    margin-left: 2.3rem;
}
</style>
