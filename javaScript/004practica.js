switch (prompt("Como esta el clima?")) {
    case "lluvioso":
    console.log("Recuerda salir con un paraguas.");
    break;
    case "soleado":
    console.log("Vistete con poca ropa.");
    case "nublado":
    console.log("Ve afuera.");
    break;
    default:
    console.log("Tipo de clima desconocido!");
    break;
    }
    