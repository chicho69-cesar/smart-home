import { ScrollView, StyleSheet, View } from "react-native";

export function HorizontalList({ children }) {
  return <View style={styles.container}>
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal 
      style={styles.scroll}
    >
      {children}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  scroll: {
    paddingBottom: 15,
  },
});