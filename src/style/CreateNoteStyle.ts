import styled from 'styled-components'

export const CreateNoteStyle = styled.div`
&{
    height: calc(100vh - 55.6px);
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
        height: inherit;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 3fr 1fr 1fr 1fr;
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
    }   
}
`
