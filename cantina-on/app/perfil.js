import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho do Perfil */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Guilherme RM: 565157</Text>
        <Text style={styles.curso}>Curso: Ciência da Computação</Text>
        <Text style={styles.email}>guilherme.califoni@fiap.com.br</Text>
        
      </View>

      {/* Card de Saldo */}
      <View style={styles.cardSaldo}>
        <Text style={styles.saldoTitle}>Saldo Disponível</Text>
        <Text style={styles.saldoValue}>R$ 45,50</Text>
        
        {/* Botão que navega para a tela addSaldo.js */}
        <TouchableOpacity 
          style={styles.btnSaldo} 
          onPress={() => router.push('/addSaldo')}
        >
          <Text style={styles.btnSaldoText}>+ Adicionar Saldo</Text>
        </TouchableOpacity>
      </View>

      {/* Menu de Opções */}
      <View style={styles.menuContainer}>
        
        {/* Botão que navega para a tela carrinho.js */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/carrinho')}>
          <Text style={styles.menuItemText}>🍔 Meus Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>⚙️ Configurações da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/ajuda')}>
          <Text style={styles.menuItemText}>❓ Ajuda e Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.menuItemSair]}>
          <Text style={styles.menuItemTextSair}>🚪 Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  curso: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  cardSaldo: {
    backgroundColor: '#4CAF50', // Verde estilo "dinheiro/cantina"
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  saldoTitle: {
    color: '#E8F5E9',
    fontSize: 16,
  },
  saldoValue: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btnSaldo: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  btnSaldoText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 30,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemSair: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  menuItemTextSair: {
    fontSize: 16,
    color: '#FF3B30', // Vermelho para destacar a opção de sair
    fontWeight: 'bold',
  },
});