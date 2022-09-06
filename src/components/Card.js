import React from "react";
import star from '../assets/star.png';

function Card(props) {

  let badgeText
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
      <div className="card">
        {badgeText && <div className="promo">{badgeText}</div>}
        <img className="img-profil" src={props.element.coverImg} alt="profilpicture"/>        
        <div className="first-line">
            <img src={star} className="star" alt="star"/>
            <span>{props.element.stats.ranking}</span>
            <span className="avis">{props.element.stats.reviewCount} </span>
            <span className="country">{props.element.location}</span>
        </div>    
        <p className="second-line">{props.element.title} </p>
        <p className="third-line"> <span>From ${props.element.price}</span> / person</p>                
      </div>
    );
  }

  export default Card;