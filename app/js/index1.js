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
	computed: {//�������ԣ��˷����ᱻ���ã���Ϊ
		// һ���������Ե� getter
		mod_todo_reverse: function () {
			return this.mod_todo.split('').reverse().join('');
		},
		//����һ��ӵ�У� getter/setter �����ļ�������
		mod_get_set:function($val){
			//��$val ���в��
		}
	}
});

vue.$watch('mod_todo',function(val){
	this.mod_todo_length = val.length;
});


console.log(v=vue);