vue=new Vue({
	el: "#app",
	data: {
		array: []
	},
	methods:{
		start (){
			let newData = [{msg: 'ajiaji'}, {msg: 'zhizhi'}, {msg: 'xixixi'}]
			this.array.push(newData.shift())
			this.array.push(newData.shift())
			var me = this
		      window.setInterval(() => {
		        let temp = me.array.shift()
		        me.array.push(newData.shift())
		        newData.push(temp)
		      }, 2000)
		}
	},
	computed: {//�������ԣ��˷����ᱻ���ã���Ϊ
	}
});

//vue.$watch('mod_todo',function(val){
//});


console.log(v=vue);