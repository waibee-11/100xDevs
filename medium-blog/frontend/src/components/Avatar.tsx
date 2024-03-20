export function Avatar({name, date}: {name:string, date:Date}){
    return (
        <div className="flex items-center gap-2"> 
            <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-black rounded-full">
                <span className="font-bold text-sm text-white">{name[0]}</span>
            </div>
            <div className="text-sm font-semibold pl-1 font-lora">{name}</div>
            <div className="text-sm font-thin font-inter">Last edited on {date.toLocaleString().substring(0,10)}</div>
        </div>
    )
}