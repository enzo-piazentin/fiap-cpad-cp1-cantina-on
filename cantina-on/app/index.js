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
    backgroundColor: '#000000' // Preto Puro
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  menuContainer: {
    backgroundColor: '#0D0D0D', // Grafite Muito Escuro
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#4B163B', // Vinho Escuro
    width: '90%',
  },
  menuItem: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#424242', // Cinza Escuro
  },
  menuItemSair: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontSize: 18,
    color: '#FFFFFF', // Branco
  },
  menuItemTextSair: {
    fontSize: 18,
    color: '#FF007F', // Magenta Vibrante para destaque
    fontWeight: 'bold',
  },
});