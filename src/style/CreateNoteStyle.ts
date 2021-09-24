import styled from 'styled-components'

export const CreateNoteStyle = styled.div`
&{
    textarea{   
        background-color: #c4c4c4;
        height: 90%;
        font-size: 24px;
        resize: none;
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 0 5px;
        &:focus-visible
        {
            outline: none;
        }
    } 
    .block_inline
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;
        h6{
            height: fit-content;
        }
        input[type=file] {
            border-radius: 5px;

            background-color: #c4c4c4;
            border: none;
            font-size: 24px;
            &:focus-visible
            {
                outline: none;
            }
        }
    }
    form{
        .head{
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            column-gap: 10px;
            row-gap: 10px;
            justify-content: center;
        }
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 70px minmax(271px, 1fr));
        justify-items: stretch;
        margin: 0 auto;
        padding: 40px;
        row-gap: 20px;
        background-color: rgba(	196, 196, 196, 0.5);

        h3, h6{
            margin: 0;
        }
        h3{
            font-size: 32px;
            justify-self: center;
        }
        h6{
            font-size: 18px;
        }

        .pinner{
            color: black;
            background-color: white;
            border-radius: 5px;
            width: 70px;
            height: 30px; 
        }
        .active{
            color: white;
            background-color: black;
        }
        img{
            object-fit: cover;
            max-height: 500px;
            max-width:  500px;
            &:hover{
                transition: 700ms;
                opacity: 0.8;
            }
        }
    }   
}
@media screen and (max-width: 768px) {
    form {padding: 7px;}
    .block_inline
    {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        row-gap: 10px;
        h6{
            height: fit-content;
        }
        input[type=file] {
            width: 70%;
            font-size: 16px;
            &:focus-visible
            {
                outline: none;
            }
        }
    }
}
`
