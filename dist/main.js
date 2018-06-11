var demo = new Vue({

	el: '#main',

	data: {

		services: [
			{
				name: "Web Development",
				price: 300,
				active: true
			},
			{
				name: "Design",
				price: 400,
				active: false
			},
			{
				name: "Integration",
				price: 250,
				active: true
			},
			{
				name: "Training",
				price: 220,
				active: false
			}
		]

	},

	methods: {

		total: function() {

			return 0;

		},

		toggleActive: function(s) {
			s.active = !s.active;
		}

	}

});