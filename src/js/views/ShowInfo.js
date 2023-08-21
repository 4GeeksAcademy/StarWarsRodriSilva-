import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShowInfo = props => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	const { selected } = store
	const { theid } = useParams();
	console.log(selected)



	return (
		<div className="">


			<button onClick={() => navigate("/")} className="btn btn-primary ">Atras</button>
		</div>
	);
};

ShowInfo.propTypes = {
	match: PropTypes.object
};
