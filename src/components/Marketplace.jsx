import {
  NftContainer,
  Div,
  Frame,
  Card,
  ImageContainer,
  CardText,
  CardText1,
  CardText2,
  Span,
  ButtonContainer,
  Text2,
} from "../Styles";
import card1 from "../assets/card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";

function Marketplace() {
  return (
    <NftContainer className="nft">
      <Div>
        <Frame>
          <Card className="card">
            <ImageContainer src={card1}></ImageContainer>
            <CardText>
              <CardText1>
                <Span>Monkey</Span> #9283
              </CardText1>
              <CardText2 className="priceContainer">
                <Text2 className="price">
                  Initial Bid:<Span>2.34</Span>
                  {""}ETH
                </Text2>
                <ButtonContainer>Details</ButtonContainer>
              </CardText2>
            </CardText>
          </Card>
          <Card className="card">
            <ImageContainer src={card2}></ImageContainer>
            <CardText>
              <CardText1>
                <Span>Robocipioniuska...</Span> #9283
              </CardText1>
              <CardText2 className="priceContainer">
                <Text2 className="price">
                  Initial Bid:<Span>2.34</Span>
                  {""}ETH
                </Text2>
                <ButtonContainer>Details</ButtonContainer>
              </CardText2>
            </CardText>
          </Card>

          <Card className="card">
            <ImageContainer src={card3}></ImageContainer>
            <CardText>
              <CardText1>
                <Span>Bomb</Span> #9283
              </CardText1>
              <CardText2 className="priceContainer">
                <Text2 className="price">
                  Initial Bid:<Span>2.34</Span>
                  {""}ETH
                </Text2>
                <ButtonContainer>Details</ButtonContainer>
              </CardText2>
            </CardText>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Frame>
        <Frame>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Frame>
      </Div>
    </NftContainer>
  );
}

export default Marketplace;
