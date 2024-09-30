import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import users from './credenciais.js';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUserData(user);
    } else {
      alert('Credenciais inválidas!');
    }
  };

  if (userData) {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo, {userData.name}!</Text>
        <Text style={styles.infoText}>Email: {userData.email}</Text>
        <Text style={styles.infoText}>Nome: {userData.name}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setUserData(null)}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#6A0DAD', // roxo
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A0DAD', // roxo
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#8A2BE2', // roxo claro
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#8A2BE2', // roxo claro
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
