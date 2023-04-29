import React from "react"
import loc from "../images/loc.jpg"
export default function MainContent(props)
{
    return(
            <div className="first">
                <section className="limg">
                    <img className="ig" src={props.cd.imageUrl} alt={props.cd.title} />
                </section>
                <section className="info">
                    <span>
                        <img className="ll" src={loc} alt="location_icon"></img>
                    </span>
                    <span className="llc">{props.cd.location}</span>
                    <span className="googlemaps"><a href={props.cd.googleMapsUrl}>View on Google Maps</a></span>
                    <h3 className="title">{props.cd.title}</h3>
                    <p className="pp1">{props.cd.startDate} - {props.cd.endDate}</p>
                    <p className="pp2">{props.cd.description}</p>
                </section>
            </div>
    );
}