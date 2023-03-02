import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ProgressWidget from './ProgressWidget';
import globalTheme from '../theme/global-theme';

export const Lecture = ({ id, name, functionality, icon, concrete, lectures }) => {
  return lectures !== undefined
    ? (
      <View style={stylesLecture.container}>
        <Text style={stylesLecture.titleLecture}>Lectura del sensor</Text>
        {
          concrete
            ? <LectureConcrete
              id={id}
              name={name}
              functionality={functionality}
              icon={icon}
              concrete={concrete}
              lectures={lectures}
            />
            : <LectureTacometer
              id={id}
              name={name}
              functionality={functionality}
              icon={icon}
              concrete={concrete}
              lectures={lectures}
            />
        }
      </View>
    )
    : <View style={stylesLecture.container}></View>;
}

const stylesLecture = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 20
  },
  titleLecture: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export const LectureTacometer = ({ id, name, functionality, icon, concrete, lectures }) => {
  const getLastLecture = lectures => {
    return +(lectures[lectures.length - 1]);
  }
  
  const getProgress = id => {
    switch (id) {
      case 1: 
        let temperature = getLastLecture(lectures);
        return (temperature + 10) * 2;
      case 3:
        let earthHumidity = getLastLecture(lectures);
        return 100 - (earthHumidity * 100 / 1024);
      case 4:
        let sony = getLastLecture(lectures);
        return sony * 100 / 450;
      case 6:
        let distance = getLastLecture(lectures);
        return 100 - (distance * 100 / 448);
    }

    return 0;
  }

  return (
    <View>
      <ProgressWidget
        id={id}
        name={name}
        functionality={functionality}
        icon={icon}
        concrete={concrete}
        lectures={lectures}
        data={getLastLecture(lectures)}
        progress={getProgress(id)}
      />
    </View>
  );
}

export const LectureConcrete = ({ id, name, functionality, icon, concrete, lectures }) => {
  const getLastLecture = lectures => {
    return lectures[lectures.length - 1];
  }

  const isActive = () => {
    console.log(lectures);
    return getLastLecture(lectures) === 'SI';
  }
  
  return (
    <View style={stylesConcrete.alertContainer}>
      <View style={stylesConcrete.alert}>
        {
          isActive()
            ? <View>
              <Text style={stylesConcrete.activeTitle}>
                El sensor esta registrando actividad
              </Text>
    
              <Text style={stylesConcrete.activeSubtitle}>
                Revisa que no haya ningun problema
              </Text>
            </View>
            : <View>
              <Text style={stylesConcrete.pasiveTitle}>
                El sensor no muestra actividad
              </Text>
    
              <Text style={stylesConcrete.pasiveSubtitle}>
                Las lecturas indican que todo esta bien
              </Text>
            </View>
        }

        <View>
          <FontAwesome5 
            name={ icon.name} size={40} 
            color={icon.color}
          />
        </View>
      </View>
    </View>
  );
}

const stylesConcrete = StyleSheet.create({
  alertContainer: {
    width: '100%',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: globalTheme.colors.white.whitePrimary,
    borderRadius: 8,
    elevation: 2
  },
  alert: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  activeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  activeSubtitle: {
    fontSize: 14,
    color: 'red'
  },
  pasiveTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#404040'
  },
  pasiveSubtitle: {
    fontSize: 14,
    color: '#404040'
  }
});