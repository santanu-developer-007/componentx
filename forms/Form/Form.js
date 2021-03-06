import x from "x";
export default x({
	name: "Form",
	data: {
		formData: {}
	},
	render(){
		let element = document.createElement("form");
		return element;
	},
	mounted(){
		if(this.props.children !== undefined){
			this.props.children.forEach(function(child){
				this.appendChild(child);
			}.bind(this));
		}

		if(this.props.trigger !== undefined){
			this.props.trigger.$on("click", function(event){
				if(this.props.onSubmit !== undefined){
					this.props.onSubmit(this.formData);	
				}
				this.onSubmit(this.formData);
			}.bind(this));
		}

		let inputs = this.props.inputs;
		if(inputs !== undefined){
			inputs.forEach(function(input){
				input.$on("value", function(data){
					this.formData[input.name] = data;
				}.bind(this));
			}.bind(this));
		}
	},
	methods: {
		onSubmit:function(){},
		appendChild: function(child){
			this.element.appendChild(child.element);
		}
	}
});