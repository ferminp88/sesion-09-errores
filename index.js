const logger= require('./logger')


function eldoble(mensaje){
    if(typeof num==="number"){
        return 2*num
    }
    logger.error(mensaje)
    throw new Error(mensaje)
}


const num= "asdas"


try {
    eldoble("El usuario ingreso una letra, no un numero");
} catch (error) {
    console.error("Ocurrió un error:", error.message);
}
