import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import globalTheme from '../theme/global-theme';

export default function Register({ navigation }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');

  const handleRegister = () => {
    // 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>

      <TextInput
        theme={{
          colors: {
            primary: globalTheme.colors.blue.blue700,
          },
        }}
        textColor={globalTheme.colors.blue.blue700}
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        theme={{
          colors: {
            primary: globalTheme.colors.blue.blue700,
          },
        }}
        textColor={globalTheme.colors.blue.blue700}
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        theme={{
          colors: {
            primary: globalTheme.colors.blue.blue700,
          },
        }}
        textColor={globalTheme.colors.blue.blue700}
        label="Repetir contraseña"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button 
        mode="contained" 
        onPress={handleRegister} 
        style={styles.button}
      >
        Registrarse
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Iniciar sesión aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalTheme.colors.blue.blue100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#aaa',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    marginTop: 10,
    backgroundColor: globalTheme.colors.blue.blue700
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});