define(['backbone', 'js/models/Log.js'], function(Backbone, LogModel) {

	var Logs = Backbone.Collection.extend([],{
		model: LogModel,
		type: 'default'
	});

	return Logs;
});