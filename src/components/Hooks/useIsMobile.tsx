import React, { useState, useEffect } from 'react'

export function useIsMobile()
{
    let [isMobile, setIsMobile] = useState<boolean>(false)

    function refreshState(): void
    {
        setIsMobile(window.innerWidth <= 768)
    }
    
    useEffect(() => {
        
        refreshState()
        window.addEventListener("resize", () =>{ refreshState() });
        return () => {
            window.removeEventListener("resize", () =>{ refreshState() });
        }
    }, [])

    return isMobile;
}

// function refreshState() {
//     throw new Error('Function not implemented.');
// }
