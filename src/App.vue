<template>
  <v-app>
    <v-toolbar>
      <!-- toolbar wait database use group -->
      <v-toolbar-side-icon @click="sideNavmob = !sideNavmob" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <!-- normal screen -->
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-down"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" flat>
          Group Assistant
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItem"
        :key="item.title"
        router
        :to="item.link">
          <v-icon left> {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left> exit_to_app </v-icon>
            Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer temporary app v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItem"
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- moblie -->
    <v-navigation-drawer temporary app v-model="sideNavmob">
      <v-list>
        <v-list-tile v-for="item in menuItem1"
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view>

      </router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      sideNav: false,
      sideNavmob: false
    }
  },
  computed: {
    menuItem () {
      let menuItem = [
        { icon: 'inbox', title: 'Inbox', link: '/work' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/login' }
      ]
      if (this.userIsAuthenticated) {
        menuItem = [
          { icon: 'chat', title: 'Chat', link: '/chat' },
          { icon: 'inbox', title: 'Inbox', link: '/work' },
          { icon: 'web', title: 'Website', link: '/website' },
          { icon: 'android', title: 'Android', link: '/android' },
          { icon: 'chat', title: 'Create', link: '/create' },
          { icon: 'chat', title: 'Menu', link: '/menu' },
          { icon: 'chat', title: 'Chats', link: '/chats' }
        ]
      }
      return menuItem
    },
    menuItem1 () {
      let menuItem1 = [
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/login' }
      ]
      if (this.userIsAuthenticated) {
        menuItem1 = [
          { icon: 'inbox', title: 'Inbox', link: '/work' }
        ]
      }
      return menuItem1
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
