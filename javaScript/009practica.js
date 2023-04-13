
function envolverValor(n) {
    let local = n;
    return () => local;
    }
    let envolver1 = envolverValor(1);
    let envolver2 = envolverValor(100);
    console.log(envolver1());
    console.log(envolver2())