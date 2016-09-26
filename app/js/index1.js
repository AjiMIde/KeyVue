vue=new Vue({
	el: "#app",
	data: {
		msg: 'vue me',
		fullMsg:'',
		flag_if:true,
		flag_show:true,
		mod_todo:'',
		mod_todo_length:0,
		todos:[
			{text:'to do sth...'}
		],
		yunsuan2:'<b><u>Yuan Suan2</u></b>',
		yunsuan3:'<b><u>Yuan Suan3</u></b>',

		flag_red:false,
		flag_bold:false

	},
	methods:{
		reverse:function(){
			this.msg = this.msg.split('').reverse().join('');
		},
		addTodo:function(){
			this.todos.push({text:this.mod_todo});
			this.mod_todo = "";
		},
		removeTodo:function(index){
			this.todos.splice(index,1);
		}
	},
	computed: {//计算属性，此方法会被调用，并为
		// 一个计算属性的 getter
		mod_todo_reverse: function () {
			return this.mod_todo.split('').reverse().join('');
		},
		//这是一个拥有： getter/setter 方法的计算属性
		mod_get_set:function($val){
			//对$val 进行拆分
		}
	}
});

vue.$watch('mod_todo',function(val){
	this.mod_todo_length = val.length;
});


console.log(v=vue);