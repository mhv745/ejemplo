import { useState } from 'react'

const App = () => {
	const [estado, setEstado] = useState(0)

	return (
		<Contenedor>
			<p>Hola</p>
			<p>Hola</p>
			{estado && <p>{estado}</p>}
			<button onClick={() => setEstado(estado + 1)}>sumar</button>
		</Contenedor>
	)
}

const Contenedor = ({ children, nombre }) => {
	return <div>{children}</div>
}

export default App
