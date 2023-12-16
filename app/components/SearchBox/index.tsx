import { Input, SearchIcon, Wrapper } from "./styles";

export default function SearchBox() {
  return (
    <Wrapper>
      <SearchIcon size={28} />
      <Input placeholder="Search..." />
    </Wrapper>
  );
}
