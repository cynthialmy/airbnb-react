import airbnb from "/assets/airbnb-logo.png";

export default function Navbar() {
	return (
		<>
			<nav className="navbar--logo">
				<img src={airbnb} alt="Airbnb logo" width="82px" />
			</nav>
		</>
	);
}
