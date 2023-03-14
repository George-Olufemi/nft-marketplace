import {
  ContainerNav,
  Nav,
  Ul,
  List,
  ConnectButton,
  ButtonContainer,
  LogoContainer,
  ImageContainer,
  CompanyName,
} from "../Styles";
import logo from "../assets/logo.png";
import MarketplaceHeader from "./MarketplaceHeader";

function Navbar() {
  return (
    <div>
      <ContainerNav>
        <Nav>
          <LogoContainer>
            <ImageContainer src={logo}></ImageContainer>
            <CompanyName>DiffusedMarket</CompanyName>
          </LogoContainer>
          <Ul>
            <List generate>Generate</List>
            <List marketplace>Marketplace</List>
            <List myTokens>My tokens</List>
            <List history>History</List>
          </Ul>
          <ButtonContainer>
            <ConnectButton>Connect Wallet</ConnectButton>
          </ButtonContainer>
        </Nav>
      </ContainerNav>
    </div>
  );
}

export default Navbar;
