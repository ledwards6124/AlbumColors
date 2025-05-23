import './css/Info.css'

export default function Info({overview, themes}) {

    return (
        <>
        <div className="info-container">
            <h2>Overview: </h2>
            <p>{overview}</p>
            <h2>Key Themes: </h2>
            <ul>
                {themes.map((theme, index) => (
                    <li>{theme}</li>
                ))}
            </ul>
        </div>
        </>
    )
}