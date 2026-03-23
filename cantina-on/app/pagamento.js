import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Pagamento() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>

      <Text style={styles.titulo}>Pagamento</Text>

      {/* Container centralizado */}
      <View style={styles.opcoesContainer}>

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>📱 Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>💳 Cartão de Crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>💵 Cartão de Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>🍽️ Refeição</Text>
        </TouchableOpacity>

      </View>

      {/* Rodapé */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total: R$ 8.50</Text>

        <TouchableOpacity
          style={styles.botaoConfirmar}
          onPress={() => alert('Pedido confirmado!')}
        >
          <Text style={styles.botaoTexto}>Pagar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
} 

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  opcoesContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

 
  opcao: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  opcaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  totalContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },

  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },

  botaoConfirmar: {
    backgroundColor: '#E83D84',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});