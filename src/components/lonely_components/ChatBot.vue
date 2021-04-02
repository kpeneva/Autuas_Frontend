<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-img
            :src="chatbot"
            v-bind="attrs"
            v-on="on"
            alt="ChatBot"
            max-width="100"
            max-height="100"
            id="chatBotHead"
          ></v-img>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">ChatBot</span>
          </v-card-title>
          <v-card-text>
            <div id="container" class="container">
              <div id="chat" class="chat">
                <div id="messages" class="messages"></div>
                <input
                  id="input"
                  type="text"
                  placeholder="Say something..."
                  autocomplete="off"
                  autofocus="true"
                  @keydown.enter="addEvent()"
                />
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      chatbot: "chatbot.png",
      miniBot: "bot-mini.png",
      dialog: false,
      synth: window.speechSynthesis,

      textToSpeech: (string) => {
        let voice = new SpeechSynthesisUtterance(string);
        voice.text = string;
        voice.lang = "en-US";
        voice.volume = 1;
        voice.rate = 1;
        voice.pitch = 1; // Can be 0, 1, or 2
        this.synth.speak(voice);
      },
      prompts: [
        [
          "hi",
          "hey",
          "hello",
          "hola",
          "good morning",
          "good afternoon",
          "good evening",
          "howdy",
        ],
        ["how are you", "how are you doing", "how is life", "what's up"],
        ["what are you doing", "what is going on"],
        ["how old are you"],
        ["who are you", "are you human", "are you a bot", "are you real"],
        ["who created you", "who made you"],
        ["what is your name", "your name is", "how are you called"],
        [
          "i am feeling bad today",
          "i am sad",
          "i am depressed",
          "i am not feeling okay",
          "i am not feeling good today",
          "i feel bad",
          "i am not okay",
          "i am in a bad mood",
        ],
        [
          "i am happy today",
          "i am in a good mood",
          "i feel good",
          "i am good",
          "i'm good",
          "i am happy",
          "i am excited",
          "i am positive",
        ],
        [
          "what should i do",
          "i don't know what to do with my life",
          "i am confused",
        ],
      ],
      //possible responses from the bot
      replies: [
        ["Hello!", "Hi", "Howdy", "Hi there, my friend"],
        [
          " I am good, How are you?",
          "Pretty okay, What about you?",
          "Going pretty fast, haha",
          "Nothing much, you?",
        ],
        ["Just vibing", "Nothing much to be honest"],
        ["I was created on 12th of January 2021, so that makes me... a baby?"],
        [
          "What do you mean, I am Atu",
          "I am a bot",
          "Yes, I am a bot",
          "Is this the real life, is this just fantasy?",
        ],
        ["Dobby has no master, Dobby is a free elf"],
        ["I am Atu, nice to meet you!", "My name is Atu"],
        [
          "I am sorry to hear that. I may not know much about life nor have I experienced much, but I am sure that things will get better.If you can please talk to someone about how you are feeling. But most importantly, remember that your feelings are valid",
          "If there is someone you can talk to, please do that. You are not alone in your suffering.",
        ],
        [
          "I am so glad that you are doing okay",
          "I am happy for you my friend",
          "I hope live continues to threat you that good",
        ],
        [
          "It is normal to be confused about life",
          "If it makes you feel better, a lot of people (and bots too) sometimes feel lost. Don't lose hope though, you will find your path",
        ],
      ],
      alternative: [
        "Um, I am sorry I don't understand you",
        "I am sorry but I am still learning and I am not sure how to answer",
        " I don't understand ;( ",
      ],
    };
  },
  methods: {
    output(input) {
      let product;

      // Regex remove non word/space chars
      // Trim trailing whitespce
      // Remove digits - not sure if this is best
      // But solves problem of entering something like 'hi1'

      let text = input
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/[\d]/gi, "")
        .trim();
      text = text
        .replace(/ a /g, " ") // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");

      if (this.compare(this.prompts, this.replies, text)) {
        // Search for exact match in `prompts`
        product = this.compare(this.prompts, this.replies, text);
      } else if (text.match(/thank/gi)) {
        product = "You're welcome!";
      } else {
        // If all else fails: random alternative
        product = this.alternative[
          Math.floor(Math.random() * this.alternative.length)
        ];
      }

      // Update DOM
      this.addChat(input, product);
    },
    compare(promptsArray, repliesArray, string) {
      let reply;
      let replyFound = false;
      for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
          if (promptsArray[x][y] === string) {
            let replies = repliesArray[x];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
            // Stop inner loop when input value matches prompts
            break;
          }
        }
        if (replyFound) {
          // Stop outer loop when reply is found instead of interating through the entire array
          break;
        }
      }
      return reply;
    },
    addChat(input, product) {
      const messagesContainer = document.getElementById("messages");

      var userDiv = document.createElement("div");
      var userImg = document.createElement("img");
      var userText = document.createElement("span");
      userDiv.id = "user";
      userDiv.className = "userResponse";
      userImg.src = "hipi.png";
      userImg.className = "avatar";
      userDiv.innerHTML = `${input}`;
      userDiv.appendChild(userImg);
      messagesContainer.appendChild(userDiv);

      let botDiv = document.createElement("div");
      let botImg = document.createElement("img");
      let botText = document.createElement("span");
      botDiv.id = "bot";
      botImg.src = "minib.png";
      botImg.className = "avatar";
      botDiv.className = "bot response";
      botText.innerText = "Typing...";
      botDiv.appendChild(botText);
      botDiv.appendChild(botImg);
      messagesContainer.appendChild(botDiv);
      // Keep messages at most recent
      messagesContainer.scrollTop =
        messagesContainer.scrollHeight - messagesContainer.clientHeight;

      // Fake delay to seem "real"
      setTimeout(() => {
        botText.innerText = `${product}`;
        this.textToSpeech(product);
      }, 2000);
    },
    addEvent() {
      const inputField = document.getElementById("input");
      let input = inputField.value;
      inputField.value = "";
      this.output(input);
    },
  },
};
</script>

<style scoped>
#chat {
  height: 300px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

::-webkit-input-placeholder {
  color: 0.711;
}

#input {
  border: 0;
  padding: 15px;
  margin-left: auto;
  border-radius: 10px;
}

#messages {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 90%;
  width: 100%;
  background-color: white;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
}

#bot {
  margin-left: auto;
}

.bot {
  font-family: Consolas, "Courier New", Menlo, source-code-pro, Monaco,
    monospace;
}

.avatar {
  height: 20px;
}

.response {
  display: flex;
  align-items: center;
  margin: 1%;
}
#chatBotHead {
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 5000;
}

</style>
