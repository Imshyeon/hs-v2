import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalComponent({
  isOpen,
  onClose,
  onContinue,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  const { onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        onClose={onClose}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              (스케줄/아티클) 삭제, 편집?
            </ModalHeader>
            <ModalBody>
              {/* <p>
                  (스케줄/아티클)을 삭제/편집 하실 경우 
                </p> */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                취소
              </Button>
              <Button color="primary" onPress={onContinue}>
                계속
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
