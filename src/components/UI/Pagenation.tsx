import React, {FC} from "react"
import { Button } from "react-bootstrap"
import { PagenationStyle } from "../../style/PagenationStyle"

const Pagenation: FC = ({children}) =>
{
    return (
        <PagenationStyle center>
            <Button style={{display: 'none', }}> prev </Button>
            {children}
            <Button> next </Button>
        </PagenationStyle>
    )
}
export default Pagenation