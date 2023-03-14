import {
  ImageContainer,
  HeaderContainer,
  HeaderText,
  FilterContainer,
  LargeFilterChild,
  SmallFilterChild,
  Content,
  Text2,
} from "../Styles";
import search from "../assets/search.png";
import arrowUp from "../assets/arrowup.png";
import arrowDown from "../assets/arrowdown.png";

function MarketplaceHeader() {
  return (
    <div>
      <HeaderContainer>
        <HeaderText>Marketplace</HeaderText>
      </HeaderContainer>
      <FilterContainer>
        <LargeFilterChild>
          <Content className="searchBox">
            <ImageContainer src={search}></ImageContainer>
            <Text2>Search by NFTs</Text2>
          </Content>
        </LargeFilterChild>
        <SmallFilterChild className="smallFilterChild">
          <Content className="smallFilterChild">
            <Text2>Close</Text2>
            <ImageContainer src={arrowDown}></ImageContainer>
          </Content>
        </SmallFilterChild>
        <SmallFilterChild className="smallFilterChild2">
          <Content>
            <Text2>Close later</Text2>
            <ImageContainer src={arrowUp}></ImageContainer>
          </Content>
        </SmallFilterChild>
      </FilterContainer>
    </div>
  );
}

export default MarketplaceHeader;
