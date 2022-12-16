import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Images = styled.image`
  height: 100%;
  width: auto;
  margin: auto;
`;

export const TextBold = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  text-align: center;
  color: #3d8014;
  font-size:18px;
`;

export const PackCover = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 32px;
  position: relative;
  height: 100%;
  flex-direction: column;
`;

export const ContentBackground = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100%;
  width: auto;
  margin: auto;
  z-index: -1;
`;
export const Logo = styled.img`
  margin-bottom: 32px;
  margin-top: 32px;
  height: 32px;
`;

export const ListCovers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 560px;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  cursor:pointer;
  > div {
    &:nth-child(-n + 2) {
      margin-bottom: 16px;
    }
    &:nth-child(even) {
      margin-left: 16px;
    }
  }
`;
