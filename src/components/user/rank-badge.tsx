import { FC } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants/ui";

interface RankBadgeProps {
  rank: number;
}
export const RankBadge: FC<RankBadgeProps> = ({ rank }) => {
  return <Container rank={rank}>{rank}</Container>;
};

const Container = styled.div<Pick<RankBadgeProps, "rank">>`
  width: 1rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.675rem;
  font-weight: 600;
  border: 1px solid ${COLORS.white};
  position: absolute;
  bottom: 0;
  right: -0.5rem;
  ${({ rank }) => {
    switch (rank) {
      case 1: {
        return css`
          background-color: ${COLORS.gold[300]};
          color: ${COLORS.gold[700]};
        `;
      }
      case 2: {
        return css`
          background-color: ${COLORS.silver[300]};
          color: ${COLORS.silver[700]};
        `;
      }
      case 3: {
        return css`
          background-color: ${COLORS.bronze[300]};
          color: ${COLORS.bronze[700]};
        `;
      }
      default: {
        return css`
          background-color: ${COLORS.blue[700]};
          color: ${COLORS.white};
        `;
      }
    }
  }};
`;
