﻿<%@ Page Title="" Language="C#" MasterPageFile="~/AdminPanlWorkArea/Master/MainMaster.Master" AutoEventWireup="true" CodeBehind="CS_DegreeOfSatisfactionNotStar.aspx.cs" Inherits="HA.PMS.WeddingManagerWeb.AdminPanlWorkArea.CS.CS_DegreeOfSatisfactionNotStar" %>

<%@ Register Assembly="HA.PMS.EditoerLibrary" Namespace="HA.PMS.EditoerLibrary" TagPrefix="cc2" %>

<%@ Register Assembly="HA.PMS.ToolsLibrary" Namespace="HA.PMS.ToolsLibrary" TagPrefix="cc1" %>
<%@ Register Src="~/AdminPanlWorkArea/Control/MessageBoard.ascx" TagPrefix="HA" TagName="MessageBoard" %>
<%@ Register Src="~/AdminPanlWorkArea/Control/MessageBoardforall.ascx" TagPrefix="HA" TagName="MessageBoardforall" %>


<%@ Register Src="../Control/DateRanger.ascx" TagName="DateRanger" TagPrefix="uc1" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .centerTxt {
            width: 85px;
            height: 20px;
        }

        .centerSelect {
            width: 98px;
            height: 30px;
        }
    </style>
    <script type="text/javascript">

        $(document).ready(function () {
            //$("#<//%=txtPartyDateStar.ClientID%>").datepicker({ dateFormat: 'yy-mm-dd ' });
            // $("#<//%=txtPartyDateEnd.ClientID%>").datepicker({ dateFormat: 'yy-mm-dd ' });


            $("#trContent th").css({ "white-space": "nowrap" });

            $(".queryTable").css("margin-left", "15px");//98    24
            $(".queryTable td").each(function (indexs, values) {


                if (indexs != 3) {
                    $(this).css({ "border": "0", "vertical-align": "middle" }).after("&nbsp;&nbsp;&nbsp;&nbsp;");
                }
                if (indexs == $(".queryTable td").length - 1) {
                    $(this).css("vertical-align", "top");
                }

            });

            $(".queryTable2").css({ "margin-left": "15px", "margin-top": "5px" });//98    24
            $(".queryTable2 td").each(function (indexs, values) {


                if (indexs != 2) {
                    $(this).css({ "border": "0", "vertical-align": "middle" }).after("&nbsp;&nbsp;&nbsp;&nbsp;");
                }
                if (indexs == $(".queryTable2 td").length - 1) {
                    $(this).css("vertical-align", "top");
                }

            });

            $(":text").each(function (indexs, values) {
                $(this).addClass("centerTxt");
            });
            $("select").addClass("centerSelect");

            $("html").css({ "overflow-x": "hidden" });
            $("html,body").css({ "background-color": "transparent" });
            if (window.screen.width >= 1280 && window.screen.width <= 1366) {

                $("#queryBox").css({ "height": "45px" });
            }
        });

        function ShowThis(CustomerID) {
            window.parent.ShowPopuWindow("/AdminPanlWorkArea/QuotedPrice/QuotedPriceShowOrPrint.aspx?CustomerID=" + CustomerID + "&NeedPopu=1", 1280, 1500);
            return false;
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="overflow-x: auto;">
        <div class="widget-box">



            <div class="widget-box" id="queryBox" style="height: 40px; border: 0px; font-size: 10pt;">


                <table class="queryTable" style="border-bottom: 1px solid #c7d5de;">
                    <tr>
                        <td>
                            <table>
                                <tr>

                                    <td>姓名:<asp:TextBox ID="txtBride" runat="server" MaxLength="10" ToolTip="按新娘姓名查询 第一个名字为新娘姓名"></asp:TextBox>
                                    </td>
                                    <td>电话:<asp:TextBox ID="txtBrideCellPhone" runat="server" MaxLength="20"></asp:TextBox>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                        <uc1:DateRanger ID="DateRanger" runat="server" Title="婚期" />
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                        <asp:Button CssClass="btn btn-primary" Height="27" ID="btnCustomerQuery" OnClick="btnCustomerQuery_Click" runat="server" Text="查找" />
                                        <cc2:btnReload runat="server" ID="btnReload" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>


            </div>
            <br />
            <br />
            <table class="table table-bordered table-striped">
                <thead>
                    <tr id="trContent">
                        <th>姓名</th>
                        <th>电话</th>
                        <th>婚期</th>
                        <th>酒店</th>
                        <th>婚礼顾问</th>
                        <th>策划师</th>
                        <th>已收款</th>
                        <th>订单金额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <asp:Repeater ID="rptDegree" OnItemCommand="rptDegree_ItemCommand" runat="server">

                        <ItemTemplate>
                            <tr>
                                <asp:HiddenField ID="hfCustomerId" Value='<%#Eval("CustomerID") %>' runat="server" />
                                <td><a href="/AdminPanlWorkArea/CS/Member/CustomerDetails.aspx?CustomerID=<%#Eval("CustomerID") %>" target="_blank"><%#ShowCstmName(Eval("Bride"),Eval("Groom")) %></a></td>
                                <td style="word-break: break-all;"><%#Eval("BrideCellPhone") %></td>
                                <td><%#ShowPartyDate( Eval("PartyDate")) %></td>
                                <td><%#Eval("Wineshop") %></td>
                                <td><%#GetOrderEmpLoyeeName(GetOrderIdByCustomerID(Eval("CustomerID"))) %></td>
                                <td><%#GetQuotedEmpLoyeeName(GetOrderIdByCustomerID(Eval("CustomerID"))) %></td>
                                <td><%#GetQuotedDispatchingFinishMoney(Eval("CustomerID")) %></td>
                                <td><%#Eval("FinishAmount") %></td>
                                <td>
                                    <a href="CS_DegreeOfSatisfactionCreate.aspx?CustomerID=<%#Eval("CustomerID")%>" class="btn btn-primary">调查</a>
                                    <a href="#" class="btn btn-success" onclick="ShowThis(<%#Eval("CustomerID") %>);">查看订单</a>
                                </td>
                            </tr>
                        </ItemTemplate>
                    </asp:Repeater>
                </tbody>
            </table>
            <cc1:AspNetPagerTool ID="DegreePager" OnPageChanged="DegreePager_PageChanged" runat="server"></cc1:AspNetPagerTool>
            <HA:MessageBoardforall runat="server" ID="MessageBoardforall" />
        </div>
    </div>
</asp:Content>
