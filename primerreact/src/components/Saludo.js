function Saludo(props) {
    //Esto es codigo js, podemos declarar multiples variables
    var dato = "Mañana es viernes...";
    //<Saludo nombre="Adrian" edad="25"/>
    const { nombre, edad } = props;
    return (
        <div>
            <h1>React en Juernes</h1>
            <h2>Dato objetivo: {dato}</h2>
            <h1>Su nombre es {nombre} y su edad es {edad}</h1>
        </div>
    )
}

export default Saludo;