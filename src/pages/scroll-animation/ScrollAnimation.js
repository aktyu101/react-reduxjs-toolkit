import { useRef } from "react";
import styled from "@emotion/styled";
import { inView, motion, useInView } from "framer-motion";

const items = [
  {
    text: "aaaaaa",
    bgColor: "#673eb7",
    initial: {
      opacity: 0,
      scale: 0.2,
      x: -200,
    },
    animate: (isInView) => ({
      opacity: isInView ? 1 : 0,
      X: isInView ? 0 : -200,
    }),
    transition: {
      duration: 1.5,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  {
    text: "bbbbbb",
    bgColor: "#2196f3",
    initial: {
      opacity: 0,
      rotate: 360,
    },
    animate: (isInView) => ({
      opacity: isInView ? 1 : 0,
      rotate: isInView ? 0 : 360,
    }),
    transition: {
      duration: 1.5,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  {
    text: "cccccc",
    bgColor: "#009688",
    initial: {
      opacity: 0,
      scale: 0.2,
    },
    animate: (isInView) => ({
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0.2,
    }),
    transition: {
      duration: 1.5,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
];
export default function ScrollAnimation() {
  return (
    <ul>
      {items.map(({ text, bgColor, initial, animate, transition }) => {
        return (
          <ListItem
            text={text}
            bgColor={bgColor}
            initial={initial}
            animate={animate}
            transition={transition}
          />
        );
      })}
    </ul>
  );
}

function ListItem({ text, bgColor, initial, animate, transition }) {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <StyledItemDeep bgColor={bgColor}>
      <motion.span
        ref={ref}
        initial={initial}
        animate={animate(isInView)}
        transition={transition}
      >
        {text}
      </motion.span>
    </StyledItemDeep>
  );
}
//animation 영역 잡을 땐 transform 영역 사용

const StyledItemDeep = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 4em;
`;
