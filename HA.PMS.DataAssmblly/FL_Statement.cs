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
    
    public partial class FL_Statement
    {
        public int StatementID { get; set; }
        public string Name { get; set; }
        public Nullable<int> RowType { get; set; }
        public Nullable<int> TypeID { get; set; }
        public string TypeName { get; set; }
        public Nullable<int> CreateEmployee { get; set; }
        public Nullable<int> CustomerID { get; set; }
        public Nullable<int> DispatchingID { get; set; }
        public Nullable<decimal> SumTotal { get; set; }
        public string Finishtation { get; set; }
        public Nullable<decimal> PayMent { get; set; }
        public Nullable<decimal> NoPayMent { get; set; }
        public string Remark { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> OrderId { get; set; }
        public Nullable<int> QuotedId { get; set; }
        public Nullable<int> SupplierID { get; set; }
        public Nullable<int> CostSumId { get; set; }
        public string Content { get; set; }
        public Nullable<int> Year { get; set; }
        public Nullable<int> Month { get; set; }
        public string SupplierName { get; set; }
        public Nullable<decimal> PrePayMent { get; set; }
    }
}