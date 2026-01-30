export default function Entry(props) {
    return (
        <>
            <article className="journal-entry">
                <div className="main-image-container">
                    <img className="main-image" src={props.image} alt="japan image" />
                </div>
                <div className="info-container">
                    <div className="location">
                        <img className="marker" src={props.marker} alt="location" />
                        <span className="country">{props.country}</span>
                        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="trip-dates">{props.dates}</p>
                    <p className="entry-text">{props.text}
                    </p>
                </div>
            </article>
            <br />
        </>
    )
}