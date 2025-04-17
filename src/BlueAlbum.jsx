import Album from './Album'

export default function BlueAlbum({title, songTitle, artist, image, links, audioSrc}) {
    return (
        <Album title={title} songTitle={songTitle} artist={artist} image={image} links={links} audioSrc={audioSrc} />
    )
}