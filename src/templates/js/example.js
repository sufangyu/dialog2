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

var modalHtmlIOS = '<div class="dialog dialog-open dialog-modal"data-style="ios"><div class="dialog-overlay"></div><div class="dialog-content"><div class="dialog-content-hd"><h3 class="dialog-content-title">弹窗风格</h3><div class="dialog-btn-close"><span>close</span></div></div><div class="dialog-content-bd">IOS的弹窗风格，这里是弹窗的提示信息内容</div><div class="dialog-content-ft side"><button class="dialog-btn dialog-btn-cancel ">取消</button><button class="dialog-btn dialog-btn-confirm ">确定</button></div></div></div>';
var modalHtmlAndroid= '<div class="dialog dialog-open  dialog-modal" data-style="android"><div class="dialog-overlay"></div><div class="dialog-content"><div class="dialog-content-hd"><h3 class="dialog-content-title">弹窗风格</h3><div class="dialog-btn-close"><span>close</span></div></div><div class="dialog-content-bd">Android 的弹窗风格，这里是弹窗的提示信息内容</div><div class="dialog-content-ft side"><button class="dialog-btn dialog-btn-cancel ">取消</button><button class="dialog-btn dialog-btn-confirm ">确定</button></div></div></div>';

var dialogToastHtml = '<div class="dialog dialog-open  dialog-toast" data-style="android"><div class="dialog-overlay"></div><div class="dialog-content"><div class="dialog-content-bd"><img class="info-icon" src="../images/icon/loading.gif"><span class="info-text">正在加载中</span></div></div></div>';

var dialogNoticeHtml = '<div class="dialog dialog-open  dialog-notice" data-style="android"><div class="dialog-overlay"></div><div class="dialog-content"><div class="dialog-content-bd"><img class="info-icon" src="../images/icon/loading.gif"><span class="info-text">正在加载中</span></div></div></div>';
var dialogNoticeBottomHtml = '<div class="dialog dialog-open  dialog-notice dialog-notice-bottom" data-style="android"><div class="dialog-overlay"></div><div class="dialog-content"><div class="dialog-content-bd"><span class="info-text">正在提交中</span></div></div></div>';


$(function() {

	// modal
	$(document).on('touchstart', '.open-dialog-ios', function() {
		$('body').append( $dialog = $(modalHtmlIOS) );
		$dialog.addClass('dialog-open');
	});

	$(document).on('touchstart', '.open-dialog-android', function() {
		$('body').append( $dialog = $(modalHtmlAndroid) );
		$dialog.addClass('dialog-open');
	});


	// toast
	$(document).on('touchstart', '.open-dialog-loading, .open-dialog-success, .open-dialog-fail', function() {
		$('body').append( $dialog = $(dialogToastHtml) );
		$dialog.addClass('dialog-open');
	});

	// notice	
	$(document).on('touchstart', '.open-dialog-notice', function() {
		$('body').append( $dialog = $(dialogNoticeHtml) );
		$dialog.addClass('dialog-open');
	});
	$(document).on('touchstart', '.open-dialog-notice-bottom', function() {
		$('body').append( $dialog = $(dialogNoticeBottomHtml) );
		$dialog.addClass('dialog-open');
	});

	

    // 关闭弹窗
	$(document).on('touchstart', '.dialog-btn-close, .dialog-btn-cancel', function() {
		$('.dialog').addClass('dialog-close').removeClass('dialog-open');

		$('.dialog-content').on('webkitAnimationEnd MSAnimationEnd animationend', function() {
	    	console.log('content 运动结束');
	    	$(this).hide();
	    	$('.dialog').remove();
	    });	    
	});

});

