import React, {FC, useState} from "react"
import { Button } from "react-bootstrap"
import { PagenationStyle } from "../../style/PagenationStyle"

const Pagenation: FC<{
    changePage: Function
    page: number
    count: number
}> = ({children, changePage, page, count}) =>
{
    const [currentPage, setCurrentPage] = useState(page)
    function changeCurrentPage(how: number)
    {
        changePage(currentPage+how)
        setCurrentPage((prev: number) => prev+how)
    }
    return (
        <PagenationStyle center>
            <Button variant="dark" style={currentPage === 0 ? {visibility: 'hidden', } : {visibility: 'visible', }}
                onClick={() => changeCurrentPage(-1)}> prev </Button>
            {children}
            <Button variant="dark" style={currentPage+1 >= count ? {visibility: 'hidden', } : {visibility: 'visible', }}
                onClick={() => changeCurrentPage(+1)}> next </Button>
        </PagenationStyle>
    )
}
export default Pagenation