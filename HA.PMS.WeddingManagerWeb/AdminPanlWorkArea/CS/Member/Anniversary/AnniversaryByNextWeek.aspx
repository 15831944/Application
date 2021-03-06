﻿<%@ Page Title="" Language="C#" MasterPageFile="~/AdminPanlWorkArea/Master/PopuMaster.Master" AutoEventWireup="true" CodeBehind="AnniversaryByNextWeek.aspx.cs" Inherits="HA.PMS.WeddingManagerWeb.AdminPanlWorkArea.CS.Member.Anniversary.AnniversaryByNextWeek" %>
<%@ Register Assembly="HA.PMS.EditoerLibrary" Namespace="HA.PMS.EditoerLibrary" TagPrefix="cc2" %>
<%@ Register Assembly="HA.PMS.ToolsLibrary" Namespace="HA.PMS.ToolsLibrary" TagPrefix="cc1" %>
<%@ Register Src="~/AdminPanlWorkArea/Control/MessageBoardforall.ascx" TagPrefix="HA" TagName="MessageBoardforall" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/Scripts/trselection.js"></script>
    <script type="text/javascript">
        function AddContent(CustomerID) {
            var Url = "/AdminPanlWorkArea/CS/Member/Anniversary/AnniversaryCreate.aspx?CustomerID=" + CustomerID + "&Type=2";
            showPopuWindows(Url, 765, 200, "#SelectEmpLoyeeBythis");
            $("#SelectEmpLoyeeBythis").click();
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <a href="#" id="SelectEmpLoyeeBythis" style="display: none;"></a>
    <div>
        <div class="widget-box">
            <div class="widget-box" style="height: 60px; border: 0px;">
                <table class="queryTable" style="border-bottom: 1px solid #c7d5de;">
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>新人姓名：<asp:TextBox ID="txtBride" runat="server" MaxLength="10"></asp:TextBox></td>
                                    <td>联系电话：<asp:TextBox ID="txtBrideCellPhone" runat="server" MaxLength="20"></asp:TextBox></td>
                                    <td>酒店：<cc2:ddlHotel ID="ddlHotel" runat="server"></cc2:ddlHotel></td>
                                    <td><asp:Button ID="btnQuery" OnClick="BinderData" Height="27" CssClass="btn btn-primary" runat="server" Text="查询" /></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <br />
            <table class="table table-bordered table-striped table-select">
                <thead>
                    <tr id="trContent">
                        <th>订单编号</th>
                        <th>新人姓名</th>
                        <th>联系电话</th>
                        <th>婚期</th>
                        <th>酒店</th>
                        <th>婚礼顾问</th>
                        <th>策划师</th>
                        <th>生日</th>
                        <th>服务方式</th>
                        <th>服务完成时间</th>
                        <th>补充记录</th>
                        <th>服务人员</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <asp:Repeater ID="repCustomer" runat="server">
                        <ItemTemplate>
                             <tr skey='<%#Eval("CustomerID") %>'>
                                <td style="word-break: break-all;"><%#Eval("OrderCoder") %></td>
                                <td style="word-break: break-all;"><a target="_blank" href="../CustomerDetails.aspx?CustomerID=<%#Eval("CustomerID")%>"><%#Eval("Bride") %></a></td>
                                <td style="word-break: break-all;"><%#Eval("BrideCellPhone") %></td>
                                <td style="word-break: break-all;"><%#ShowShortDate(Eval("PartyDate")) %></td>
                                <td style="word-break: break-all;"><%#Eval("Wineshop") %></td>
                                <td style="word-break: break-all;"><%#GetOrderEmpLoyeeName(Eval("OrderID")) %></td>
                                <td style="word-break: break-all;"><%#GetQuotedEmpLoyeeName(Eval("OrderID")) %></td>
                                <td style="word-break: break-all;"><%#ShowShortDate(Eval("BrideBirthday")) %></td>
                                <td style="word-break: break-all;"><%#GetMember(Eval("CustomerID")).ServiceType %></td>
                                <td><%#ShowShortDate(GetMember(Eval("CustomerID")).CreateDate) %></td>
                                <td><%#GetMember(Eval("CustomerID")).ServiceContent %></td>
                                <td><%#GetEmployeeName(GetMember(Eval("CustomerID")).CreateEmployee) %></td>
                                <td style="word-break: break-all;"><a href="#" class="btn btn-primary btn-mini" onclick="AddContent(<%#Eval("CustomerID")%>);" <%#LockMemberByYear(DateTime.Now,Eval("CustomerID"),2) %>>添加服务</a></td>
                            </tr>
                        </ItemTemplate>
                    </asp:Repeater>
                </tbody>
            </table>
            <cc1:AspNetPagerTool ID="CtrPageIndex" PageSize="10" AlwaysShow="true" OnPageChanged="BinderData" runat="server"></cc1:AspNetPagerTool>
            <HA:MessageBoardforall runat="server" ID="MessageBoardforall" />
        </div>
    </div>
</asp:Content>
