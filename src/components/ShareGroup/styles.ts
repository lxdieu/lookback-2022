import styled from "styled-components";
export const ShareList = styled.div`
  position:relative;
  width:auto;
  padding:6px;
  border-radius:40px;
  display:flex;
  background:rgba(0,0,0,0.3);
  margin-bottom:12px;
  & a{
    margin-right:8px;
  }
  & img:not(:last-child){
    margin-right:8px;
  }
`;

export const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
left:50%;
transform:translateX(-50%);
bottom:24px;
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
  padding:14px;
  position:absolute;
  top:-40px;
  left:calc(50% + 12px);
  opacity:${props => props.isShow ? 1 : 0};
  transition: opacity 0.3s;
  color:#fff
`

