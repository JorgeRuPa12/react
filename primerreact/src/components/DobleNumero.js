function DobleNumero(){
    var ejemplo = "Soy una variable de jueves!!!";

    const cambiarVariable = () => {
        console.log("Valor antes:" + ejemplo);
        ejemplo = "He cambiado de VALOR!!!";
        console.log("Valor despues:"+ ejemplo)
    }

    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    var miEstilo = {
        color: "blue"
    }

    return(
        <div>
            <h1 style={miEstilo}>Ejemplo métodos parámetros</h1>
            <h2 style={{color:"fuchsia"}}>{ejemplo}</h2>
            <button onClick={ () => cambiarVariable() }>Cambiar Valor Ejemplo</button>
            <button onClick={ () => numeroDoble(18)}>Doble de 18</button>
            <button onClick={ () => numeroDoble(6)}>Doble de 6</button>
        </div>
    )
}

export default DobleNumero;