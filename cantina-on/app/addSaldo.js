import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddSaldo() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.push('/perfil')}>
        <Text style={styles.btnVoltarText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Adicionar Saldo</Text>
      <Text style={styles.subtitle}>Quanto você quer colocar na sua conta da cantina?</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.currency}>R$</Text>
        <TextInput
          style={styles.input}
          placeholder="0,00"
          placeholderTextColor="#424242"
          maxLength={8}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.quickValuesContainer}>
        <TouchableOpacity style={styles.quickValueBtn}>
          <Text style={styles.quickValueText}>+ R$ 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickValueBtn}>
          <Text style={styles.quickValueText}>+ R$ 20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickValueBtn}>
          <Text style={styles.quickValueText}>+ R$ 50</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnConfirmar} onPress={() => router.back()}>
        <Text style={styles.btnConfirmarText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'center',
  },
  btnVoltar: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  btnVoltarText: {
    fontSize: 16,
    color: '#BD1E7C',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF007F',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#BDBDBD',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#4B163B',
  },
  currency: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#BD1E7C',
    marginRight: 10,
  },
  input: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 150,
  },
  quickValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  quickValueBtn: {
    backgroundColor: '#0D0D0D',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BD1E7C',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  quickValueText: {
    color: '#FF007F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnConfirmar: {
    backgroundColor: '#FF007F',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  btnConfirmarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});