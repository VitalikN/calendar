import React, { useEffect, useRef } from "react";
import { ModalContainer, ModalContent } from "./Modal.styled";
import { IoClose } from "react-icons/io5";
import AddTask from "../AddTask/AddTask";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedDate }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <AddTask onClose={onClose} selectedDate={selectedDate} />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
