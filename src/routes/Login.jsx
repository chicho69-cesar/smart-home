import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import { loginValidationSchema } from "../validations/login-validations";
import globalTheme from "../theme/global-theme";

export default function Login({ navigation }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleLogin = async () => {
    try {
      await loginValidationSchema.validate({ email, password });
      setError('');
      
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setPersistence(auth, browserSessionPersistence);
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
      } catch (err) {
        console.log(err);
        setError('Error al iniciar sesion');
      }
    } catch (err) {
      const { errors } = err;
      setError(errors[0]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        theme={{
          colors: {
            primary: globalTheme.colors.blue.blue700,
          },
        }}
        textColor={globalTheme.colors.blue.blue700}
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        theme={{
          colors: {
            primary: globalTheme.colors.blue.blue700,
          },
        }}
        textColor={globalTheme.colors.blue.blue700}
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button 
        mode="contained" 
        onPress={handleLogin} 
        style={styles.button}
      >
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Haz solicitud de registro aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});