import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    const nums = new Set();
    while (nums.size < 6) {
      nums.add(Math.floor(Math.random() * 60) + 1);
    }
    setNumeros([...nums]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Números da Loteria</Text>
      <Button title="Gerar Números" onPress={gerarNumeros} />
      {numeros.length > 0 && <Text style={styles.result}>Números: {numeros.join(', ')}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  result: { marginTop: 20, fontSize: 18 },
});

export default App;
