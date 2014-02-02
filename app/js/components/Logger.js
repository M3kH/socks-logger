/** @jsx React.DOM */
define(['react', 'js/utils/BackboneMixin' ], function(React, BackboneMixin ) {


	var Logger = React.createClass({

		mixins: [BackboneMixin],

		getBackboneModels: function() {
			return [this.props];
		},
		render: function(){
//					console.log(item);
				var det = 0;
				var details = function ( data_passed ){

//					console.log(_);
//					console.log(data_passed);

					var room = data_passed.get('room'),
						data_model = data_passed.get('data');

					var item = 0,
						idMainLog = "main-log-"+det,
						parent_ref = "#"+idMainLog;

					var list = _.map( data_model, function( v, k ){

//							for ( var k in data_model){
//								var v = data_model[k];
							var dets;
							console.log(typeof v);
							if( typeof v == "object" || typeof v == "array" ){
								dets = _.map( v, function(v, k){
									return <dl class="dl-horizontal"><dt>{k}</dt><dd>{v}</dd></dl>;
								});
							}else if( typeof v == "string" ){
								dets = <pre>{v}</pre>;
							}

							item++;
							var idPanel = "panel-"+det+"-"+item,
							href_link = "#"+idPanel;

							return <div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a data-toggle="collapse" data-parent={parent_ref} href={href_link}>
												{k}
											</a>
										</h4>
									</div>
									<div id={idPanel} className="panel-collapse collapse">
										<div className="panel-body">{dets}</div>
									</div>
								</div>;
//							};
					});
					console.log(list);

					det++;
					return <div className="log alert alert-warning" >
							<h5>{room}</h5>
							<div id={idMainLog}><div className="panel-group">{list}</div></div>
							</div>;

				};
//				console.log(this.props.map(details));

				return <div className="logs" >{this.props.map(details)}</div>;

//						console.log(data);
//			});

//			return <div className="logs">{listItems}</div>;
		}

	});

	return Logger;


});




