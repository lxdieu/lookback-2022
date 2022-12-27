import styled from "styled-components";
const breakpoints = {
  xs: 400,
  sm: 567,
  md: 768,
  lg: 1279,
  xl: 1439,
  xxl: 1920,
};
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background:#000;
`;

export const Images = styled.image`
  height: 100%;
  width: auto;
  margin: auto;
`;

export const TextBold = styled.span`
  font-weight: 900;
`;

export const Text = styled.p`
  text-align: center;
  color: #3d8014;
  font-size:24px;
  line-height:1.2;
  z-index:1;
  margin-bottom:8px;
  @media screen and (max-width:${breakpoints.sm}px){
    font-size:18px;
  }
`;

export const PackCover = styled.div`
  width:calc(50% - 44px);
  & img{
    width:100%;
  }
  @media screen and (max-width:${breakpoints.sm}px){
    width:calc(50% - 8px)
  }
`;

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
`;
export const Logo = styled.img`
  margin-bottom: 64px;
  margin-top: 32px;
  height: 32px;
  z-index:1;
  @media screen and (max-width:${breakpoints.md}px){
    margin-bottom:32px;
    margin-top:0px;
  }
`;

export const ListCovers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 480px;
  margin:0 auto;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 32px 0;
  cursor:pointer;
  z-index:1;
  > div {
    &:nth-child(-n + 2) {
      margin-bottom: 16px;
    }
    &:nth-child(even) {
      margin-left: 16px;
    }
  }
  @media screend and (max-width:${breakpoints.sm}px){
    
  }
`;
