import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import android from '@/components/android/android'
import login from '@/components/user/login'
import signup from '@/components/user/signup'
import website from '@/components/website/website'
import work from '@/components/work/work'
import newwork from '@/components/work/newWork'
import detail from '@/components/work/detailwork'
import AuthGuard from './auth-guard'
import chat from '@/components/Chat/chat'
import Chats from '@/components/Chat/Chats'
import Create from '@/components/Chat/Create'
import Chatmenu from '@/components/Chatmenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/chats',
      name: 'Chats',
      component: Chats
    },
    {
      path: '/menu',
      name: 'Chatmenu',
      component: Chatmenu
    },{
      path: '/chat/:id',
      name: 'chatid',
      component: chat
    },
    {
      path: '/android',
      name: 'android',
      component: android
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/website',
      name: 'website',
      component: website
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/work/new',
      name: 'newwork',
      component: newwork,
      beforeEnter: AuthGuard
    },
    {
      path: '/work/:id',
      name: 'detail',
      props: true,
      component: detail
    }
  ],
  mode: 'history'
})
