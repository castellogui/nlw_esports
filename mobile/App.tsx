import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginTop: 50,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 50
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! - Fixing git mobile folder</Text>
      <StatusBar style="auto" />
      <Button title="Okay!"></Button>
    </View>
  );
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

