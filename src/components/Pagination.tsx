const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        {/* PREV BUTTON */}
        <button disabled className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs cursor-pointer hover:shadow disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        {/* PAGINATION BUTTONS */}
        <div className="flex items-center gap-2 text-sm">
            <button className="px-2 cursor-pointer rounded-sm bg-alisky">1</button>
            <button className="px-2 cursor-pointer rounded-sm">2</button>
            <button className="px-2 cursor-pointer rounded-sm">3</button>
            ...
            <button className="px-2 cursor-pointer rounded-sm">10</button>
        </div>
        {/* NEXT BUTTON */}
        <button className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs cursor-pointer hover:shadow disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination