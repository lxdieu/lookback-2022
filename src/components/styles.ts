import Carousel from "./Carousel";
import styled from "styled-components";
const breakpoints = {
  xs: 0,
  sm: 567,
  md: 768,
  lg: 1279,
  xl: 1439,
  xxl: 1920,
};

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  font-family: "Roboto";
  background: black;
  // & > *:last-child {
  //   top: 5%;
  // }
  &>span{
    min-width:100% !important;
    height:100% !important;
    background:transparent !important;
    &>span{
        background:transparent !important;
    }
}
`;

export const Slide = styled.div`
  background: transparent !important;
  font-family: "Roboto";
  & > span {
    min-width: 100% !important;
    height: 100% !important;
    background: transparent !important;
    & > span {
      background: transparent !important;
    }
  }
  & img {
    background: transparent;
  }
`;
export const BackgroundImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  & img {
    &:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: 100%;
    }
  }
`;

export const BackgroundLastImage = styled(BackgroundImage)`
  & img{
    z-index:1;
  }
`;

export const ContentOuterWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 16px;
  width: 80%;
  max-width: 360px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 75%;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  z-index: 4;
  @media screen and (max-width:${breakpoints.sm}px){
    bottom:65%;
  }
`;

export const Content = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -28px;
    left: 50%; // offset should move with padding of parent
    transform: translateX(-50%);
    border: 0.75rem solid transparent;
    border-bottom: none;

    // looks
    border-top-color: rgba(255, 255, 255, 0.8);
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0));
  }

  p {
    display: block;
    color: #3549ce;
    font-size: 16px;
    line-height: 1.2;
    white-space:normal;
    &:first-child {
      margin-bottom: 8px;
    }
    &.big-text {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

export const BackHomeArea = styled.div`
  height: 200px;
  width:100%;
  max-width: 500px;
  position: absolute;
  content: "";
  bottom: 150px;
  left: 50%;
  background: none;
  transform: translateX(-50%);
  z-index: 3;
  cursor: pointer;
  // border:1px solid #000;
  // @media screen and (max-width:${breakpoints.sm}px){
  //   bottom:120px;
  // }
`;
export const HscLogo = styled.img`
height: 32px;
width: auto;
  position: absolute;
  left: calc(50% - 220px);
  bottom: 24px;
  @media screen and (max-width:${breakpoints.sm}px){
    left:16px;
  }
`;

export const BackgroundVideo = styled.div`
  height: 100%;
  width: 100%;
`;

export const HscLogoHead = styled.img`
  height: 32px;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 24px;
  z-index:4;
`;

export const BackgroundLastVideo = styled.div`
& video{
  position:absolute;
  left:50%;
  top:0;
  height:100%;
  width:auto;
  transform:translateX(-50%);
}`

