import star from "../../public/assets/star.png";

export default function Card(props) {
	return (
		<div className="card">
			<img
				className="card--image"
				src={`../../public/assets/${props.img}`}
				alt="Katie Zaferes"
				width="176px"
			/>
			<div className="card--stats">
				<img src={star} alt="5 stars" width="14px" height="14px" />
				<span>{props.rating} </span>
				<span className="gray">({props.reviewCount}) • </span>
				<span className="gray">{props.country}</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="bold">From ${props.price}</span> / person
			</p>
		</div>
	);
}
