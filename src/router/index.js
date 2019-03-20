import Vue from 'vue'
import Router from 'vue-router'
import NewEmployee from '@/components/NewEmployee'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import FireEmployee from '@/components/FireEmployee'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/employee:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/fire',
      name: 'fire-employee',
      component: FireEmployee
    }
  ]
})