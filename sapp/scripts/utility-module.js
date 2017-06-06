angular.module('UTILITY', []).directive('loadingBlock', function() {
	return {
		restrict : 'A',
		scope : {
			spinner : '=',
			sh : '=?'
		},
		templateUrl : '/views/loading-block.html',
		controller : [ '$scope', function($scope) {
			$scope.sh = $scope.sh || "120";
		} ]
	}
}).directive('loadingBlockSmall', function() {
	return {
		restrict : 'A',
		scope : {
			spinner : '=',
			sh : '=?'
		},
		templateUrl : '/views/loading-block-small.html',
		controller : [ '$scope', function($scope) {
			$scope.sh = $scope.sh || "120";
		} ]
	}
}).directive('loadlogo', function() {
	return {
		restrict: 'A',		
		template: '<img src="/images/logo.png" width="60" height="60"><span ng-if="reportName" class="">Report Type: &nbsp;{{reportName}}</span>'
	}
}).directive('fitText', function () {
    return {       
        link: function (scope, elm, attrs) {

 			var textWidth = elm[0].innerText.length;
 			var maxCharcter=attrs.maxChar || 45; 			
 			if(textWidth >= maxCharcter) {
 					var precentRatio=(1-Number((textWidth-maxCharcter)/textWidth))+'em';
			        elm.css('font-size', precentRatio);
			} else {
					var precentRatio=(1+Number((maxCharcter-textWidth)/maxCharcter))+'em';
			        elm.css('font-size', precentRatio);
			} 
              
        }
    };
})
// .directive('fitText', function () {
//     return {       
//         link: function (scope, elm, attrs) {

//  			var textWidth = elm[0].innerText.length;
//  			var containerWidth=elm[0].parentElement.clientWidth; 			
//  			if(textWidth > containerWidth) {
//  					var precentRatio=(1-Number((textWidth-containerWidth)/containerWidth))+'em';
// 			        elm.css('font-size', precentRatio);
// 			} else if(textWidth < containerWidth) {
// 				var precentRatio=(1+Number((containerWidth-textWidth)/containerWidth))+'em';
// 			        elm.css('font-size', precentRatio);
// 			} 
              
//         }
//     };
// })
.factory('FilterRule', function() {

	function getFilteredRules(rules, ruleType) {
		return rules.filter(function(rule) {
			return typeof rule[ruleType] !== 'undefined';
		});
	}
	;

	return {
		'getMinRules' : function(rules) {
			return getFilteredRules(rules, 'min');
		},
		'getMaxRules' : function(rules) {
			return getFilteredRules(rules, 'max');
		},
	}

}).service('fileUpload', [ '$http', function($http) {

	this.uploadFileToUrl = function(uploadData, uploadUrl) {

		var formData = new FormData();
		for (file in uploadData) {
			formData.append(file, uploadData[file]);
		}

		return $http.post(uploadUrl, formData, {
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		});

	}
} ]).directive('fileModel', function() {
	return {
		require : 'ngModel',
		link : function(scope, el, attrs, ngModel) {
			ngModel.$render = function() {
				ngModel.$setViewValue(el[0].files[0]);
			};

			el.bind('change', function() {
				scope.$apply(function() {
					ngModel.$render();
				});
			});
		}
	};
}).directive('draggable', function($document) {
	"use strict";
	return function(scope, element) {
		var startX = 0, startY = 0, x = 0, y = 0;
		element.css({
			position : 'fixed',
			cursor : 'move'
		});
		element.on('mousedown', function(event) {
			// Prevent default dragging of selected content
			event.preventDefault();
			startX = event.screenX - x;
			startY = event.screenY - y;
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {
			y = event.screenY - startY;
			x = event.screenX - startX;
			element.css({
				top : y + 'px',
				left : x + 'px'
			});
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
}).directive('minimizeWatch', function() {
	return {
		link : function(scope) {
			// Heads up: this might break is suspend/resume called out of order
			// or if watchers are added while suspended
			var watchers;

			scope.$on('suspend', function() {
				watchers = scope.$$watchers;
				scope.$$watchers = [];
			});

			scope.$on('resume', function() {
				if (watchers)
					scope.$$watchers = watchers;

				// discard our copy of the watchers
				watchers = void 0;
			});
		}
	};
}).factory('commonService', [ function() {
	var gotoEl = function(id) {
		if ($('#' + id).length == 1) {
			$('html, body').animate({
				scrollTop : $('#' + id).position().top,
				duration : 10
			});
		}

	}
	return {
		gotoEl : gotoEl
	};

} ]).factory('DateService', [ function() {

	var convertIntoDateTime = function(date) {
		var d = new Date(date);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		if (month.toString().length == 1) {
			var month = '0' + month;
		}
		if (day.toString().length == 1) {
			var day = '0' + day;
		}
		if (hour.toString().length == 1) {
			var hour = '0' + hour;
		}
		if (minute.toString().length == 1) {
			var minute = '0' + minute;
		}
		if (second.toString().length == 1) {
			var second = '0' + second;
		}
		var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		return dateTime
	};

	var parseDateFormat = function(dateVal) {
		var d = new Date(dateVal);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var day = d.getDate();
		if (month.toString().length == 1) {
			var month = '0' + month;
		}
		if (day.toString().length == 1) {
			var day = '0' + day;
		}

		var dateTime = year + '-' + month + '-' + day;
		return dateTime;
	};

	var getNumberOfDaysInMonth = function(year, month) {
		var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
		return [ 31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month];
		;
	}

	return {
		convertIntoDateTime : convertIntoDateTime,
		getNumberOfDaysInMonth : getNumberOfDaysInMonth,
		parseDateFormat : parseDateFormat
	};
} ]).factory('TreeUtils', [ 'Utils', function(Utils) {

	var treeUtils = {};

	var findFirstObjMatch = function(array, obj) {
		return array.filter(function(item) {
			for (data in obj)
				if (obj[data] !== item[data])
					return false;
			;
			return true;
		})[0];
	};

	treeUtils.sumTreeKeyVal = function(tree, key, val, count) {

		var sum = key ? 0 : 1;
		var keys = key ? key.split(',') : [];
		var nodeKeyVal = key ? tree : undefined;

		for (keyIndex in keys) {
			if (!nodeKeyVal)
				break;

			if (!(nodeKeyVal instanceof Array)) {
				nodeKeyVal = nodeKeyVal[keys[keyIndex]];
				continue;
			}

			var keyObj = JSON.parse(keys[keyIndex]);
			nodeKeyVal = findFirstObjMatch(nodeKeyVal, keyObj);

		}

		if (key && nodeKeyVal) {
			if (val) {
				if (nodeKeyVal == val)
					sum = count ? 1 : val;
			} else
				sum = count ? 1 : ((typeof nodeKeyVal === "string") ? parseFloat(nodeKeyVal) : nodeKeyVal);
		}

		if (!tree.children)
			return sum;
		for (child in tree.children)
			sum += treeUtils.sumTreeKeyVal(tree.children[child], key, val, count);
		;
		return sum;

	};

	treeUtils.getParentType = function getParentType(tree, nodeId, parentType) {

		var someVar = null;
		if (tree.id === nodeId)
			return parentType;

		if (typeof tree.children === 'undefined')
			return null;

		for (child in tree.children) {
			var type = treeUtils.getParentType(tree.children[child], nodeId, tree.type);
			if (type !== null) {
				someVar = type;
				break;
			}
		}

		return someVar;

	};

	treeUtils.getNodesByType = function getNodesByType(tree, type, nodes) {

		if (typeof nodes === 'undefined')
			nodes = [];

		if (tree.type === type)
			nodes.push(tree);

		if (typeof tree.children === 'undefined')
			return;

		for ( var child in tree.children) {
			getNodesByType(tree.children[child], type, nodes);
		}

		return nodes;
	};

	treeUtils.getNodeById = function getNodeById(subTree, id) {

		if (subTree.id === id)
			return subTree;

		for ( var childIndex in subTree.children) {
			try {
				var node;
				if (node = getNodeById(subTree.children[childindex], id))
					return node;
			} catch (error) {

			}
		}

		throw "No Node with id= " + id + " exists";
	}

	treeUtils.getAllNodes = function getAllNodes(tree, nodes, path) {

		if (typeof nodes === 'undefined')
			nodes = [];

		if (typeof path === 'undefined')
			path = tree.name;
		else
			path += tree.name;

		nodes.push({
			'node' : tree,
			'path' : path
		});

		if (typeof tree.children === 'undefined')
			return nodes;

		for (child in tree.children) {
			getAllNodes(tree.children[child], nodes, path + ' > ');
		}

		return nodes;
	};

	treeUtils.getStdParams = function getStdParams(subTree, standardParams) {

		if (typeof standardParams === 'undefined')
			standardParams = {};

		for ( var devIndex in subTree.devices) {
			for ( var prmIndex in subTree.devices[devIndex].profile.params) {
				var stdParam = subTree.devices[devIndex].profile.params[prmIndex].stdParam;
				standardParams[stdParam.id] = stdParam;
			}
		}

		for ( var childIndex in subTree.children) {
			var node = subTree.children[childIndex];
			getStdParams(node, standardParams);
		}

		return Utils.getObjectValues(standardParams);
	}

	return treeUtils;

} ]).factory('Utils', function() {

	return {

		'getObjectValues' : function(object) {
			var array = [];
			for ( var key in object)
				array.push(object[key]);
			return array;
		},
		'snakeToCamelCase' : function snakeToCamel(s) {
			return s.replace(/(\-\w)/g, function(m) {
				return m[1].toUpperCase();
			});
		},
		'getUniqueItemArray' : function(array, uniqueKey) {
			var object = {};
			var filteredArray = [];
			for (index in array)
				object[array[index][uniqueKey]] = array[index];
			for (key in object)
				filteredArray.push(object[key]);
			return filteredArray;
		},
		'getObjectById' : function(array, id) {

			for ( var index in array) {
				if (array[index].id == id)
					return array[index];
			}
			throw "No Object with id:" + id + " found";
		},
		'getObjectByKeyValue' : function(array, key, value) {
			for ( var index in array) {
				if (array[index][key] == value)
					return array[index];
			}
			throw "No Object with " + key + "=" + value + " found";
		},
		'getArrayOfKeysValue' : function(array, key) {
			var resultArray = [];
			for ( var index in array)
				resultArray.push(array[index][key]);
			return resultArray;
		},
		'ListFormat' : function(lists) {
			if (!lists)
				return;
			return lists.map(function(elem) {
				return elem.name;
			}).join(", ");
		}

	}

}).filter('replaceUnderscore', function() {

	return function(inputStr) {
		var outputStr = inputStr.replace(/_./g, function(text) {
			return ' ' + text.charAt(1).toUpperCase();
		});
		return outputStr.charAt(0).toUpperCase() + outputStr.substr(1);
	}

}).directive('percentDisplay', function() {
	return {
		restrict : 'E',
		template : '<div class="ngpercentdisplay" data-percent="{{ percent }}">' + '<div class="ngperdispleft">' + '<span></span>' + '</div>' + '<div class="ngperdispright">' + '<span></span>' + '</div>' + '</div>',
		scope : {
			percent : '='
		},
		link : function($scope, element, attrs) {

			var jEle = $(element);
			var leftSide = jEle.find(".ngperdispleft span"), rightSide = jEle.find(".ngperdispright span"), side = attrs.side || 50, fontSize = Math.floor(side / 5);
			colors = attrs.colors.split(' ');
			var deg, strdeg;

			if (!colors[0]) {
				colors[0] = '#DADADA';
			}
			if (!colors[1]) {
				colors[1] = '#606060';
			}
			if (!colors[2]) {
				colors[2] = '#FFFFFF';
			}

			jEle.find('.ngpercentdisplay').css({
				'width' : side,
				'height' : side,
				'font-size' : fontSize,
				'background-color' : colors[0],
				'color' : colors[1]
			});
			jEle.find('.ngpercentdisplay span').css({
				'background-color' : colors[1]
			});
			jEle.find('.ngpercentdisplay:before').css({
				'background-color' : colors[2]
			});

			$scope.$watch('percent', function(newvalue, oldvalue) {

				if (newvalue > -1 && newvalue < 101) {
					if (newvalue <= 50) {
						// Hide left
						leftSide.hide();

						// Adjust right
						deg = 180 - (newvalue / 100 * 360);
						strdeg = "rotateZ(-" + deg + "deg)";
						rightSide.css({
							"transform" : strdeg,
							"-webkit-transform" : strdeg,
							"-moz-transform" : strdeg,
							"msTransform" : "rotate(-" + deg + "deg)"
						});
					} else {
						// Adjust left
						leftSide.show();
						deg = 180 - ((newvalue - 50) / 100 * 360);
						strdeg = "rotateZ(-" + deg + "deg)";
						leftSide.css({
							"transform" : strdeg,
							"-webkit-transform" : strdeg,
							"-moz-transform" : strdeg,
							"msTransform" : "rotate(-" + deg + "deg)"
						});
						rightSide.css({
							"transform" : "rotateZ(0deg)",
							"-webkit-transform" : "rotateZ(0deg)",
							"-moz-transform" : "rotateZ(0deg)",
							"msTransform" : "rotate(0deg)"
						});
					}
				}
			});
		}
	}
});
