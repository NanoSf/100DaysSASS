const dia10 = document.querySelector('.container-11');

const animacionDiaOnce = () => {
    const contenedor = document.querySelector('.container-11__zapatos');
    const verticalUno = document.querySelector('.container-11__zapatos-der');
    const verticalDos = document.querySelector('.container-11__zapatos-izq');

    dia10.addEventListener('mouseover', () => {
        verticalUno.classList.add('left');
        verticalDos.classList.add('right');
        contenedor.classList.add('opacity');
    })

    dia10.addEventListener('mouseout', () => {
        verticalUno.classList.remove('left');
        verticalDos.classList.remove('right');
        contenedor.classList.remove('opacity');
    })
}

animacionDiaOnce();

export default animacionDiaOnce;