import styled from "styled-components";

export const ContainerNav = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;
  width: 430px;
  height: 20px;
`;

export const List = styled.li`
  width: ${(props) =>
    props.generate
      ? "74px"
      : (props) =>
          props.marketplace
            ? "107px"
            : (props) => (props.myTokens ? "83px" : "58px")}
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.6px;
  color: #ffffff;
  flex: none;
  order: ${(props) =>
    props.generate
      ? "0"
      : (props) =>
          props.marketplace ? "1" : (props) => (props.myTokens ? "2" : "3")}
  flex-grow:none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 155px;
  height: 40px;
  border-radius: 14px;

  .priceContainer & {
    width: 57px;
    height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    border-radius: 6px;
  }
`;

export const ConnectButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 155px;
  height: 40px;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 196.99px;
  height: 36px;
  gap: 10px;
`;

export const ImageContainer = styled.img`
  width: 28.99px;
  height: 36px;

  .searchBox & {
    width: 18px;
    height: 18px;
  }

  .smallFilterChild2 & {
    width: 18px;
    height: 18px;
  }

  .smallFilterChild & {
    width: 18px;
    height: 18px;
  }

  .card & {
    width: 220px;
    height: 230px;
    filter: drop-shadow(0px 0px 12px #000000);
    flex: none;
    order: 0;
  }
`;

export const CompanyName = styled.h1`
  width: 156px;
  height: 24px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.015em;
  color: #ffffff;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  width: 1376px;
  height: 41px;
  left: 32px;
  top: 104px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderText = styled.h1`
  width: 147px;
  height: 29px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  gap: 24px;
  position: absolute;
  width: 1376px;
  height: 50px;
  left: 32px;
  top: 169px;
`;

export const LargeFilterChild = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  width: 1008px;
  height: 50px;
  border: 1px solid #414141;
  border-radius: 14px;
`;

export const SmallFilterChild = styled(LargeFilterChild)`
  width: 160px;
  gap: 12px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 18px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Text2 = styled.h2`
  height: 18px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  flex: none;
  order: 0;
  flex-grow: 1;

  .smallFilterChild2 & {
    width: 85px;
    font-weight: 400;
    color: #ffffff;
    order: 0;
  }

  .smallFilterChild & {
    font-weight: 400;
    color: #ffffff;
    order: 0;
  }

  .priceContainer & {
    font-size: 13px;
  }
`;

export const NftContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 626px;
  top: 263px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;
  margin: 0px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 24px;
  width: 95.56%;
  height: 301px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Card = styled.div`
  width: 230px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7px;
  gap: 3px;
  background: #121212;
  box-shadow: 0px 0px 12px #000000;
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 5px;
  width: 188px;
  height: 40px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const CardText1 = styled.div`
  width: 187px;
  height: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 500;
  font-size: 12px;
`;

export const CardText2 = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width: 187px;
  height: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 500;
  font-size: 12px;'  
  gap:10px;
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 16px;

  .price & {
    font-weight: bold;
    font-size: 13px;
  }
`;
