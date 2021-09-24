import React, {FC} from "react"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import { PagenationStyle } from "../../style/PagenationStyle"

const Pagenation: FC<{
    page: number
    count: number
}> = ({children, page, count}) =>
{
    let history = useHistory()

    function changeCurrentPage(how: number)
    {
        history.push(`/home/${page+how}`)
    }
    return (
        <PagenationStyle center>
            <Button variant="dark" style={page === 0 ? {visibility: 'hidden', } : {visibility: 'visible', }}
                onClick={() => changeCurrentPage(-1)}> prev </Button>
            {children}
            <Button variant="dark" style={page+1 >= count ? {visibility: 'hidden', } : {visibility: 'visible', }}
                onClick={() => changeCurrentPage(+1)}> next </Button>
        </PagenationStyle>
    )
}
export default Pagenation