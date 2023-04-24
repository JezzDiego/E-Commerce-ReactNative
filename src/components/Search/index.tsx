import { Input, SearchIcon, Container } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Search = () => {
  return (
    <Container>
      <Input placeholder="Pesquisar" />
      <SearchIcon>
        <MaterialCommunityIcons name="shopping-search" size={24} />
      </SearchIcon>
    </Container>
  );
};

export default Search;
