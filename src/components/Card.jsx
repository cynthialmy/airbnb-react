import star from "/assets/star.png";

export default function Card(props) {
	const item = props.item;
	let badgeText;
	if (item.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (item.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img
				className="card--image"
				src={`/assets/${item.coverImg}`}
				alt="Katie Zaferes"
				width="176px"
			/>
			<div className="card--stats">
				<img src={star} alt="5 stars" width="14px" height="14px" />
				<span>{item.stats.badgeTextrating} </span>
				<span className="gray">({item.stats.reviewCount}) • </span>
				<span className="gray">{item.location}</span>
			</div>
			<p>{item.title}</p>
			<p>
				<span className="bold">From ${item.price}</span> / person
			</p>
		</div>
	);
}
