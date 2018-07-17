var ValidateTypes =
{
    RegexOrEmpty: 0,
    RegexOnly: 1
}
var CtrlAttrEnum =
{
    ValidateType: "check",
    Regex: "reg",
    ToolTip: "tip"
}
//***************************************************************************************************************************************************

//**Event
function BindToolTipHover(domObject) {
    $(domObject).hover(function () {
        if ($(domObject).attr(CtrlAttrEnum.ToolTip) != null) {
            if ($(domObject).attr(CtrlAttrEnum.ToolTip).length > 0) {
                //alert("a");
                $('#tipTable').css({ left: GetToolTipLeft(domObject) + 'px', top: GetToolTipTop(domObject) + 'px' });
                $('.contenImage').html($(domObject).attr('tip'));
                $('#tipTable').fadeIn("fast");
            }
        }
    }, function () { $('#tipTable').hide(); });

}
function BindCtrlFoBl(domObject) {
}

//**Display
function BindToolTipModel()
{
    $('body').append('<table id="tipTable" class="tableTip"><tr><td  class="leftImage"></td> <td class="contenImage" align="left"></td> <td class="rightImage"></td></tr></table>');
   // $(document).mouseout(function () { $('#tipTable').hide() });
}
function ShowRegexOnlyPass(control)
{
    control.removeClass('tooltipinputerr').addClass('tooltipinputok');
}
function ShowRegexOnlyMiss(control)
    {
        control.removeClass('tooltipinputok').addClass('tooltipinputerr');
    }
function ShowRegexOrEmptyPass(control)
    {
        control.removeClass('tooltipinputerr').addClass('tooltipinputok');
    }
function ShowRegexOrEmptyMiss(control)
    {
        control.removeClass('tooltipinputok').addClass('tooltipinputerr');
    }
function HideRegexOrEmptyPass(control)
    {
        control.removeClass('tooltipinputok').removeClass('tooltipinputerr');
}

function ShowValidateMiss(ctrls)
{
    ctrls.each(function () {
        $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');
    });
}
function ShowValidatePass(ctrls) {
    ctrls.each(function () {
        $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
    });
}
function HideValidateMsg(ctrls)
{
    function ShowErrorMsg(ctrls) {
        ctrls.each(function () {
            $(this).removeClass('tooltipinputok').removeClass('tooltipinputerr');
        });
    }
}
//**Attribute
function GetToolTipLeft(domObject) {
        return GetAbsoluteLeft(domObject) + 1;
    }
function GetToolTipTop(domObject) {
        return GetAbsoluteTop(domObject) + GetElementHeight(domObject);
    }
//**Custom
function GetAbsoluteLeft(domObject)
    {
        var o = domObject
        var oLeft = o.offsetLeft;
        while (o.offsetParent != null) {
            oParent = o.offsetParent;
            oLeft += oParent.offsetLeft;
            o = oParent;
        }
        return oLeft;
    }
function GetAbsoluteTop(domOject)
    {
        var o = domOject;
        oTop = o.offsetTop;
        while (o.offsetParent != null) {
            oParent = o.offsetParent;
            oTop += oParent.offsetTop;  // Add parent top position
            o = oParent;
        }
        return oTop;
    }
function GetElementWidth(domOject) {
        return domOject.offsetWidth;
    }
function GetElementHeight(domOject) {
        return domOject.offsetHeight;
    }
//**Interface*************************************************************************************************************************************************
function ValidateForm(ctrls) {
        //BindCtrlEvent(controls);
    return ValidateCtrls($(ctrls));
    }

function ValidateCtrls(controls)
    {
        var isNoneUnValidate = true;
        controls.each(function ()
        {
            var ctrl = $(this);
            if (ctrl.attr(CtrlAttrEnum.ValidateType) == ValidateTypes.RegexOnly)
            {
                var reg = new RegExp(ctrl.attr(CtrlAttrEnum.Regex));
                if (reg.test(ctrl.val()))
                { ShowRegexOnlyPass(ctrl); }
                else
                { ShowRegexOnlyMiss(ctrl);
                    isNoneUnValidate = false;
                }
            }
            else if (ctrl.attr(CtrlAttrEnum.ValidateType) == ValidateTypes.RegexOrEmpty)
            {
                if (ctrl.val() != "")
                {
                    var reg = new RegExp(ctrl.attr(CtrlAttrEnum.Regex));
                    if (reg.test(ctrl.val()))
                    { ShowRegexOrEmptyPass(ctrl);
                    }
                    else
                    { ShowRegexOrEmptyMiss(ctrl);
                        isNoneUnValidate = false;
                    }
                }
                else
                {
                    HideRegexOrEmptyPass(ctrl);
                }
            }
        });
        return isNoneUnValidate;
    }

function BindCtrlEvent(ctrls) {
        BindToolTipModel();
        $(ctrls).each(function () {
            var ctrl = $(this);
            BindToolTipHover(this);
            if (ctrl.attr(CtrlAttrEnum.ValidateType) != '')
            {
                ctrl.focus(function () {
                    $(this).removeClass('tooltipinputerr');
                }).blur(function () {
                    if ($(this).attr('toupper') == 'true') {
                        this.value = this.value.toUpperCase();
                    }
                    if ($(this).attr(CtrlAttrEnum.ValidateType) != '')
                    {

                        if ($(this).attr(CtrlAttrEnum.ValidateType) == ValidateTypes.RegexOrEmpty)
                        {
                            if ($(this).val() == '')
                            {
                                $(this).removeClass('tooltipinputerr').removeClass('tooltipinputok');
                            }
                            else
                            {
                                var thisReg = new RegExp($(this).attr(CtrlAttrEnum.Regex));
                                if (thisReg.test($(this).val()))
                                {
                                    $(this).removeClass('tooltipinputerr').addClass('tooltipinputok');
                                }
                                else
                                {
                                    $(this).removeClass('tooltipinputok').addClass('tooltipinputerr');
                                }
                            }
                        }
                        else if ($(this).attr(CtrlAttrEnum.ValidateType) == ValidateTypes.RegexOnly)
                        {
                            var thisReg = new RegExp($(this).attr(CtrlAttrEnum.Regex));
                            if (thisReg.test($(this).val())) {
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
}

//***************************************************************************************************************************************************

    //Bind the regular expression to validator..........
    function BindRegexString(validatorString, regexString) {
        var validatorStrings = "";
        if (validatorString != "") {
            validatorStrings = validatorString.split(":");
            for (i = 0; i < validatorStrings.length; i++) {
                $("#" + validatorStrings[i]).attr("reg", regexString);
            }
        }
    }

    function BindMoney(min, max, validatorString) {
        switch (arguments.length) {
            case 1: BindRegexString(arguments[0], '^(-)?(([1-9]{1}\\d{0,15})|([0]{1}))(\\.(\\d){1,2})?$'); break;
            case 2: BindRegexString(arguments[1], '^(-)?(([1-9]{1}\\d{0,' + arguments[0] - 1 + '})|([0]{1}))(\\.(\\d){1,2})?$'); break;
            case 3: BindRegexString(arguments[2], '^(-)?(([1-9]{1}\\d{' + arguments[0] - 1 + ',' + arguments[1] - 1 + '}))(\\.(\\d){1,2})?$'); break;
        }
    }

    //Bind un-sign integer.
    function BindUInt() {
        switch (arguments.length) {
            case 1: BindRegexString(arguments[0], '^[1-9]\\d{0,15}$'); break;
            case 2: BindRegexString(arguments[1], '^[1-9]\\d{0,' + arguments[0] - 1 + '}$'); break;
            case 3: BindRegexString(arguments[2], '^[1-9]\\d{' + arguments[0] - 1 + ',' + arguments[1] - 1 + '}$'); break;
            default: break;
        }
    }

    //Bind integer.
    function BindInt(validatorString) {
        BindRegexString(validatorString, '^-?\\d*$');
    }

    //Bind money
    function BindNumber(validatorString)
    {
        BindRegexString(validatorString,"^(-)?(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){1,2})?$");
    }

    //Bind decimal
    function BindDecimal(validatorString)
    {
        BindRegexString(validatorString, "^[0-9]+\\.[0-9]+$");
    }

    //Bind email.........
    function BindEmail(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.Email);
    }

    //Bind zipcode
    function BindZipcode(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.Zipcode);
    }

    //Bind mobile............
    function BindMobile(validatorString)
    {
        BindRegexString(validatorString, "^\\d{11,11}$");
    }

    //Bind idcard
    function BindIDCard(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.IDCard);
    }

    //Bind not empty
    function BindNotEmpty(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.NotEmpty);
    }

    //Bind chinese
    function BindChinese(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.Chinese);
    }

    //Bind url
    function BindUrl(validatorString)
    {
        vBindRegexString(validatorString, RegexEnum.Url);
    }

    //Bind tell (0511-4405222 or 021-87888822)...
    function BindTel(validatorString)
    {
        BindRegexString(validatorString, RegexEnum.Tel);
    }

    //Bind string...........
    function BindString() {
        switch (arguments.length) {
            case 1: BindRegexString(arguments[0], '^.{1,20}$'); break;
            case 2: BindRegexString(arguments[1], '^.{1,' + arguments[0] + '}$'); break;
            case 3: BindRegexString(arguments[2], '^.{' + arguments[0] + ',' + arguments[1] + '}$'); break;
            default: break;
        }
    }

    //Bind textarea...........
    function BindText() {
        switch (arguments.length) {
            case 1: BindRegexString(arguments[0], '^[\\s\\S]{50,}$'); break;
            case 2: BindRegexString(arguments[1], '^[\\s\\S]{1,' + arguments[0] + '}$'); break;
            case 3: BindRegexString(arguments[2], '^[\\s\\S]{' + arguments[0] + ',' + arguments[1] + '}$'); break;
            default: break;
        }
    }
    //Bind char
    function BindChar() {
        switch (arguments.length) {
            case 1: BindRegexString(arguments[0], '^.{1,65535}$'); break;
            case 2: BindRegexString(arguments[1], '^.{1,' + arguments[0] + '}$'); break;
            case 3: BindRegexString(arguments[2], '^.{' + arguments[0] + ',' + arguments[1] + '}$'); break;
            default: break;
        }
    }
    //Bind username..............
    function BindUsername(validatorString) {
        BindRegexString(arguments[0], '^[a-zA-Z]\\w{2,11}$');
    }

    //Bind date............
    function BindDate(validatorString) {
        BindRegexString(validatorString, '.');
    }

    //Bind time
    function BindTime(validatorString) {
        BindRegexString(validatorString, '.');
    }

    //Bind datetime
    function BindDateTime(validatorString) {
        BindRegexString(validatorString, '.');
    }

    //Bind qq............
    function BindQQ(validatorString) {
        BindRegexString(validatorString, RegexEnum.QQ);
    }

    //***************************************************************************************************************************************************

    //***************************************************************************************************************************************************

    var RegexEnum =
    {
        Bool: "^[true|false]$", /*  true or false   */
        Int: "^-?[1-9]\\d*$",   /*  -2,147,483,648 <= Int <= 2,147,483,647*/
        UInt: "^[1-9]\\d*$",    /*  0 < UInt <= 4294967294  */
        UIntOrZero: "^\\d+$",   /*  0 <= UIntOrZero  */
        Number: "^([+-]?)\\d*\\.?\\d+$",    //
        Float: "^([+-]?)\\d*\\.\\d+$",		///^(\d*\.)?\d+$/    "^(-?\\d+)(\\.\\d+)?$"��
        UFloat: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",     /*  0 < UFloat < 99999.99 */
        Decmal: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
        UDecmal: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
        Date:"^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$",
        Email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
        Color: "^[a-fA-F0-9]{6}$",
        Url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
        Chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",
        ASCII: "^[\\x00-\\xFF]+$",
        Zipcode: "^\\d{6}$",
        Mobile: "^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$",
        IPv4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip��ַ
        NotEmpty: "^\\S+$",
        Picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
        Rar: "(.*)\\.(rar|zip|7zip|tgz)$",
        Date: "",
        QQ: "^[1-9]\\d{4,10}$",
        Tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",
        Username: "^[a-zA-Z]\\w+$",
        Letter: "^[A-Za-z]+$",
        LetterU: "^[A-Z]+$",
        LetterL: "^[a-z]+$",
        IDCard: "^[1-9]([0-9]{14}|[0-9]{17})$"
    }
    //***************************************************************************************************************************************************
    var aCity = { 11: "����", 12: "���", 13: "�ӱ�", 14: "ɽ��", 15: "���ɹ�", 21: "����", 22: "����", 23: "������", 31: "�Ϻ�", 32: "����", 33: "�㽭", 34: "����", 35: "����", 36: "����", 37: "ɽ��", 41: "����", 42: "����", 43: "����", 44: "�㶫", 45: "����", 46: "����", 50: "����", 51: "�Ĵ�", 52: "����", 53: "����", 54: "����", 61: "����", 62: "����", 63: "�ຣ", 64: "����", 65: "�½�", 71: "̨��", 81: "���", 82: "����", 91: "����" }
    //***************************************************************************************************************************************************

    //id IDCard
    function isIDCard(sId) {
        var iSum = 0;
        var info = "";
        if (!/^\d{17}(\d|x)$/i.test(sId)) return "����������֤���Ȼ��ʽ����";
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) return "������֤�����Ƿ�";
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "���֤�ϵĳ������ڷǷ�";
        for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if (iSum % 11 != 1) return "����������֤�ŷǷ�";
        return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"��":"Ů") 
    }

    //short time (13:04:06)
    function isShortTime(str) {
        var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
        if (a == null) { return false }
        if (a[1] > 24 || a[3] > 60 || a[4] > 60) {
            return false;
        }
        return true;
    }

    //short date (2003-12-05)
    function isShortDate(str) {
        var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
    }

    //long time (2003-12-05 13:04:06)
    function isDateTime(str) {
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
    }