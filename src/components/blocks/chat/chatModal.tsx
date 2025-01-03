import React from "react";
import ChatScreen from "./ChatScreen";
import Modal from "../Modals/Modal";

const ChatModal = ({
  isOpen,
  onOpenChange,
  senderName,
  profileName,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  senderName: string;
  profileName: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      closeButton={true}
      modalWidthInPercent="max-w-[50%]"
      paddingHorizontal="px-0 py-0"
      footer={false}
    >
      <div className=" w-full flex justify-center items-center pt-[40px] pb-[0px]">
        <ChatScreen senderName={senderName} profileName={profileName} />
      </div>
    </Modal>
  );
};

export default ChatModal;
