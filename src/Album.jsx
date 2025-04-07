
export default function Album({title, writeup, image, color}) {

    return (
        <div>
            <p>Album</p>
            <h1>{title}</h1>
            <p>{writeup}</p>
            <img src={image} alt={title} style={{backgroundColor: color}}/>
        </div>
    )
}

