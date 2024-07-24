import "../assets/styles/Cards.css"
export default function Card(props) {
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div className="Card--Container">
                <div className="Card--Container--Image">
                    <img src={props.imageUrl} className="Card--Image" alt="" />
                </div>
                <div className="Card--Container--Details">
                    <div className="Card--Details--Location">
                        <img src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png" alt="" className="Card--Details--Location--Icon" />
                        <h2 className="Card--Details--Country">
                            {props.location}
                        </h2>
                        <a href={props.googleMapsUrl} style={{ color: "gray", textDecoration: "none", fontSize: "0.8rem", marginLeft: "0.5%" }}>View On Google Maps</a>
                    </div>
                    <h1 className="Card--Details--Main--Title">
                        {props.title}
                    </h1>
                    <p className="Card--Details--Dates">{props.startDate} - {props.endDate}</p>
                    <p className="Card--Details--Description">
                        {props.description}
                    </p>
                </div>
                <hr />
            </div>
        </div>
    )
}