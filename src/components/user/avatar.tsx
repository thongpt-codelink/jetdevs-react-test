import styled from "styled-components";
import { COLORS, STYLES } from "../../constants/ui";
import { RankBadge } from "./rank-badge";
import { FC } from "react";

export const Avatar = styled.img`
  height: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${COLORS.white};
  ${STYLES.boxShadow}
`;

const AvatarContainer = styled.div`
  position: relative;
`;

interface AvatarWithRankBadgeProps {
  avatarUrl: string;
  name: string;
  rank: number;
}
export const AvatarWithBadge: FC<AvatarWithRankBadgeProps> = ({
  avatarUrl,
  name,
  rank,
}) => {
  return (
    <AvatarContainer>
      <Avatar src={avatarUrl} alt={name} />
      <RankBadge rank={rank} />
    </AvatarContainer>
  );
};
