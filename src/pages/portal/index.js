import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom"; //dom 요소 제어
import { motion, AnimatePresence } from "framer-motion";

export default function Portal() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleMoveTooltip = (event) => {
    console.log(event);
  };
  return (
    <Container>
      <div>
        <button
          onMouseMove={handleMoveTooltip}
          style={{ width: "150px", height: "50px" }}
        >
          button
        </button>
      </div>
      <div>
        <ClickModalBtn onClick={() => setModalOpen(true)}>
          Modal open
        </ClickModalBtn>
        <AnimatePresence>
          {modalOpen && (
            <PortalModal key="modal" onCloseModal={handleCloseModal} />
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}

const PortalModal = ({ onCloseModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log("mounted");
    return () => {
      document.body.style.overflow = "auto";
      console.log("destroy");
    };
  }, []);
  return createPortal(
    <StyledModalContainer
      initial={{
        background: " rgba(0, 0, 0, 0)",
      }}
      animate={{
        background: " rgba(0, 0, 0, 0.5)",
      }}
      transition={{
        duration: 5,
      }}
      exit={{
        background: " rgba(0, 0, 0, 0)",
      }}
    >
      <StyledModal
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
      >
        portal
        <br />
        <button onClick={onCloseModal}>close</button>
      </StyledModal>
    </StyledModalContainer>,
    document.body
  );
};

const StyledModalContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled(motion.div)`
  width: 500px;
  height: 300px;
  background-color: #fff;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 3000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ClickModalBtn = styled.button`
  width: 200px;
  height: 50px;
`;

//portal
//motion
//animationpresence
