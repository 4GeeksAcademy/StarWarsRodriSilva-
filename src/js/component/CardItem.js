import React, { useContext, useEffect } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

export const CardItem = ({ info, tipo }) => {
    const { store, actions } = useContext(Context)
    const { UpdateSelected } = actions
    const navigate = useNavigate()

    const ShowInfo = () => {
        navigate(`/showInfo/${info.uid}`)
        UpdateSelected(info)
    }

    return (
        <>
            {
                info ? <div className="card mx-3" style={{ width: "400px", minWidth: "300px", display: "inline-block" }} >
                    <div className="bg-secondary d-flex flex-row justify-content-center align-items-center" style={{ width: "100%", height: "200px" }}>
                        <p style={{ fontWeight: "bold", fontSize: "25px" }} className="text-light">400x200</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{info.name}</h5>
                        {
                            tipo === "planets" ? <div className="row my-2" >
                                <p className="card-text p-0 m-1 col-12">Population:{info.infoCompleta.population}</p>
                                <p className="card-text p-0 m-1 col-12">Terrair:{info.infoCompleta.terrair}</p>
                            </div> : tipo === "peoples" ? <div className="row my-2">
                                <p className="card-text p-0 m-1 col-12">Gender:{info.infoCompleta.gender}</p>
                                <p className="card-text p-0 m-1 col-12">Hair-Color:{info.infoCompleta.hair_color}</p>
                                <p className="card-text p-0 m-1 col-12">Eye-Color:{info.infoCompleta.eye_color}</p>
                            </div> : tipo === "vehicles" ? <div className="row my-2">
                                <p className="card-text p-0 m-1 col-12">{info.infoCompleta.name}</p>
                                <p className="card-text p-0 m-1 col-12">{info.infoCompleta.model}</p>
                            </div> : "..."

                        }
                        <div className="d-flex flex-row justify-content-between">
                            <a onClick={ShowInfo} href="#" className="btn btn-outline-primary">Learn More</a>
                            <button className="btn btn-outline-warning ml-auto">
                                <AiOutlineHeart />
                            </button>

                        </div>
                    </div>
                </div> : <p>Cargando informacion...</p>

            }
        </>
    )
}