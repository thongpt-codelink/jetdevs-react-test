import styled from "styled-components";
import { FC, useEffect, useRef } from "react";
import { IDatum } from "../../types/data";
import { sortData } from "../../helpers/data";
import { BREAKPOINTS, COLORS, STYLES } from "../../constants/ui";

const ROW_HEIGHT_IN_REM = 3;
const BORDER_RADIUS = "1rem";

interface DataTableProps {
  data: IDatum[];
  initData: IDatum[];
}
export const DataTable: FC<DataTableProps> = ({ data = [], initData = [] }) => {
  const itemsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const sortedData = sortData(data);
    sortedData.forEach(({ userId }, idx) => {
      if (!itemsRef.current?.[userId]) return;
      itemsRef.current[userId]!.style.top = `${idx * ROW_HEIGHT_IN_REM}rem`;
    });
  }, [data]);

  return (
    <>
      <Container height={`${data.length * ROW_HEIGHT_IN_REM}rem`}>
        {initData.map(({ userId, score, displayName, picture }, idx) => {
          return (
            <Row
              height={`${ROW_HEIGHT_IN_REM}rem`}
              top={`${ROW_HEIGHT_IN_REM * idx}rem`}
              key={userId}
              ref={(ele) => (itemsRef.current[userId] = ele)}
            >
              <Cell flex="2">
                <DisplayName>{displayName}</DisplayName>
              </Cell>
              <Cell flex="1" justifyContent="flex-end" gap="0.5rem">
                <span>{score}</span>
                <HelperText>points</HelperText>
              </Cell>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

const HelperText = styled.span`
  color: ${COLORS.neutral[400]};
  font-weight: 500;
  display: none;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: inline-block;
  }
`;

const DisplayName = styled.span`
  font-weight: 600;
`;

interface ContainerProps {
  height: string;
}
const Container = styled.div<ContainerProps>`
  position: relative;
  height: fit-content;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: ${BORDER_RADIUS};
  ${STYLES.boxShadow};
`;

interface CellProps {
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}
export const Cell = styled.div<CellProps>`
  padding: 0.5rem 1rem;
  flex: ${({ flex }) => flex};
  padding-top: auto;
  padding-bottom: auto;
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap ?? "1rem"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

interface RowProps {
  height: string;
  top: string;
}
const Row = styled.div<RowProps>`
  &:hover {
    background-color: ${COLORS.hovering};
    ${Cell} {
      color: ${COLORS.white};
    }
  }
  &:first-child {
    border-top-right-radius: ${BORDER_RADIUS};
    border-top-left-radius: ${BORDER_RADIUS};
  }
  &:last-child {
    border-bottom-right-radius: ${BORDER_RADIUS};
    border-bottom-left-radius: ${BORDER_RADIUS};
  }
  user-select: none;
  position: absolute;
  display: flex;
  width: 100%;
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  transition: top;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 200ms;
  border-bottom: 1px solid ${COLORS.neutral[300]};
`;
