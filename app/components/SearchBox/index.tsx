import { ChangeEvent, useState } from "react";
import { Input, SearchIcon, Wrapper } from "./styles";

interface ISearchBoxProps {
  search?: string;
  onChangeSearch: (value: string) => void;
}

export default function SearchBox({ search, onChangeSearch }: ISearchBoxProps) {
  const [input, setInput] = useState(search);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
    onChangeSearch(event.target.value);
  }

  return (
    <>
      <Wrapper>
        <SearchIcon size={28} />
        <Input
          placeholder="Search..."
          value={input}
          onChange={handleInputChange}
        />
      </Wrapper>
    </>
  );
}
