import { useEffect, useState } from "react";
import { useModalProps } from "../utils";

export const useModal = ({ setEditTaskId }: useModalProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  const handleClose = () => {
    setMenuOpen(false);
    setEditTaskId(null);
  };

  return { menuOpen, setMenuOpen, handleClose };
};
