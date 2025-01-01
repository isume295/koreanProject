import React from "react";
import Preview from "../components/Preview";
import WaitForShipmentModal from "../components/WaitForShipmentModal";

const PreviewDetails = () => {
  return (
    <div>
      <Preview />
      <WaitForShipmentModal />
    </div>
  );
};

export default PreviewDetails;
