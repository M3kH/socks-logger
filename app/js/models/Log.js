define(['backbone'], function(Backbone) {

	var Log = Backbone.Model.extend({
		default: {
			'type': '',
			'room': 'default',
			'data': {},
			'message': {}
		}
	});

	return Log;
});
//
// React.renderComponent(<MessageBox name="Rogers"/>, mountNode);
