
	require.config({
		baseUrl: '/',
		paths:{
			jsx: 'bower_components/require-jsx/jsx',
			jquery: 'bower_components/jquery/dist/jquery.min',
			JSXTransformer: 'bower_components/react/JSXTransformer',
			react:  'bower_components/react/react',
			backbone:  'bower_components/backbone/backbone',
			underscore:  'bower_components/underscore/underscore',
			socketio: '/socket.io/socket.io'
		},
		urlArgs: "v=" + (new Date()).getTime(),
		shim:{
			backbone: {
				deps: [ 'underscore', 'jquery'],
				exports: 'Backbone'
			},
			underscore: {
				exports: '_'
			},
			JSXTransformer: {
				exports : 'JSXTransformer'
			}
		}
	});


	define([
	        'jquery', 'underscore', 'backbone', 'react', 'socketio',
	        'js/collections/Logs', 'jsx!js/components/Logger'],
			function( $, _, Backbone, React, io, Logs, LoggerComponent ){

		var Logger = new Logs();

		React.renderComponent(LoggerComponent( Logger ), $(".loggers")[0]);

		var socket = io.connect('http://localhost');
		var content = $('body > .container .loggers');


		socket.on('connect', function () {
			socket.on('message', function( data ) {
				Logger.add({'room': data.room, 'data': data.message});
			});

			socket.on('create', function(room) {
				var res = false;
				for( var k in collections ){
					if( k == room ){
						res = true;
					}
				}
				if(res == false){
				}
				socket.join(room);
			});
		});


	});

