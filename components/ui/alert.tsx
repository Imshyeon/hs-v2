import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Alert({
  message,
  status,
}: {
  message: string;
  status: "success" | "danger" | "warning";
}) {
  const [remaingTime, setRemainingTime] = useState<number>(3);
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1 / 2);
    }, 1000);
  }, []);

  return (
    <Modal
      className="w-1/5 h-auto absolute top-0 right-0"
      isOpen={remaingTime <= 0 ? false : true}
      size="lg"
      backdrop="transparent"
      hideCloseButton={true}
    >
      <ModalContent>
        <ModalBody>
          <p className={`px-4 py-2 text-center text-${status}`}>
            {message ||
              "Make beautiful websites regardless of your design experience."}
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
