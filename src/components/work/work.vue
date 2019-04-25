<template>
    <v-container>
        <v-layout row wrap v-for="work in works" :key="work.id" class="mb-2">
            <v-flex xs12 sm10 md8 offset-md2 pt-5>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                    :src="work.imageUrl"
                                    height="150px"
                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text">{{ work.title }}</h2>
                                        <div>{{ work.date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-action>
                                    <v-btn flat :to="'/work/' + work.id">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Pdf
                                    </v-btn>
                                </v-card-action>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    works () {
      return this.$store.getters.featuredWork
    }
  }
}
</script>
