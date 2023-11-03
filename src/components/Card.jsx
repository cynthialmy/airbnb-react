import star from "../assets/star.png";
import katie from "../assets/katie-zaferes.png";

export default function Card() {
	return (
		<div className="card">
			<img
				className="card--image"
				src={katie}
				alt="Katie Zaferes"
				width="176px"
			/>
			<div className="card--stats">
				<img src={star} alt="5 stars" width="14px" height="14px" />
				<span>5.0 </span>
				<span className="gray">(6) • </span>
				<span className="gray">USA</span>
			</div>
			<p>Life lessons with Katie Zaferes</p>
			<p>
				<span className="bold">From $136</span> / person
			</p>
		</div>
	);
}
