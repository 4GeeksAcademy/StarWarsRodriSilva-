
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Favoritos: [],
			peoples: [],
			vehicles: [],
			planets: [],
			selected: undefined
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPeople: async () => {
				const peoples = await fetch("https://www.swapi.tech/api/people")
				const data = await peoples.json()
				if (data) {
					data.results.map((result, index) => {
						return getActions().CargarInformacionEspesifica(result, "peoples")
					})

				}
			},
			loadPlanets: async () => {
				const planets = await fetch("https://www.swapi.tech/api/planets")
				const data = await planets.json()

				if (data) {
					data.results.map((result, index) => {
						return getActions().CargarInformacionEspesifica(result, "planets")
					})

				}
			},
			loadVehicles: async () => {
				const vehicles = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await vehicles.json()
				const store = getStore()
				if (data) {
					data.results.map((result, index) => {
						console.log("xdd")
						return getActions().CargarInformacionEspesifica(result, "vehicles")
					})

				}

			},
			CargarInformacionEspesifica: async (result, tipo) => {
				const resp = await fetch(result.url)
				const data = await resp.json()
				const store = getStore()
				if (data.message === "ok") {
					if (tipo === "planets") {
						setStore({ ...store, planets: [...store.planets, { ...result, infoCompleta: data.result.properties }] })
					} else if (tipo === "peoples") {
						setStore({ ...store, peoples: [...store.peoples, { ...result, infoCompleta: data.result.properties }] })
					} else if (tipo === "vehicles") {
						setStore({ ...store, vehicles: [...store.vehicles, { ...result, infoCompleta: data.result.properties }] })
					}
				}


			},
			UpdateSelected: (info) => {
				setStore({ ...getStore(), selected: info })
			}

		}
	};
};

export default getState;
