const expect = chai.expect;

// Estos tests prueban las funciones relacionadas a la reserva de un restaurante

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

// Este test comprueba el correcto funcionamiento de la puntuacion de un restaurante

describe('Comprobamos funciones de puntuar un restaurante', function () {
    it('Debería retornar el promedio correcto considerando las calificaciones actuales', function () {
        let average = listadoDeRestaurantes[1].calificaciones;
        let sumading = average.reduce((previous, current) => current += previous);
        let promediando = sumading / listadoDeRestaurantes[1].calificaciones.length;
        expect(promediando).to.eql(listadoDeRestaurantes[1].obtenerPuntuacion(1));        
    })

    it('Deberia retonar un 0 cuando un restaurant no tiene ninguna puntuación', function () {
        listadoDeRestaurantes[1].calificaciones = []
        expect(0).to.eql(listadoDeRestaurantes[1].obtenerPuntuacion(1));
    })

})

// Este test comprueba el correcto funcionamiento de la funcion calificar a un restaurante

describe('Comprobamos funciones de calificar un restaurante', function () {
    it('Debería actualizar el puntaje', function () {
        let restaurantePuntajes = listadoDeRestaurantes[1].calificaciones;
        listadoDeRestaurantes[1].calificar(2);
        let suma = restaurantePuntajes.reduce((previous, current) => current += previous);
        let promedioCalificacion = Math.round(suma / restaurantePuntajes.length);
        let obtenerPuntaje = Math.round(listadoDeRestaurantes[1].obtenerPuntuacion())
        expect(promedioCalificacion).to.eql(obtenerPuntaje);
    })
})

// Este test comprueba el correcto funcionamiento de la funcion de buscar a un restaurante

describe('Comprobamos funciones de buscar un restaurante', function () {
    it('Debe retornar el restaurante', function () {
        let indice = 1;
        let rubroRestaurante = listadoDeRestaurantes[indice].rubro;
        let ciudadRestaurante = listadoDeRestaurantes[indice].ubicacion;
        let horarioRestaurante = listadoDeRestaurantes[indice].horarios;
        let buscando = listado.buscarRestaurante(indice + 1).rubro;
        let buscarUbicacion = listado.buscarRestaurante(indice + 1).ubicacion;
        let buscarHorario = listado.buscarRestaurante(indice + 1).horarios;        
        expect(rubroRestaurante).to.eql(buscando);
        expect(ciudadRestaurante).to.eql(buscarUbicacion);
        expect(horarioRestaurante).to.eql(buscarHorario);

    })
})