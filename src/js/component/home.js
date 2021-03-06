import React from "react";

//include images into your bundle
import dummyPicture from "../../img/500x325.jpg";

export function NavBar() {
	return (
		<nav
			className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
			style={{ paddingLeft: "15%" }}>
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul
					className="navbar-nav ml-auto"
					style={{ paddingRight: "18%" }}>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export function JumboTron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
				mattis tempus risus sed aliquet. Sed volutpat magna lacus. Nulla
				facilisi. Donec placerat lorem neque, in luctus odio suscipit
				et.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
}

export function Cards(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.imagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.texto}</p>
			</div>
			<div
				className="card-footer"
				style={{ justifyContent: "center", alignItems: "center" }}>
				<a
					href="#"
					className="btn btn-primary"
					style={{ justifyContent: "center" }}>
					Find Out More!
				</a>
			</div>
		</div>
	);
}

export function Footer() {
	return (
		<div
			className="container-fluid"
			style={{
				marginTop: "20px",
				backgroundColor: "#343a40",
				paddingTop: "20px",
				paddingBottom: "20px",
				bottom: "0",
				textAlign: "center"
			}}>
			<div className="container" style={{ color: "white" }}>
				Copywright © Your Website 2021
			</div>
		</div>
	);
}

export function JumboTronWithCards() {
	return (
		<div className="container">
			{JumboTron()}
			<div className="card-deck">
				<Cards
					texto="Some quick example text to build on the card title and make
                    up the bulk of the card's content"
					imagen={dummyPicture}
				/>
				<Cards
					texto="Texto de Prueba para evaluar el tema de las cards con props y textos variables"
					imagen={dummyPicture}
				/>
				<Cards
					texto="Hola, aqui va un poco mas de información al respecto, hola hola hola hola"
					imagen={dummyPicture}
				/>
				<Cards
					texto="hello hello hello hello hello hello hello hello hello hellohello hello hello hello hello hello hello hello "
					imagen={dummyPicture}
				/>
			</div>
		</div>
	);
}

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			{NavBar()}
			{JumboTronWithCards()}
			{Footer()}
		</div>
	);
}
