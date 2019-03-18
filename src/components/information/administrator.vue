<template>
    <div id="app">
        <my-head></my-head>
    </div>
</template>
<script>
import Vue from 'vue'
import App from './App'
import router from '././router'
import VueResource from 'vue-resource'
import kbtheader from './compnents/Head.vue'

Vue.config.productionTip = false

Vue.component('kbtheader', kbtHeader)
new Vue({
	el:'#app',
	router,
	template:'<App/>'
	components:{App}
	})
</script>
