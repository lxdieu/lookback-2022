import styled from "styled-components";
export const ShareList = styled.div`
  width:auto;
  padding:6px;
  border-radius:40px;
  display:flex;
  background:rgba(0,0,0,0.3);
  margin-bottom:12px;
  & img:not(:last-child){
    margin-right:12px;
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
bottom:32px;
z-index:2;
`
export const SingleIcon = styled.img`
width:40px;
height:40px;
cursor:pointer;
border-radius:40px;`


