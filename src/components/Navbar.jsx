import airbnb from "../assets/airbnb-logo.png";

export default function Navbar() {
	return (
		<>
			<nav className="Navbar--logo">
				<img src={airbnb} alt="Airbnb logo" width="82px" />
			</nav>
		</>
	);
}
