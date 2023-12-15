import { Input, SearchIcon, Wrapper } from "./styles";

export default function SearchBox() {
  return (
    <Wrapper>
      <SearchIcon size={32} />
      <Input />
    </Wrapper>
  );
}
