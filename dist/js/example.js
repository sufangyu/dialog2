$(function() {

	/* ########## alert ########## */
	$(document).on('click', '#btn-01', function() {
		var dialog1 = $(document).dialog({
			// content: '<input type="text" />'
			content: '我是默认的弹窗。这里是提示信息内容'
			// content: '我是默认的弹窗。这里是提示信息内容。我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。这里是提示信息内容我是默认的弹窗。',
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

});
