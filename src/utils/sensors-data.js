export const sensorsData = () => {
  return {
    sensors: [
      {
        id: 1,
        name: 'Temperatura de la sala',
        firebaseName: 'temperature1',
        icon: {
          name: 'thermometer',
          color: '#ef233c', 
          opacity: '#ef233caa',
        },
        concrete: false,
        lectures: [ '16' ]
      }, {
        id: 2,
        name: 'Temperatura de habitacion',
        firebaseName: 'temperature2',
        icon: {
          name: 'thermometer',
          color: '#ef233c', 
          opacity: '#ef233caa',
        },
        concrete: false,
        lectures: [ '20.5' ]
      }, {
        id: 3,
        name: 'Temperatura de la sala',
        firebaseName: 'humidity1',
        icon: {
          name: 'fire',
          color: '#ef233c', 
          opacity: '#ef233caa',
        },
        concrete: false,
        lectures: [ '18' ]
      }, {
        id: 4,
        name: 'Temperatura de habitacion',
        firebaseName: 'humidity2',
        icon: {
          name: 'fire',
          color: '#ef233c', 
          opacity: '#ef233caa',
        },
        concrete: false,
        lectures: [ '28' ]
      }, {
        id: 5,
        name: 'Lluvia',
        firebaseName: 'rain',
        icon: {
          name: 'bath',
          color: '#a8dadc', 
          opacity: '#a8dadcaa',
        },
        concrete: true,
        lectures: [ 'SI' ]
      }, {
        id: 6,
        name: 'Gases',
        firebaseName: 'smoke',
        icon: {
          name: 'exclamation-circle',
          color: '#dda15e', 
          opacity: '#dda15eaa',
        },
        concrete: true,
        lectures: [ '1' ]
      }, {
        id: 7,
        name: 'Distancia a la Entrada',
        firebaseName: 'distance1',
        icon: {
          name: 'bullhorn',
          color: '#ffb3c6', 
          opacity: '#ffb3c6aa',
        },
        concrete: false,
        lectures: [ '57' ]
      }, {
        id: 8,
        name: 'Distancia a la Habitacion',
        firebaseName: 'distance2',
        icon: {
          name: 'bullhorn',
          color: '#ffb3c6', 
          opacity: '#ffb3c6aa',
        },
        concrete: false,
        lectures: [ '12.35' ]
      }, {
        id: 9,
        name: 'Movimiento en la Entrada',
        firebaseName: 'motion1',
        icon: {
          name: 'volume-down',
          color: '#e6ccb2', 
          opacity: '#e6ccb2aa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      }, {
        id: 10,
        name: 'Movimiento en el cuarto de limpieza',
        firebaseName: 'motion2',
        icon: {
          name: 'male',
          color: '#e6ccb2', 
          opacity: '#e6ccb2aa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      }, {
        id: 11,
        name: 'Movimiento en la cocina',
        firebaseName: 'motion3',
        icon: {
          name: 'male',
          color: '#e6ccb2', 
          opacity: '#e6ccb2aa',
        },
        concrete: true,
        lectures: [ 'SI' ]
      }, {
        id: 12,
        name: 'Movimiento en el estudio',
        firebaseName: 'motion4',
        icon: {
          name: 'male',
          color: '#e6ccb2', 
          opacity: '#e6ccb2aa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      }, {
        id: 13,
        name: 'Actividad en la sala',
        firebaseName: 'infrared',
        icon: {
          name: 'map-pin',
          color: '#bc4b51', 
          opacity: '#bc4b51aa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      }, {
        id: 14,
        name: 'Vibracion',
        firebaseName: 'vibration',
        icon: {
          name: 'spinner',
          color: '#ffafcc', 
          opacity: '#ffafccaa',
        },
        concrete: true,
        lectures: [ 'SI' ]
      },
    ]
  };
}