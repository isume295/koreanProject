import React from "react";
import {
  Modal as NModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Button } from "../buttons/Button";

const Modal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <NModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Coming Soon: Exciting New Projects!
            </ModalHeader>
            <ModalBody>
              <p>
                Big things are on the way! We’re gearing up to launch a series
                of innovative projects designed to inspire and impress. From
                cutting-edge technology to fresh, bold ideas, there’s something
                for everyone. Stay tuned for updates, we cant wait to share
                whats next!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={onClose}
                label={""}
                backgroundColor={""}
                borderRadius={""}
                textStyle={""}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NModal>
  );
};

export default Modal;
