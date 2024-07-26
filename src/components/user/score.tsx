import { FC, useEffect, useRef } from "react";
import styled from "styled-components";

const NUMBERS = "0123456789";

export const Score = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

interface AnimatedScoreProps {
  score: string;
}
export const AnimatedScore: FC<AnimatedScoreProps> = ({ score }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let iteration = 0;
    const interval = setInterval(() => {
      if (!ref.current) return;
      ref.current.innerText = ref.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return score[index];
          }

          return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        })
        .join("");

      if (iteration >= score.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [score]);

  return <Score ref={ref}>{score}</Score>;
};
