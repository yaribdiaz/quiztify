import { useState } from "react"
import { useChooseStore } from "../hooks/useChooseStore"

const SearchBar = () => {
    const [value, setValue] = useState('')
    const{search, handleSetSearch} = useChooseStore()
    

    const cleanBar = e => {
        e.preventDefault()
        handleSetSearch('')
        setValue('')
    }
    const handleSearch = e => {
      e.preventDefault()
      handleSetSearch(value)
    }

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/5 lg:w-2/5 flex">
        <form 
          onSubmit={handleSearch}
          className="flex w-full">
        <input 
            type="text"
            placeholder="Busca tu playlist favorita y adivina..."
            onChange={e => {setValue(e.target.value)}}
            value={value}
            className={` w-full text-black bg-white shadow-lg py-2 md:py-1 focus:outline-none px-2 font-semibold`}
        />

        {search ? (
        <button 
            type="button"
            onClick={cleanBar}
            className= {`transition-opacity duration-500 rounded-r bg-red-500 hover:bg-red-600 text-white px-5`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        ) : (
        <button 
            type="submit"
            className= {`transition-opacity duration-500 rounded-r bg-blue-500 hover:bg-blue-600 text-white px-5`}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        ) }
        </form>

      </div>
    </div>
  )
}

export default SearchBar