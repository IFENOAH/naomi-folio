import { useEffect, useState } from "react";

export function useWindowScroll(pos) {

    const [matches, setMatches] = useState(false)

    const controlNavbar = () => {
        if(typeof window !== undefined) {
            if( window.scrollY < pos ) {
                setMatches(false);
            } else {
                setMatches(true);
            }
        }
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('scroll', controlNavbar)
        }

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [matches, pos])

    return matches;

}