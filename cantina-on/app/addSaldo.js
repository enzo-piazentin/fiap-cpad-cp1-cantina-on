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
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.push('/perfil')}>
        <Text style={styles.btnVoltarText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Adicionar Saldo</Text>
      <Text style={styles.subtitle}>Quanto você quer colocar na sua conta da cantina?</Text>

      {/* Input de Valor */}
      <View style={styles.inputContainer}>
        <Text style={styles.currency}>R$</Text>
        <TextInput
          style={styles.input}
          placeholder="0,00"
          maxLength={8}
        />
      </View>

      {/* Botões de Valores Rápidos (Apenas visuais) */}
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

      {/* Botão Confirmar (Apenas volta para o Perfil) */}
      <TouchableOpacity style={styles.btnConfirmar} onPress={() => router.back()}>
        <Text style={styles.btnConfirmarText}>Confirmar Pagamento</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  currency: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 10,
  },
  input: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    width: 150,
  },
  quickValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  quickValueBtn: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4CAF50',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  quickValueText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnConfirmar: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  btnConfirmarText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});