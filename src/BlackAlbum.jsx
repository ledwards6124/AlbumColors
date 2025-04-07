import Album from './Album'

export default function BlackAlbum({title, songTitle, artist, image, links, audioSrc}) {
    return ( 
        <Album title={title} artist={artist} songTitle={songTitle} image={image} links={links} audioSrc={audioSrc}/>
    )
}