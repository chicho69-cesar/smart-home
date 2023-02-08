import firebase from "@react-native-firebase/auth";

const AuthenticateUser = (email, password) => {
  let auth = false;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("Autenticación exitosa:", user);
      auth = true;
    })
    .catch(function(error) {
      console.error("Error de autenticación:", error);
      auth = false
    });

  return auth;
}

export default AuthenticateUser;