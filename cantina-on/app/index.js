import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const imagem = {
    source: require('../img/MascoteOn.png')
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagem.source}
        style={styles.avatar}
      />

      <View style={styles.menuContainer}>
        {/* Botão que navega para a tela carrinho.js */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/carrinho')}>
          <Text style={styles.menuItemText}>🛒 Meu Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/addSaldo')}>
          <Text style={styles.menuItemText}>💰 Adicionar Saldo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/ajuda')}>
          <Text style={styles.menuItemText}>❓ Ajuda e Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.menuItemSair]}>
          <Text style={styles.menuItemTextSair}>⚙️ Configurações da Conta</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center',
   justifyContent: 'center', 
   backgroundColor: '#F5F5F5' 
  },
  
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 24 
  },

  botaoTexto: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  menuContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
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
    fontSize: 18,
    color: '#333',
  },
  menuItemTextSair: {
    fontSize: 18,
    color: '#FF3B30', // Vermelho para destacar a opção de sair
    fontWeight: 'bold',
  },
},
);