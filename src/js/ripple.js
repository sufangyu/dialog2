/**
 * ripple  v1.0.0 
 * @date  2016-10-09
 * @author  方雨_Yu
 * @home  https://github.com/sufangyu/ripple
 * Licensed under MIT
 */
;(function($, window, document, undefined) {
	'use strict';
	
	var Ripple = (function() {

		function Ripple(element, options) {
			var self = this;

            self.$element = $(element);
            self.settings = $.extend({}, $.fn.ripple.defaults, options);

            self.target = null;  // 目标元素
			self.positionX = 0;  // 点击位置的横坐标
			self.positionY = 0;  // 点击位置的纵坐标 

            self.init();
		}

		Ripple.prototype = {
			/**
			 * 初始化
			 */
			init: function() {
				var self = this;

				self.bindEvents();
			},

			/**
			 * 绑定事件
			 */
			bindEvents: function() {
				var self = this;

				// 点击时, 获取点击的目标元素以及其点击位置, 并创建水波纹 DOM
				self.$element.on(event.downEvent, function(ev) {
					var touch = ev.changedTouches ? ev.changedTouches[0] : ev;

					self.target = $(touch.target);
					self.positionX = touch.pageX;
					self.positionY = touch.pageY;

				    self.creatRipple();
				});

				// 运动结束后, 删除水波纹 DOM
				$(document).on('webkitAnimationEnd MSAnimationEnd animationend', ('.'+ self.settings.className), function() {
					var $removeElement = this;
				    self.removeRipple($removeElement);
			    });
			},

			/**
			 * 创建水波纹
			 */
			creatRipple: function() {
				var self = this;

				var rect = getRect(self.target[0]);
				var size = Math.max(rect.width, rect.height);    // 目标元素相对窗口宽、高的最大值
				var elementLeft = self.target.offset().left;     // 目标元素相对窗口的横坐标
				var elementTop  = self.target.offset().top;      // 目标元素相对窗口的纵坐标

				// 创建水波纹DOM
				self.$rippleElement = $('<'+ self.settings.tagName +'></'+ self.settings.tagName +'>');

				// 设置水波纹DOM的位置与大小, 并添加到目标元素内
				self.$rippleElement
				    .addClass(self.settings.className)
				    .css({
					    left: self.positionX - elementLeft - size/2,
					    top: self.positionY - elementTop - size/2,
					    width: size,
					    height: size
				    });
				self.target.append(self.$rippleElement);
			},

			/**
			 * 删除水波纹
			 * @param {jQuery obj}  $element   jQuery 对象
			 */
			removeRipple: function($element) {
				var self = this;
				$element.remove();
			}
		};

		return Ripple;
	})();



	/**
	 * 获取元素的左、右、上、下相对浏览器视窗的位置
	 * @param {DOM obj}  element   DOM 对象
	 */
	function getRect(element) {		
		try {
			return element.getBoundingClientRect();            
        } catch(error) {
            console.log('No support getBoundingClientRect', error.message);
        }
	}

    /** 
     * 按下的事件类型: event.downEvent [ touchstart 或 mousedown ]
     */
    var event = (function(window) {
        var UA = window.navigator.userAgent,
            isAndroid = /android|adr/gi.test(UA),
            isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
            isMobile = isAndroid || isIOS,
            isSupportTouch = "ontouchend" in document ? true : false;

        return {
            downEvent: isMobile && isSupportTouch ? 'touchstart' : 'mousedown'
        };
    })(window);


	$.fn.ripple = function(options) {
		var self = this;
		var list = [];
        this.each(function(i, self){
            list.push(new Ripple(self, options));
        });
        return list;
	};

	$.fn.ripple.defaults = {
		tagName: 'span',
		className: 'ripple'
	};


	 // 通过 data-ripple 的方式实例化插件
    $(function() {
        return new Ripple($('[data-ripple]'));
    });
})(window.jQuery || window.Zepto, window, document);