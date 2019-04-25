<template>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs5 class="mt-5">
          <div justify-center v-for="meetup in meetups"
          :key="meetup.id" style="margin-bottom:50px">
          <v-img :src="meetup.imageUrl"></v-img>
          <div class="title"> {{ meetup.title }}</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute ;
    /* bottom: 1000px ; */
    padding:20px ;
    text-align: center ;
    color: while ;
    background-color:rgba(0, 0, 0, 0.5) ;
  }
</style>
