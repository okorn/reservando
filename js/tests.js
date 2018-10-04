// listadoDeRestaurantes[1]
// listadoDeRestaurantes[1].horarios
// listadoDeRestaurantes[1].horarios[1]
// listadoDeRestaurantes[2].horarios


// .eql hace comparacion de los valores de array   o .deep.equal... ponele
// .equal hace comparacion de los valores de un objeto 

// aplicacion.js linea 86 .... horarioReservado
// restaurant.js linea 11...
// Vamos a usar el metoodo BDD para la primera prueba de horarios

const expect = chai.expect;

describe('Comprobamos funciones al reservar un horario', function() {
    it('Deberia retonar un array sin dicho horario', function () {
        let restaurantTest = listadoDeRestaurantes[0];
        let cantidadHorarios = restaurantTest.horarios.length;
        let horario = restaurantTest.horarios[0];
        restaurantTest.reservarHorario(horario);
        expect(cantidadHorarios).to.not.eql(cantidadHorarios-1);
    })
    it('Deberia retonar un listado de horarios igual', function () {
        let restaurantTest = listadoDeRestaurantes[0];
        let cantidadHorarios = restaurantTest.horarios.length;
        restaurantTest.reservarHorario('19:00');
        expect(cantidadHorarios).to.eql(cantidadHorarios);
    })
    it('Deberia retonar un array sin dicho horario', function () {
        let restaurantTest = listadoDeRestaurantes[0];
        let cantidadHorarios = restaurantTest.horarios.length;
        restaurantTest.reservarHorario('');
        expect(cantidadHorarios).to.eql(cantidadHorarios);
    })
})

describe('Comprobamos funciones de puntuar un restaurante', function () {
    it('Debería retornar el promedio correcto considerando el nuevo puntaje', function () {
        var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
            sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        let promedioFinal = Math.round(promedio * 10) / 10;
    })

    it('Deberia retonar un 0 cuando un restaurant no tiene ninguna puntuación', function () {

    })

})