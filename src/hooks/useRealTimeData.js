import database from "@react-native-firebase/database";

const rootRef = database().ref();
const dataRef = rootRef.child("path/to/data");

const useRealTimeData = () => {
  dataRef.on("value", (snapshot) => {
    console.log("Datos actualizados:", snapshot.val());
  });

  const data = snapshot.val();

  return { data };
}

export default useRealTimeData;