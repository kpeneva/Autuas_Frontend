<template>
  <div>
    <Navbar />
    <ChatBot />
    <div id="wrapper">
    <div id="container">

        <section class="open-book">
            <header>
                <h1>Express your emotions</h1>
                <h6>Write your thoughts</h6>
            </header>
            <article>
                <h2 class="chapter-title">Reflective Diary</h2>
             <v-container class="right-content">
        <v-card flat max-width="344" color="#FFF5E9">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ date }}
              </div>
              <v-list-item-title class="headline mb-1">
                Daily Journal
              </v-list-item-title>
              <v-list-item-subtitle
                >Take in a minute to reflect on your day</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-avatar class="ma-3" size="80" tile>
              <v-img src="../../../public/sun.png"></v-img>
            </v-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn id="start-button" outlined rounded text @click.stop="dialog = true">
              Start
            </v-btn>
          </v-card-actions>
          <v-dialog max-width="500" v-model="dialog">
            <v-card class="dailyDialog">
              <v-card-title class="headline grey lighten-2">
                How are you feeling today? What are your plans?
              </v-card-title>

              <v-textarea
              id="diaryLog-textarea"
                v-model="newDiaryLog.description"
                autoGrow
                placeholder="Write down your thoughts and feelings for the day"
              ></v-textarea>
              <v-card-actions>
                <v-btn
                id="saveLog-button"
                  color="primary"
                  @click="dialog = false;
                    newDiaryLog.type = 'DailyDiaryLog';
                    AddNewDiaryLog();"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-container>
       <v-container class="left-content">
        <h2 class="topics">Topics for you</h2>
        <v-container class="topicsforyou">
          <!--Self kindness row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
                      max-height="150"
              max-width="370"
              @click.stop="takecaredialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Take care of yourself
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="80" tile>
                  <v-img src="../../../public/takecare.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Self kindess</h4>
        <v-row class="self-kindness">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
          <!--Self mastery row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
                       max-height="150"
              max-width="370"
              @click.stop="appreciatedialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Appreciate yourself
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="80" tile>
                  <v-img src="../../../public/loveyou.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Self mastery</h4>
          <v-row class="self-mastery">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
          <!--Courage row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
                     max-height="150"
              max-width="370"
              @click.stop="changedialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Embrace Change
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="80" tile>
                  <v-img src="../../../public/change.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>

          <v-hover v-slot="{ hover }">
            <v-card
              flat
              max-height="150"
              max-width="370"
              @click.stop="difficultydialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Embrace Difficulty
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="80" tile>
                  <v-img src="../../../public/difficult.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Courage</h4>
          <v-row class="courage">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
        </v-container>

        <!-- Dialogs -->
        <!--Take Care of yourself dialog-->
        <v-dialog max-width="500" v-model="takecaredialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What do you need in order yo be comfortable and happy?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="What can you do in order to take better care of yourself?"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  takecaredialog = false;
                   newDiaryLog.type = 'Self-kindness';
                  AddNewDiaryLog();snackbar = true;
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--Appreciate yourself dialog-->
        <v-dialog max-width="500" v-model="appreciatedialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is one thing that you like about yourself? List at least one
              and explain why.
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Personal characteristics, abilities, talents, qualities"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  appreciatedialog = false;
                   newDiaryLog.type = 'Self-appreciation';
                  AddNewDiaryLog();snackbar = true;
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Embrace change dialog-->
        <v-dialog max-width="500" v-model="changedialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is changing? How will it be different?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Think about also what is the positive side of this change"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  changedialog = false;
                   newDiaryLog.type = 'Change';
                  AddNewDiaryLog();snackbar = true;
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--Embrace difficulty dialog-->
        <v-dialog max-width="500" v-model="difficultydialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is difficult for you?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Problem, understanding, other people, competence, not enough time, energy..."
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  difficultydialog = false;
                   newDiaryLog.type = 'Courage';
                  AddNewDiaryLog();snackbar = true;
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>
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
import ChatBot from "../lonely_components/ChatBot"
import Navbar from "../lonely_components/Navbar"
import moment, { localeData } from "moment";
import { mapState, mapActions } from 'vuex';
const types = Object.freeze({
  DailyLog:{value:1, name:"Daily Log"},
  TakeCareLog:{value:2, name:"Take care of yourself"},
  AppreciateLog:{value:3, name:"Appreciate yourself"},
  ChangeLog:{value:4, name:"Embrace change"},
  DifficultyLog:{value:5, name:"Embrace difficulty"},
});
export default {
  components: {
    Navbar,
    ChatBot,
  },
  data() {
    return {
      snackbar: false,
      text: `Your information was saved successfully!`,
      types,
      newDiaryLog: {
        type: '',
        description:'',
        dateLog: moment(),
        userId: JSON.parse(localStorage.getItem("user")).userId
      },
      date: moment().format("DD/MM/YYYY"),
      dialog: false,
      takecaredialog: false,
      appreciatedialog: false,
      changedialog: false,
      difficultydialog: false,
    };
  },
  methods: {
    ...mapActions("diaryLogs", [
      "addDiaryLog",
    ]),
    AddNewDiaryLog(name){
      this.addDiaryLog(this.newDiaryLog);
      this.snackbar= true;
      this.newDiaryLog.description = '';
    },
  },
};
</script>

<style scoped>
.left-content {
  margin-top: 5rem;
  float: left;
}
.right-content {
  margin-top: 6rem;
  margin-left: 6rem;
  width: 70%;
}
.topics {
  margin-left: 3rem;
  font: 700 3vw/1.25 'Playfair Display', sans-serif;
}
.topicsforyou {
  margin-top: 3.5rem;
  margin-left: 3rem;
}
@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);

*,
:before,
:after {
    box-sizing: border-box;
}

body {
    background-color: #1d1f20;
    color: #e5e5e5;
    font: 16px/1.25 'Crimson Text', sans-serif;
    margin: 0;
}

#wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 80em;
}

#container {
    float: left;
    padding: 1em;
    width: 100%;
}

/*** OPEN BOOK ***/
.open-book {
    background: #FFF5E9;
    box-shadow: rgba(0,0,0,0.5) 0 1em 3em;
    color: #000;
    padding: 2em;
}

.open-book * {
    position: relative;
}

/* Header/Footer */
.open-book header {
    padding-bottom: 1em;
}

.open-book header *,
.open-book footer * {
    font: 700 1em/1.25 'Playfair Display', sans-serif;
    letter-spacing: 0.125em;
    margin: 0;
}

.open-book header * {
    font-size: 0.75em;
    text-transform: uppercase;
}

.open-book footer {
    padding-top: 1em;
}

.open-book footer #page-numbers {
    display: none;
    list-style: none;
    padding: 0;
    text-align: left;
}

.open-book footer #page-numbers > li:last-child {
    text-align: right;
}

/* Chapter Title */
.open-book .chapter-title {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgICA8Zz4NCiAgICAJPHBhdGggZD0iTTAsMzJMMzIsMGwzMiwzMkwzMiw2NEwwLDMyeiBNOCwzMmwyNCwyNGwyNC0yNEwzMiw4TDgsMzJ6IE0xNiwzMmwxNi0xNmwxNiwxNkwzMiw0OEwxNiwzMnogTTI0LDMybDgsOGw4LThsLTgtOEwyNCwzMnoiIC8+DQogICAgPC9nPg0KPC9zdmc+) bottom center no-repeat;
    background-size: 0.5em 0.5em;
    font: 700 7vw/1.25 'Playfair Display', sans-serif;
    letter-spacing: 0.125em;
    margin: 0 0 1em 0;
    padding: 1em 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
}

.open-book .chapter-title:before,
.open-book .chapter-title:after {
    border: solid 0 #000;
    border-width: 0.05em 0;
    bottom: calc((0.125em / 2) * 3);
    content: '';
    height: 0.15em;
    position: absolute;
    width: calc(50% - (1em / 2));
}

.open-book .chapter-title:before {
    left: 0;
}

.open-book .chapter-title:after {
    right: 0;
}

/* Body Copy */
.open-book article {
    line-height: 1.5;
}



/*** MEDIA QUERIES ***/
@media only screen and ( min-width: 50em ) {

    .open-book {
        margin: 1em;
        position: relative;
    }

    .open-book:before {
        background-color: #8B4513;
        border-radius: 0.25em;
        bottom: -1em;
        content: '';
        left: -1em;
        position: absolute;
        right: -1em;
        top: -1em;
        z-index: -1;
    }

    .open-book:after {
        background: linear-gradient(to right, transparent 0%,rgba(0,0,0,0.2) 46%,rgba(0,0,0,0.5) 49%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.5) 51%,rgba(0,0,0,0.2) 52%,transparent 100%);
        bottom: -1em;
        content: '';
        left: 50%;
        position: absolute;
        top: -1em;
        transform: translate(-50%,0);
        width: 4em;
        z-index: 1;
    }

    .open-book > * {
        column-count: 2;
        column-gap: 6em;
        position: relative;
        z-index: 1;
    }

    /* Header/Footer */
    .open-book header:before,
    .open-book header:after,
    .open-book footer:before,
    .open-book footer:after {
        background: #FFF5E9;
        border-radius: 25%;
        content: '';
        height: 2em;
        position: absolute;
        z-index: -1;
        width: calc(50% + 2em);
    }

    .open-book header:before,
    .open-book footer:before,
    .open-book footer:after {
        border-top-left-radius: 0;
    }

    .open-book header:after,
    .open-book footer:before,
    .open-book footer:after {
        border-top-right-radius: 0;
    }

    .open-book header:before,
    .open-book header:after,
    .open-book footer:after {
        border-bottom-right-radius: 0;
    }

    .open-book header:before,
    .open-book header:after,
    .open-book footer:before {
        border-bottom-left-radius: 0;
    }

    .open-book header:before,
    .open-book header:after {
        top: -2.65em;
    }

    .open-book header:before,
    .open-book footer:before {
        right: 50%;
    }

    .open-book header:before {
        transform: rotate(-2deg);
    }

    .open-book header:after,
    .open-book footer:after {
        left: 50%;
    }

    .open-book header:after {
        transform: rotate(2deg);
    }

    .open-book footer:before,
    .open-book footer:after {
        bottom: -2.65em;
    }

    .open-book footer:before {
        transform: rotate(2deg);
    }

    .open-book footer:after {
        transform: rotate(-2deg);
    }

    .open-book header > *:last-child,
    .open-book footer > *:last-child {
        text-align: right;
    }

    .open-book footer #page-numbers {
        display: block;
    }

    /* Chapter Title */
    .open-book .chapter-title {
        font-size: 3em;
    }

    .open-book .chapter-title:before,
    .open-book .chapter-title:after {
        height: 0.125em;
    }

    /* Body Copy */
    .open-book article p {
        text-indent: 3em;
    }

    .open-book article > ul,
    .open-book article > ol {
        padding-left: 4em;
    }

}
</style>