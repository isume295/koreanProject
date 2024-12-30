import MyCalendar from "@/src/components/blocks/calendar/Calendar";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import Equipment from "../../../../(회원 관리)/Membership-Management/components/membershipManagement/Equipment";

const ManualCalendar = () => {

  return (
    <div>
      <div className="mt-[18px]">
        <MyCalendar />
      </div>
    </div>
  );
};

export default ManualCalendar;
