const dia10 = document.querySelector('.dia-10');

const agregarAnimacion = () => {
    console.log('Hola Mundo');
    const circulo = document.querySelector('.dia-10__spinner-svg-circulo');

    dia10.addEventListener('mouseover', () => {
        circulo.classList.add('dia-10__spinner-svg-circulo--activo');
    })

    dia10.addEventListener('mouseout', () => {
        circulo.classList.remove('dia-10__spinner-svg-circulo--activo');
    })
}

agregarAnimacion();

export default agregarAnimacion;