import Vue from 'vue'
import App from './App'
import VueResource  from 'vue-resource'
import VueRouter  from 'vue-router'
import jQuery from 'jquery'
import dsgCategorias from './components/dsgCategorias'
import dsgDb from './components/dsgDB'
import dsgDominios from './components/dsgDominios'
import dsgProgramas from './components/dsgProgramas'
import dsgMenu from './components/dsgMenu'
import dsgScripts from './components/dsgScripts'
import dsgSegmentos from './components/dsgSegmentos'
import dsgArea from './components/dsgArea'
import dsgTabelas from './components/dsgTabelas'
import dsgVersoes from './components/dsgVersoes'
import dsgViews from './components/dsgViews'
import dsgModal from './components/dsgModal'
import Materials from 'vue-materials'
import MyPlugin from './MyPlugin'



require('../node_modules/materialize-css/dist/css/materialize.css');
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
require('materialize-css');

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Materials)


 window.itens1 =''
 window.clicado =false
 window.jsonWhere =''

//Vue.use(MyPlugin)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: 
  [
    { 
      path: '/',
      component: dsgMenu

    },

    { 
    	path: '/area', 
    	component: dsgArea
    },

    { 
    	path: '/Categorias', 
    	component: dsgCategorias
    },


    { 
    	path: '/db', 
    	component: dsgDb
    },


     { 
    	path: '/dominios', 
    	component: dsgDominios
    },


    { 
    	path: '/Programas', 
    	component: dsgProgramas
    },


     { 
    	path: '/Scripts', 
    	component: dsgScripts
    },

        { 
    	path: '/Segmentos', 
    	component: dsgSegmentos
    },


    { 
    	path: '/Tabelas', 
    	component: dsgTabelas
    },


    { 
    	path: '/Versoes', 
    	component: dsgVersoes
    },


    { 
    	path: '/Views', 
    	component: dsgViews
    }
					     
  ]
})

new Vue({
  router,
  template: `
    <div id="app">


    <head>
       <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>

     <router-view ></router-view>
    </div>
  `,
  script:
  `
  
  `


}).$mount('#app')