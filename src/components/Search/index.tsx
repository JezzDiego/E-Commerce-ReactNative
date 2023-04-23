import { Input, SearchIcon, Container } from "./styles";

const Search = () => {
  return (
    <Container>
      <Input placeholder="Pesquisar" />
      <SearchIcon name="account-search" size={24} />
    </Container>
  );
};

export default Search;
