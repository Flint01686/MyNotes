import React, {FC} from "react"
import { Button } from "react-bootstrap"
import { PagenationStyle } from "../../style/PagenationStyle"

const Pagenation: FC<{changePage: Function}> = ({children, changePage}) =>
{
    return (
        <PagenationStyle center>
            <Button style={{visibility: 'hidden', }}
                onClick={() => changePage((prev: number)=>--prev)}> prev </Button>
            {children}
            <Button onClick={() => changePage((prev: number)=>++prev)}> next </Button>
        </PagenationStyle>
    )
}
export default Pagenation