import {
  PurpleSquare,
  Subtitle,
  SubtitleContainer,
  Title,
  Wrapper,
} from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <Title>Payouts</Title>
      <SubtitleContainer>
        <PurpleSquare />
        <Subtitle>Payout history</Subtitle>
      </SubtitleContainer>
    </Wrapper>
  );
}
