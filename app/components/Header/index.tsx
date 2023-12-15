import SearchBox from "../SearchBox";
import {
  HeaderContainer,
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
      <HeaderContainer>
        <SubtitleContainer>
          <PurpleSquare />
          <Subtitle>Payout history</Subtitle>
        </SubtitleContainer>
        <SearchBox />
      </HeaderContainer>
    </Wrapper>
  );
}
