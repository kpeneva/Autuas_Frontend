<template>
  <v-footer color="#562349" padless>
<v-row
      justify="center"
      no-gutters
    >
      <a
        v-for="link in links"
        :key="link"
        :href="link.src"
        class="my-5"
      >
        {{ link.title }}
      </a>
</v-row>
  </v-footer>
</template>
<script>

export default {
    data(){
        return{
            links:[
                {
                    title:'Befrienders Worldwide',
                    src:'https://www.befrienders.org/'
                },
                {
                    title:'I am Alive',
                    src:'https://www.imalive.org/',
                },
                {
                    title:'7 cups',
                    src:'https://www.7cups.com/'
                },
            ]
        }
    }
}
</script>
<style  scoped>
a{
  color:white;
  padding:1rem;
}
a:visited{
  color:ivory;
  padding:1rem;
}
</style>