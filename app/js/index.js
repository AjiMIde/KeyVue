vue=new Vue({
	el: "#app",
	data: {
		messages:[],
		showVcAlert:false,
		showVcWarning:false,
		showVcError:false,
		vcConfirm:'1',

	},
	methods:{
		aji:function(){
			this.vcConfirm = '2'
			this.showVcWarning = true
		}
	},
	computed: {
	},
	// 在创建实例时 `events` 选项简单地调用 `$on`
	events: {//事件监听
		'child-msg': function (msg) {
			// 事件回调内的 `this` 自动绑定到注册它的实例上
			this.messages.push(msg)
		}
	}
});

