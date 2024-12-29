import ChatScreen from "@/src/components/blocks/chat/ChatScreen";
import React from "react";

const App = () => {
  return (
    <div className="w-[678px] bg-grey-font">
      <ChatScreen senderName={"장비사업자명"} profileName={"발주자명"} />
    </div>
  );
};

export default App;
