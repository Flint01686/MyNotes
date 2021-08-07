import styled from "styled-components";


export const HomeStyle = styled.div`
&
{
    display: grid;
    grid-template-columns: 335px auto;
    grid-template-rows: auto;
}

@media screen and (max-width: 768px) {
  &
  {
    grid-template-columns: auto;
  }
}
`