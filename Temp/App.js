import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [temperatura, setTemperatura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [tipo, setTipo] = useState('Celsius');

  const converterTemperatura = () => {
    let converted;
    if (tipo === 'Celsius') {
      converted = (temperatura * 9/5) + 32; // Celsius para Fahrenheit
      setResultado(`${converted.toFixed(2)} °F`);
    } else {
      converted = (temperatura - 32) * 5/9; // Fahrenheit para Celsius
      setResultado(`${converted.toFixed(2)} °C`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Temperatura</Text>
      <TextInput
        placeholder="Temperatura"
        keyboardType="numeric"
        value={temperatura}
        onChangeText={setTemperatura}
        style={styles.input}
      />
      <Button title={`Converter para ${tipo === 'Celsius' ? 'Fahrenheit' : 'Celsius'}`} onPress={converterTemperatura} />
      {resultado && <Text style={styles.result}>Resultado: {resultado}</Text>}
      <Button title="Alternar" onPress={() => setTipo(tipo === 'Celsius' ? 'Fahrenheit' : 'Celsius')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  result: { marginTop: 20, fontSize: 18 },
});

export default App;
