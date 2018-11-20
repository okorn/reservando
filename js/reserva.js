// Con esto creamos el objecto de reserva con horario, cantidad de personas, precio por persona y código de descuento

const Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDescuento = codigoDescuento;
}

// Aca definimos el precio base de la reserva

Reserva.prototype.precioBase = function() {
    return this.cantidadPersonas * this.precioPersona;
}

// Aca definimos el precio final de la reserva segun los adicionales y descuentos seleccionados sea por grupo o codigo

Reserva.prototype.precioFinal = function() {
    const precioBase = this.precioBase();
    const adicional = this.adicionales(precioBase);
    const descuento = this.descuentos(precioBase);
    return precioBase + adicional - descuento;
}

// Factorizacion - Adicionales

Reserva.prototype.adicionales = function(baseCalculo) {
    return this.adicionalFinDeSemana(baseCalculo) + this.adicionalHorario(baseCalculo);
}

// Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// De aca sacamos los getUTCDay() / getHours() / getMinutes()

Reserva.prototype.adicionalFinDeSemana = function(base) {
    const diaSemana = this.horario.getUTCDay();
    // 0 5 y 6 corresponden a Viernes, Sabado y Domingo donde se habilita un 10% adicional
    if (diaSemana === 0 || diaSemana === 5 || diaSemana === 6){
        return base * 10 / 100;
    };
    return 0;
}

// Factorizacion - Adicionales por horario

Reserva.prototype.adicionalHorario = function(base) {
    const minutos = (this.horario.getHours() * 60) + this.horario.getMinutes();
    // Se le agrega un 5% adicional si el horario de reserva es 13 a 14 o de 20 a 21 
    if ((minutos >= 780 && minutos < 840) || (minutos >= 1200 && minutos < 1260)){
        return base * 5 / 100;
    };
    return 0;
}

// Descuentos por Grupo o segun codigo usado
Reserva.prototype.descuentos = function(baseCalculo) {
    return this.descuentosGrupo(baseCalculo) + this.descuentosCodigo(baseCalculo);
}

Reserva.prototype.descuentosGrupo = function(base) {
    let descuento = 0;
    // Descuentos: entree 4 y 6 personas, 5% de descuento. 7 y 8 personas un 10% de descuento y para 8 personas un 15% de descuento.
    if (this.cantidadPersonas >= 4 && this.cantidadPersonas < 6){
        descuento = 5;
    } else if (this.cantidadPersonas >= 6 && this.cantidadPersonas < 8) {
        descuento = 10;
    } else if (this.cantidadPersonas >= 8){
        descuento = 15;
    }
    return base * descuento / 100;
}

Reserva.prototype.descuentosCodigo = function(base) {
    let descuento = 0;

    if (this.codigoDescuento === 'DES15'){
        // Usando: DES15: obtiene un 15% de descuento.
        descuento = base * 15 /100 ;
    } else if (this.codigoDescuento === 'DES200') {
        // Usando: DES200: obtiene $200 de descuento.
        descuento = 200;
    } else if (this.codigoDescuento === 'DES1'){
        // Usando: DES1: obtiene de descuento el valor equivalente al precio de una persona.
        descuento = this.precioPersona;
    }
    return descuento;
}

// Copiamos de Guia 3 los ejemplos 
const listadoDeReservas  = [
    new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200"),
];