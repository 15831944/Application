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
    
    public partial class FD_FourGuardian
    {
        public int GuardianId { get; set; }
        public string GuardianName { get; set; }
        public int GuardianTypeId { get; set; }
        public int GuardianLevenId { get; set; }
        public System.DateTime StarTime { get; set; }
        public string CellPhone { get; set; }
        public Nullable<decimal> CooperationPrice { get; set; }
        public Nullable<int> Skin { get; set; }
        public Nullable<bool> IsDelete { get; set; }
        public string Explain { get; set; }
        public string PersonalDetails { get; set; }
        public string Email { get; set; }
        public string HeadImgPath { get; set; }
        public string AccountInformation { get; set; }
        public Nullable<int> SupplyCount { get; set; }
        public Nullable<int> ErrorCount { get; set; }
        public Nullable<decimal> SalePrice { get; set; }
        public Nullable<int> FourSort { get; set; }
        public string BankName { get; set; }
        public string AccountPayer { get; set; }
    
        public virtual FD_GuardianType FD_GuardianType { get; set; }
        public virtual FD_GuradianLeven FD_GuradianLeven { get; set; }
    }
}