vue=new Vue({
	el: "#app",
	data: {
		click_msg:'I am btn msg',
		mod_checkbox:[],
		picked:'',
		input_debounce:'',
	},
	methods:{
		click_btn(msg,event){
			this.click_msg = msg + event.target.tagName;
		},
		input_enter(event){
			alert('Hello vue ' + event.target.tagName);
		}
	},
	computed: {//计算属性，此方法会被调用，并为
	}
});

//vue.$watch('mod_todo',function(val){
//});


console.log(v=vue);