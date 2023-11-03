import photo from "../assets/photo-grid.png";

export default function Navbar() {
	return (
		<>
			<div className="Hero--photo">
				<img src={photo} alt="Photo grid" width="396px" />
			</div>
			<div>
				<h1 className="Hero--title">Online Experiences</h1>
				<p className="Hero--text">
					Join unique interactive activities led by one-of-a-kind
					hosts—all without leaving home.
				</p>
			</div>
		</>
	);
}
