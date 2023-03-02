import { View, Text } from 'react-native';
import ProgressWidget from './ProgressWidget';

export const Lecture = ({ id, name, functionality, icon, concrete, lectures }) => {
  return lectures !== undefined
    ? (
      <View>
        {
          concrete
            ? <LectureConcrete/>
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
    : <View></View>;
}

export const LectureTacometer = ({ id, name, functionality, icon, concrete, lectures }) => {
  const getLastLecture = lectures => {
    return +(lectures[lectures.length - 1]);
  }
  
  const getProgress = id => {
    switch (id) {
      case 1: 
        let temperature = getLastLecture(lectures);
        return (temperature + 10) * 2;
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

export const LectureConcrete = () => {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
}