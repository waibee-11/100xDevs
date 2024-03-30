import { Children } from "react"

export default function({children} : {
    children: React.ReactNode
}){
    return (
        <div>
            <div className="p-1 border-b text-center">
                Discount right now!
            </div>
        {children}
        </div>
    )
}