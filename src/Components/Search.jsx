function Search(props) {
  if(!props.show){
    return null
  }

  return (
    <div id="search" onClick={props.onClose} className='absolute flex justify-center items-center w-full h-screen bg-[#00000085]'>
        <div id="main-card" onClick={e=>e.stopPropagation()} className='relative -top-5 flex justify-center h-card w-card'>
            <div className='flex h-5/6 w-3/4 bg-[#2F3136] px-6 pt-6 rounded-md cursor-pointer'>
              <input className='h-16 bg-[#202225] w-full rounded-md'/>
            </div>
        </div>
    </div>
  )
}

export default Search
