import styled from "styled-components";

export const HeaderStyle = styled.div`
&
{
    padding: 0 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    .brand, .end {
        display: flex;
        flex-direction: row !important;
        flex-wrap: nowrap;
    }
    .end{
        a {
            color: rgba(255,255,255,.5);
            &:hover{
                color: rgba(255,255,255,.75)
            };
        }
    }
    img{
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 100%;
    }
}
@media screen and (max-width: 768px) {
    .end{
        display: flex;
        flex-direction: column;
    }
    padding: 0 5px;
    font-size: 16px;
}
`