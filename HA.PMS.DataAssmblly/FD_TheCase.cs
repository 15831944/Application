//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace HA.PMS.DataAssmblly
{
    using System;
    using System.Collections.Generic;
    
    public partial class FD_TheCase
    {
        public int CaseID { get; set; }
        public string CaseName { get; set; }
        public string CaseHotel { get; set; }
        public string CaseStyle { get; set; }
        public string CaseGroom { get; set; }
        public string CaseDetails { get; set; }
        public string CasePath { get; set; }
        public string CaseSmallPath { get; set; }
        public Nullable<int> CaseOrder { get; set; }
        public Nullable<int> PlannerID { get; set; }
        public Nullable<int> DesignEmployee { get; set; }
        public Nullable<int> CreateEmployee { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> DepartmentID { get; set; }
    }
}