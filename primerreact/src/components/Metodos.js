function Metodos(){
    //Nos declaramos un metodo
    //Mostrar mensaje por consola
    const mostrarMensaje = () => {
        console.log("Botón pulsado");
    }

    return (
        <div>
            <h1>Ejemplo métodos React</h1>
            {mostrarMensaje()}
            <button onClick={ () =>
                mostrarMensaje() }>
                    Pulsa para cosas...
            </button>
        </div>
    )
}

export default Metodos;