import CardPlaylists from './CardPlaylists'

const ListPlaylists = (props) => {
    const {playlists} = props
    
  return (
    <div className='p-5 '>
        <div className='grid  grid-cols-2 grid-flow-rows gap-4 pb-1 md:grid-cols-3 lg:grid-cols-5'>
            {
                playlists?.map(playlist => (
                    <CardPlaylists
                        key={playlist.id}
                        playlist={playlist}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ListPlaylists
