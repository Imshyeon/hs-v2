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
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  title: string;
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
              해당 스케줄을 삭제하시겠습니까?
            </ModalHeader>
            <ModalBody>
              <p>
                <strong>{title}</strong> 영구히 삭제하시려면 아래의 삭제 버튼을
                눌러주세요
              </p>
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
