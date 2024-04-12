"use client"

import { useEffect } from "react"

const Error = (error: Error & {digest?:string}, reset: () => void) => {
    useEffect(() => {
        console.error(error)
    },[error])

    return (
        <>
            <h2>Something went wrong!</h2>
            <button
            onClick={() => reset()}>
                Try again
            </button>
        </>
    )
}


export default Error