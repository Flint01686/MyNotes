import React, { FC } from 'react'

export const Loader: FC<{theme?: "dark" | "ligth"}> = ({theme = "ligth"}) =>
{
    return <label style={
        theme === "dark" ?  {color: "white", backgroundColor: "black"}
        : {color: "black", backgroundColor: "white"}
    }>loading...</label>
}