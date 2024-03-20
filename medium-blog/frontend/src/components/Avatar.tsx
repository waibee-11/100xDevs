export function Avatar({name, image}: {name:string, date: string, image:any}){
    return (
        <div className="flex items-center gap-2">
            {image ? <img className="border-2 border-black w-7 h-7 rounded-full" src={image} alt="Rounded avatar"></img> : 
            <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-700 rounded-full">
                <span className="font-small text-sm text-white">{name[0]}</span>
            </div>}
            <div className="text-sm font-light pl-1">{name}</div>
        </div>
    )
}