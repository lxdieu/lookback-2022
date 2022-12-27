import styled from "styled-components";
const breakpoints = {
  xs: 0,
  sm: 567,
  md: 768,
  lg: 1279,
  xl: 1439,
  xxl: 1920,
};
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000;
`;
export const BackgroundLastVideo = styled.div`
  & video {
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: auto;
    transform: translateX(-50%);
  }
`;
