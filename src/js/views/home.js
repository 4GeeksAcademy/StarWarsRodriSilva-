import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardItem } from "../component/CardItem";

export const Home = () => {
	const stylePadre = {
		width: "100%",
		overflowX: "scroll",
		overscrollBehaviorX: "contain",
		scrollSnapType: "x proximity",
		maxWidth: "100%",
		display: "flex",
		flexDirection: "row"
	}

	const { store, actions } = useContext(Context)
	const { peoples, vehicles, planets } = store
	return (
		<div className="container mt-5">
			<h1>Characters</h1>
			<div>
				<div className="col-12 " style={stylePadre} >
					{
						peoples[0] ? peoples.map((item, index) => {
							return <CardItem key={'este es el index' + index} info={item} tipo={"peoples"} />
						}) : "Cargando..."
					}
				</div>
			</div>
			<div className="row">
				<h1>Planets</h1>
				<div className="col-12 " style={stylePadre} >
					{
						planets[0] ? planets.map((item, index) => {
							return <CardItem key={'este es el index' + index} info={item} tipo={"planets"} />
						}) : "Cargando..."
					}
				</div>
			</div>
			<div className="row">
				<h1>Vehicles</h1>
				<div className="col-12 " style={stylePadre} >
					{
						vehicles[0] ? vehicles.map((item, index) => {
							return <CardItem key={'este es el index' + index} info={item} tipo={"vehicles"} />
						}) : "Cargando..."
					}
				</div>
			</div>
		</div>
	);
}

