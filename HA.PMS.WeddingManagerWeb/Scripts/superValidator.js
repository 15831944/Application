//***********************************************************
//if the attribute of control check="1",the value of the TextBox is allowed null,if user input data that it will validate by RegExp.
//if the attribute of control check="2",it will validate by RegExp direct.
//***********************************************************
//Get All the lable which need to validate
(function($){
	$(document).ready(function(){
		$('select[tip],select[check],input[tip],input[check],textarea[tip],textarea[check]').tooltip();
	});
})(jQuery);

(function ($) {
    $.fn.tooltip = function (options) {
        var getthis = this;
        var opts = $.extend({}, $.fn.tooltip.defaults, options);
        //Create a prompt box
        $('body').append('<table id="tipTable" class="tableTip"><tr><td  class="leftImage"></td> <td class="contenImage" align="left"></td> <td class="rightImage"></td></tr></table>');
        //��Move the mouse to hide just created prompt dialog box
        $(document).mouseout(function () { $('#tipTable').hide() });

        this.each(function () {
            if ($(this).attr('tip') != '') {
                $(this).mouseover(function () {
                    $('#tipTable').css({ left: $.getLeft(this) + 'px', top: $.getTop(this) + 'px' });
                    $('.contenImage').html($(this).attr('tip'));
                    $('#tipTable').fadeIn("fast");
                },
                function () {
                    $('#tipTable').hide();
                });
            }
            if ($(this).attr('check') != '') {

                $(this).focus(function () {
                    $(this).removeClass('tooltipinputerr');
                }).blur(function () {
                    if ($(this).attr('toupper') == 'true') {
                        this.value = this.value.toUpperCase();
                    }
                    if ($(this).attr('check') != '') {

                        if ($(this).attr('check') == "1") {


                            if ($(this).attr('value') == null) {

                                $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                            } else {

                                var thisReg = new RegExp($(this).attr('reg'));
                                if (thisReg.test(this.value)) {
                                    $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                                }
                                else {
                                    $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');
                                }

                            }
                        }
                        if ($(this).attr('check') == "2") {
                            var thisReg = new RegExp($(this).attr('reg'));
                            if (thisReg.test(this.value)) {
                                $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                            }
                            else {
                                $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');
                            }
                        }
                    }

                });
            }
        });
        if (opts.onsubmit) {
            $('form').submit(function () {
                var isSubmit = true;
                var ReturnValue = true;
                getthis.each(function () {
                    if ($(this).attr('check') == "1") {
                        if ($(this).attr('value') == null) {

                            $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                        } else {

                            var thisReg = new RegExp($(this).attr('reg'));
                            if (thisReg.test(this.value)) {
                                $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                                isSubmit = true;
                                
                            }
                            else {
                                $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');
                                isSubmit = false;
                                $(this).focus();
                                ReturnValue = false;
                            }
                        }  
                    }
                    if ($(this).attr('check') == "2") {
                        

                        var thisReg = new RegExp($(this).attr('reg'));
                        if (thisReg.test(this.value) && $(this).val() != "") {
                            $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                             
                        }
                        else {
                            $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');

                            isSubmit = false;
                            $(this).focus();
                            ReturnValue = false;
 
                        }
                    }
                });

    
                if (ReturnValue)
                {
                    return true;
                } else
                {
                    return false;
                }
           
            });
        }
    };

    $.extend({
        getWidth: function (object) {
            return object.offsetWidth;
        },

        getLeft: function (object) {
            var go = object;
            var oParent, oLeft = go.offsetLeft;
            while (go.offsetParent != null) {
                oParent = go.offsetParent;
                oLeft += oParent.offsetLeft;
                go = oParent;
            }
            return oLeft;
        },

        getTop: function (object) {
            var go = object;
            var oParent, oTop = go.offsetTop;
            while (go.offsetParent != null) {
                oParent = go.offsetParent;
                oTop += oParent.offsetTop;
                go = oParent;
            }
            return oTop + $(object).height() + 5;
        },

        onsubmit: true
    });
    $.fn.tooltip.defaults = { onsubmit: true };
})(jQuery);

//***************************************************************************************************************************************************
//The label attribute set expressions using JQuery function
//Incoming label group ID must be "name1 name2: name3" separated by ':' delimited.

//positive integer
function CheckPositiveInteger(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
		    $("#" + validatorStrings[i]).attr("reg", "^[1-9]\\d*$");
		}
	}
}

//integer
function CheckInteger(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", "^-?[1-9]\\d*$");
        }
    }
}

//��������Ҫ�����֤�ı�ǩ��������������ʽ
function CheckMoney(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg","^(-)?(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){1,2})?$");
		}
	}
}

//��������Ҫ��������֤�ı�ǩ��������������ʽ
function CheckFloat(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg","^[0-9]+\\.[0-9]+$");
		}
	}
}

//��������Ҫ�����ʼ���֤�ı�ǩ��������������ʽ
function CheckEMail(validatorString)
{
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$");
        }
    }
}

//��������Ҫ�ʱ���֤�ı�ǩ��������������ʽ
function CheckZipcode(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg","^\\d{6}$");
		}
	}
}

//��������Ҫ�ֻ���֤�ı�ǩ��������������ʽ
function CheckMobile(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
		    $("#" + validatorStrings[i]).attr("reg", "^(13|15|18)[0-9]{9}$");
		    //^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$
		}
	}
}

//��������Ҫ���֤��֤�ı�ǩ��������������ʽ
function CheckID(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg","^[1-9]([0-9]{14}|[0-9]{17})$");
		}
	}
}

//��������Ҫ��¼�ʺ���֤�ı�ǩ��������������ʽ
function CheckUserID(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg","^\\w+$");
		}
	}
}

//��������Ҫ�ǿ���֤�ı�ǩ��������������ʽ
function CheckEmpty(validatorString)
{
	
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
			$("#"+validatorStrings[i]).attr("reg",'.*\\S.*');
		}
	}
}

//��������Ҫ������֤�ı�ǩ��������������ʽ
function CheckChinese(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
		    $("#" + validatorStrings[i]).attr("reg", "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$");
		}
	}
}

//��������ҪURL��֤�ı�ǩ��������������ʽ
function CheckUrl(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
		    $("#" + validatorStrings[i]).attr("reg", "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$");
		}
	}
}

//��֤������ƥ����ڵ绰����(0511-4405222 �� 021-87888822) ��
function CheckTell(validatorString)
{
	var validatorStrings="";
	if(validatorString!="")
	{
		validatorStrings=validatorString.split(":");
		for(i=0;i<validatorStrings.length;i++)
		{
		    $("#" + validatorStrings[i]).attr("reg", ".");
		    //\\d{3}-\\d{8}|\\d{4}-\\d{7}
		}
	}
}

//������
function CheckDate(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
            ////^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$
            //// /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
            ///^((((((0[48])|([13579][26])|([2468][048]))00)|([0-9][0-9]((0[48])|([13579][26])|([2468][048]))))-02-29)|(((000[1-9])|(00[1-9][0-9])|(0[1-9][0-9][0-9])|([1-9][0-9][0-9][0-9]))-((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30))|(((0[1-9])|(1[0-2]))-((0[1-9])|(1[0-9])|(2[0-8]))))))$/
        }
    }
}

//��֤��ʱ��
function CheckTime(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
            //  /^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/
            // /^(\d{2,2})(:)?(\d{2,2})\2(\d{2,2})$/
        }
    }
}

//��֤��ʱ��datatime
function CheckDateTime(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
            // ^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$
        }
    }
}

//��֤QQ
function CheckQQ(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", "^[1-9]\d{4,9}$");
            //^[1-9]*[1-9][0-9]*$
        }
    }
}

//validate the name of chinese.e.g ë�󶫣����������˼
function CheckName(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".*\\S.*");
            //^[\u4E00-\u9FA5]{2,5}(?:��[\u4E00-\u9FA5]{2,5})*$
            //^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$"
        }
    }
}

//��֤��ַ
function CheckAddress(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//��֤��������
function CheckSourceName(validatorString) {
    debugger;
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".*\\S.*");
        }
    }
}

//��֤���ı� 20�ַ�
function CheckShortText(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//��֤�ı� 200���ַ�
function CheckText(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//��֤�ı�
function CheckTextArea(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//��֤΢��
function CheckWeibo(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//��֤΢��
function CheckWeiXin(validatorString) {
    var validatorStrings = "";
    if (validatorString != "") {
        validatorStrings = validatorString.split(":");
        for (i = 0; i < validatorStrings.length; i++) {
            $("#" + validatorStrings[i]).attr("reg", ".");
        }
    }
}

//***************************************************************************************************************************************************