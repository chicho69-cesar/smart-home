export const sensorsData = () => {
  return {
    sensors: [
      {
        id: 1,
        name: 'Temperatura y Humedad',
        functionality: '',
        icon: {
          name: 'fire',
          color: '#ef233c', 
          opacity: '#ef233caa',
        },
        concrete: false,
        lectures: [ '29' ]
      }, {
        id: 2,
        name: 'Lluvia',
        functionality: '',
        icon: {
          name: 'bath',
          color: '#a8dadc', 
          opacity: '#a8dadcaa',
        },
        concrete: true,
        lectures: [ 'SI' ]
      }, {
        id: 3,
        name: 'Humedad de tierra',
        functionality: '',
        icon: {
          name: 'thermometer',
          color: '#48cae4', 
          opacity: '#48cae4aa',
        },
        concrete: false,
        lectures: [ '35' ]
      }, {
        id: 4,
        name: 'Ruido',
        functionality: '',
        icon: {
          name: 'volume-down',
          color: '#e5989b', 
          opacity: '#e5989baa',
        },
        concrete: false,
        lectures: [ '24' ]
      }, {
        id: 5,
        name: 'Gases',
        functionality: '',
        icon: {
          name: 'exclamation-circle',
          color: '#dda15e', 
          opacity: '#dda15eaa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      }, {
        id: 6,
        name: 'Ultrasonico',
        functionality: '',
        icon: {
          name: 'bullhorn',
          color: '#ffb3c6', 
          opacity: '#ffb3c6aa',
        },
        concrete: false,
        lectures: [ '10' ]
      }, {
        id: 7,
        name: 'Movimiento',
        functionality: '',
        icon: {
          name: 'male',
          color: '#e6ccb2', 
          opacity: '#e6ccb2aa',
        },
        concrete: true,
        lectures: [ 'SI' ]
      }, {
        id: 8,
        name: 'Infrarojo',
        functionality: '',
        icon: {
          name: 'map-pin',
          color: '#bc4b51', 
          opacity: '#bc4b51aa',
        },
        concrete: false,
        lectures: [ '10' ]
      }, {
        id: 9,
        name: 'Vibracion',
        functionality: '',
        icon: {
          name: 'spinner',
          color: '#ffafcc', 
          opacity: '#ffafccaa',
        },
        concrete: true,
        lectures: [ 'NO' ]
      },
    ]
  };
}