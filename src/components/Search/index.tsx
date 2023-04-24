import { Input, SearchIcon, Container } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  return (
    <Container>
      <Input placeholder="Pesquisar" />
      <SearchIcon>
        <AntDesign name="search1" size={24} />
      </SearchIcon>
    </Container>
  );
};

export default Search;
