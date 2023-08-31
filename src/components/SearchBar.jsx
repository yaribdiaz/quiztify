import { useChooseStore } from "../hooks/useChooseStore"

const SearchBar = () => {

    const{search, handleSetSearch} = useChooseStore()
    

    const cleanBar = e => {
        e.preventDefault()
        handleSetSearch('')
    }

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/5 lg:w-2/5 flex">
        <input 
            type="text"
            placeholder="Buscar tu playlist favorita y adivina..."
            onChange={e => {
              e.preventDefault()
              handleSetSearch(e.target.value)}}
            value={search}
            className={`${search ? 'rounded-l' : 'rounded'} w-full text-black bg-white shadow-lg py-2 md:py-1 focus:outline-none px-2 font-semibold`}
        />

        {search && (
        <button 
            type="button"
            onClick={cleanBar}
            className= {`transition-opacity duration-500 rounded-r bg-red-500 hover:bg-red-600 text-white px-5 ${search ? 'opacity-100' : 'opacity-10'} `}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
      
        )}

      </div>
    </div>
  )
}

export default SearchBar