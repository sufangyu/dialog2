/**
 *  http://loading.io/
 *  类型：alert、confirm、prompt、info、notice、toast
 *  http://www.material-ui.com/#/components/dialog
 *  http://www.jq22.com/jquery-info3103
 *  http://www.jq22.com/demo/sweetalert-master-150108224250/
 *  http://www.xueui.cn/experience/app-experience/dialogs.html
 *  
 *  http://mt.sohu.com/20160504/n447660362.shtml  IOS
 *  http://my.oschina.net/u/2340880/blog/408873?p=1
 *  http://www.zaole.net/demo/201601121043.html
 *  
 */
$(function() {

	/*$('.demo').click(function() {
		alert('TAP事件出BUG了！居然点到我这里？');
	});*/
		

	/* ########## alert ########## */
	$(document).on('click', '#btn-01', function() {
		var dialog1 = $(document).dialog({
			// content: '我是默认的弹窗。这里是提示信息内容'
			content: '我是默认的弹窗。这里是提示信息内容。我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。',
			// content: '我是默认的弹窗。这里是提示信息内容。我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容',
			// contentScroll: true,
			// style: 'android',
			// type: 'confirm',
			// buttonStyle: 'stacked'
		});
	});

	$(document).on('click', '#btn-02', function() {
		var dialog2 = $(document).dialog({
			titleText: '我是自定义标题',
			content: '自定义标题的弹窗。这里是弹窗的提示信息内容'
		});
	});

	$(document).on('click', '#btn-03', function() {
		var dialog3 = $(document).dialog({
			titleShow: false,
			content: '无标题的弹窗。这里是弹窗的提示信息内容'
		});
	});

	$(document).on('click', '#btn-04', function() {
		var dialog4 = $(document).dialog({
			autoClose: 2500,
			content: '自动关闭的弹窗。这里是弹窗的提示信息内容'
		});
	});

	$(document).on('click', '#btn-05', function() {
		var dialog5 = $(document).dialog({
			overlayClose: true,
			content: '可以点击遮罩层关闭的弹窗。这里是弹窗的提示信息内容'
		});
	});



	/* ########## confirm ########## */

	$(document).on('click', '#btn-06', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			// titleText: '发现新版本',
			// content: '修复Tap事件在安卓低版本手机出现点透；修复弹窗在低版本安卓手机无法居中显示；去除CSS3启用GPU硬件加速',
			content: 'confirm 类型的弹窗。这里是弹窗的提示信息内容'
		});
	});

	$(document).on('click', '#btn-07', function() {
		var dialog7 = $(document).dialog({
			type : 'confirm',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttonTextConfirm: '现在升级',
			buttonTextCancel: '下次再说',
		});
	});

	$(document).on('click', '#btn-08', function() {
		var dialog8 = $(document).dialog({
			type : 'confirm',
			content: 'confirm 类型的弹窗。这里是弹窗的提示信息内容',
			buttonClassConfirm: 'custom-confirm',
			buttonClassCancel: 'custom-cancel',
		});
	});


	$(document).on('click', '#btn-09', function() {
		var dialog9 = $(document).dialog({
			type : 'confirm',
			closeBtnShow: true,
			content: 'confirm 类型的弹窗。这里是弹窗的提示信息内容',
			onClickConfirmBtn: function(){
				alert('你点了“确定”按钮');
			},
	        onClickCancelBtn : function(){
	        	alert('你点了“取消”按钮');
	        },
	        onClickCloseBtn  : function(){
	        	alert('你点了“关闭”按钮');
	        }
		});
	});


	$(document).on('click', '#btn-10', function() {
		var dialog10 = $(document).dialog({
			type : 'confirm',
			content: 'confirm 类型的弹窗。这里是弹窗的提示信息内容',
			onBeforeShow: function() {
				alert('弹窗显示前执行~~');
			},
        	onShow: function() {
				alert('弹窗显示后执行~~');
        	},
	        onBeforeClosed: function() {
	        	alert('弹窗关闭前执行~~');
	        },
	        onClosed: function() {
	        	alert('弹窗关闭后执行~~');
	        }
		});
	});

	// 弹窗风格
	$(document).on('click', '#btn-style-01', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'default',
			titleText: '弹窗风格',
			content: '按访问设备显示的弹窗风格，这里是弹窗的提示信息内容',
		});
	});
	$(document).on('click', '#btn-style-02', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'ios',
			titleText: '弹窗风格',
			content: 'IOS 的弹窗风格，这里是弹窗的提示信息内容',
		});
	});
	$(document).on('click', '#btn-style-03', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'android',
			titleText: '弹窗风格',
			content: 'Android 的弹窗风格，这里是弹窗的提示信息内容',
		});
	});

    // 多个按钮
	$(document).on('click', '#btn-buttons-01', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'ios',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttons: [
			    {
			    	name: '现在升级',
			    	callback: function() {
			    		alert('你选择了“现在升级”');
			    	}
			    },
			    {
			    	name: '下次再说',
			    	callback: function() {
			    		alert('你选择了“下次再说”');
			    	}
			    },
			    {
			    	name: '不再提醒',
			    	callback: function() {
			    		alert('你选择了“不再提醒”');
			    	}
			    }
			]
		});
	});
	$(document).on('click', '#btn-buttons-02', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'android',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttons: [			
			    {
			    	name: '不再提醒',
			    	callback: function() {
			    		alert('你选择了“不再提醒”');
			    	}
			    },
			    {
			    	name: '下次再说',
			    	callback: function() {
			    		alert('你选择了“下次再说”');
			    	}
			    },
			    {
			    	name: '现在升级',
			    	class: 'dialog-btn-hl',
			    	callback: function() {
			    		alert('你选择了“现在升级”');
			    	}
			    }
			]
		});
	});

	// 按钮排版样式
	$(document).on('click', '#btn-buttonStyle-01', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'ios',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttonStyle: 'side',
			buttons: [
			    { name: '现在升级' },
			    { name: '下次再说' },
			    { name: '不再提醒' }
			]
		});
	});
	$(document).on('click', '#btn-buttonStyle-02', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'ios',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttonStyle: 'stacked',
			buttons: [
			    { name: '现在升级' },
			    { name: '下次再说' },
			    { name: '不再提醒' }
			]
		});
	});	
	$(document).on('click', '#btn-buttonStyle-03', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'android',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttonStyle: 'side',
			buttons: [
			    { name: '不再提醒', },
			    { name: '下次再说', },
			    { name: '现在升级', class: 'dialog-btn-hl' }
			]
		});
	});
	$(document).on('click', '#btn-buttonStyle-04', function() {
		var dialog6 = $(document).dialog({
			type : 'confirm',
			style: 'android',
			titleText: '发现新版本',
			content: '修复低版本安卓手机点透以及无法居中显示问题；去除CSS3启用GPU硬件加速',
			buttonStyle: 'stacked',
			buttons: [
			    { name: '不再提醒', },
			    { name: '下次再说', },
			    { name: '现在升级', class: 'dialog-btn-hl' }
			]
		});
	});




	/* ########## toast ########## */

	$(document).on('click', '#btn-11', function() {
		var toast1 = $(document).dialog({
			type : 'toast',
			infoIcon: '../images/icon/loading.gif',
			infoText: '正在加载中',
			autoClose: 2500
		});
	});

	$(document).on('click', '#btn-12', function() {
		var toast2 = $(document).dialog({
			type : 'toast',
			infoIcon: '../images/icon/success.png',
			infoText: '加载成功',
			autoClose: 2500
		});
	});

	$(document).on('click', '#btn-13', function() {
		var toast3 = $(document).dialog({
			type : 'toast',
			infoIcon: '../images/icon/fail.png',
			infoText: '加载失败',
			autoClose: 2500
		});
	});

	$(document).on('click', '#btn-14', function() {
		var toast3 = $(document).dialog({
			type : 'toast',
			infoIcon: '../images/icon/loading.gif',
			autoClose: 2500
		});
	});


	$(document).on('click', '#btn-15', function() {
		var toast4 = $(document).dialog({
			type : 'toast',
			content: '<img class="info-icon" src="../images/icon/loading.gif" /><span class="info-text">正在加载中</span>',
			// infoIcon: '../images/icon/loading.gif',
			// infoText: '正在加载中',
			autoClose: 2500
		});
	});


    $(document).on('click', '#btn-16', function() {
        var toast5 = $(document).dialog({
            type : 'toast',
            infoIcon: '../images/icon/loading.gif',
            infoText: '正在加载中',
        });

        setTimeout(function () {
            toast5.update({
				infoIcon: '../images/icon/success.png',
                infoText: '加载成功',
                autoClose: 2500,
                /*onBeforeClosed: function() {
                	alert('关闭前执行的回调~~');
                },
                onClosed: function() {
                	alert('关闭后执行的回调~~');
                }*/
            });
        }, 3000);
    });

    $(document).on('click', '#btn-17', function() {
        var toast6 = $(document).dialog({
            type : 'toast',
            infoIcon: '../images/icon/loading.gif',
            infoText: '正在加载中',
        });

        setTimeout(function () {
        	toast6.close();
            $(document).dialog({
				// titleShow: false,
				content: '加载失败！请重新再试',
			});
        }, 2500);
    });



    /* ########## notice ########## */

    $(document).on('click', '#btn-18', function() {
        var notice1 = $(document).dialog({
            type : 'notice',
            infoIcon: '../images/icon/loading.gif',
            infoText: '正在加载中',
            autoClose: 2500
        });
    });

    $(document).on('click', '#btn-19', function() {
        var notice2 = $(document).dialog({
            type : 'notice',
            infoText: '正在提交中...',
            autoClose: 2500
        });
    });

    $(document).on('click', '#btn-20', function() {
        var notice2 = $(document).dialog({
            type : 'notice',
            infoIcon: '../images/icon/loading.gif',
            autoClose: 2500
        });
    });

    $(document).on('click', '#btn-21', function() {
        var notice3 = $(document).dialog({
            type : 'notice',
            infoText: '正在提交中',
            autoClose: 2500,
            position: 'bottom'
        });
    });

    $(document).on('click', '#btn-22', function() {
        var notice4 = $(document).dialog({
            type : 'notice',
            content: '<img class="info-icon" src="../images/icon/loading.gif" alt="" /><span class="info-text">正在提交中</span>',
            // infoIcon: '../images/icon/loading.gif',
            // infoText: '正在加载中',
            autoClose: 2500
        });
    });


    $(document).on('click', '#btn-23', function() {
        var notice5 = $(document).dialog({
            type : 'notice',
            infoIcon: '../images/icon/loading.gif',
            infoText: '正在加载中'
        });

        setTimeout(function () {
            notice5.update({
                infoIcon: '../images/icon/success.png',
                infoText: '加载成功！！',
                autoClose: 2500
            });
        }, 3000);
    });



	/** 
		type         : 'alert',   // 弹窗的类型 [ alert: 确定; confirm: 确定/取消; toast: 状态提示; notice: 提示信息 ]
        style        : 'default', // alert 与 confirm 弹窗的风格 [ default: 根据访问设备平台; ios: ios 风格; android: android MD 风格 ]
        titleShow    : true,      // 是否显示标题
        titleText    : '提示',    // 标题文字
        closeBtnShow : false,     // 是否显示关闭按钮
        content      : '',        // 弹窗提示内容, 值可以是 HTML 内容
        contentScroll: false,     // 弹窗提示内容是否限制最高高度, 使其可以滚动
        dialogClass  : '',        // 弹窗自定义 class
        autoClose    : 0,         // 弹窗自动关闭的延迟时间(毫秒)。0: 不自动关闭; 大于0: 自动关闭弹窗的延迟时间
        overlayShow  : true,      // 是否显示遮罩层
        overlayClose : false,     // 是否可以点击遮罩层关闭弹窗
         
        buttonStyle       : 'side',   // 按钮排版样式 [ side: 并排; stacked: 堆叠 ]
        buttonTextConfirm : '确定',   // 确定按钮文字
        buttonTextCancel  : '取消',   // 取消按钮文字
        buttonClassConfirm: '',       // 确定按钮自定义 class
        buttonClassCancel : '',       // 取消按钮自定义 class
        buttons           : [],       // 自定义按钮组, 会覆盖"确定"与"取消"按钮; 单个 button 对象可设置 name [ 名称 ]、class [ 自定义class ]、callback [ 点击执行的函数 ]

        infoIcon: '',        // toast 与 notice 类型弹窗的提示图标, 值为图标的路径。不设置=不显示
        infoText: '',        // toast 与 notice 类型弹窗的提示文字, 会覆盖 content 的设置
        position: 'center',  // notice 类型弹窗的位置, [ center: 居中; bottom: 底部 ]

        onClickConfirmBtn: function(){},  // “确定”按钮的回调函数
        onClickCancelBtn : function(){},  // “取消”按钮的回调函数
        onClickCloseBtn  : function(){},  // “关闭”按钮的回调函数
        onBeforeShow     : function(){},  // 弹窗显示前的回调函数
        onShow           : function(){},  // 弹窗显示后的回调函数
        onBeforeClosed   : function(){},  // 弹窗关闭前的回调函数
        onClosed         : function(){}   // 弹窗关闭后的回调函数
	*/
});
