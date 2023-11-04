import star from "/assets/star.png";

export default function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img
				className="card--image"
				src={`/assets/${props.img}`}
				alt="Katie Zaferes"
				width="176px"
			/>
			<div className="card--stats">
				<img src={star} alt="5 stars" width="14px" height="14px" />
				<span>{props.rating} </span>
				<span className="gray">({props.reviewCount}) • </span>
				<span className="gray">{props.location}</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="bold">From ${props.price}</span> / person
			</p>
		</div>
	);
}
