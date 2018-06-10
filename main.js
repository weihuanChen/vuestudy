import Vue from "vue";
import app from "./pagecontainer.vue";
import Element from "element-ui";
Vue.use(Element);
Vue.config.productionTip = false;
new Vue({
	el:"app",
	components:{app},
	template:"<app/>"
});
