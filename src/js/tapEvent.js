/**
 * tapEvent  v1.0.0
 * @date  2016-09-27
 * @author 方雨_Yu
 * Licensed under MIT
 */
;(function($, window, document, undefined) {
    'use strict';

    $(document).ready(function() {
        var startX,       // 开始横坐标
            startY,       // 开始纵坐标
            endX,         // 结束横坐标
            endY,         // 结束纵坐标
            startTime,    // 按下的开始时间
            element;      // 触发事件元素

        $(document)
            .on('touchstart', function(e) {
                var e = e.originalEvent || e;
                var touch = e.changedTouches[0];

                element = $('tagName' in touch.target ? touch.target : touch.target.parentNode);
                startTime = new Date();
                startX = touch.clientX;
                startY = touch.clientY;
                endX = touch.clientX;
                endY = touch.clientY;
            })
            .on('touchmove',function(e) {
                var e = e.originalEvent || e;
                var touch = e.changedTouches[0];

                endX = touch.clientX;
                endY = touch.clientY;
            })
            .on('touchend',function(e) {
                var e = e.originalEvent || e;
                var touch = e.changedTouches[0];
                var endTime = new Date();

                // 结束时间 - 开始时间 < 300毫秒, 并且移动距离(开始坐标-结束左边)<20, 则触发事件 tapEvent
                if (endTime-startTime < 300) {
                    if (Math.abs(endX-startX) + Math.abs(endY-startY) < 30) {
                        element.trigger('tapEvent');
                    }
                }

                startTime = 0;
                startX = 0;
                startY = 0;
                endX = 0;
                endY = 0;
            });
    });

    // 注册快捷事件 tapEvent, 调用: $element.tapEvent(fn);
    ;['tapEvent'].forEach(function(eventName) {
        $.fn[eventName] = function(callback) { 
            return this.on(eventName, callback);
        };
    });
})(window.jQuery || window.Zepto, window, document);