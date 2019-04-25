<template>
    <v-container>
        <v-layout row warp>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        {{ detail.title }}
                    </v-card-title>
                    <v-img
                        :src="detail.imageUrl"
                        height="400px"
                    ></v-img>
                    <v-card-text>
                        <div class="info--text">
                            daslkgds;gl;kjgkjfdglhdsbfdskf
                        </div>
                        <div>
                            BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    detail () {
      return this.$store.getters.loadeddetail(this.id)
    }
  }
}
</script>
