import styled from "styled-components";
export const ShareList = styled.div`
  position:fixed;
  width:auto;
  padding:6px;
  border-radius:40px;
  display:flex;
  background:rgba(0,0,0,0.3);
  margin-bottom:12px;
  opacity:${props => props.isShow ? 1 : 0};
  transition: opacity 0.3s;
  & a{
    margin-right:8px;
  }
  & img:not(:last-child){
    margin-right:8px;
  }
`;

export const Wrapper = styled.div`
position:absolute;
left:50%;
transform:translateX(-50%);
bottom:32px;
z-index:2;
`
export const SingleIcon = styled.img`
width:40px;
height:40px;
cursor:pointer;
border-radius:40px;`

export const CopyNoti = styled.div`
  background:rgba(0,0,0,0.5);
  border-radius:8px;
  padding:8px;
  position:absolute;
  top:-36px;
  left:calc(50% + 16px);
  opacity:${props => props.isShow ? 1 : 0};
  transition: opacity 0.3s;
  color:#fff
`

