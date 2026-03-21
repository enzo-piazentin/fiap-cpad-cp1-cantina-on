import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const imagem = {
    source: require('../img/Mascote-On.png')
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagem.source}
        style={styles.avatar}
      />

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ir para Sobre</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/produtos')}>
        <Text style={styles.botaoTexto}>Ir para Produtos</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center',
   justifyContent: 'center', 
   backgroundColor: '#ffffff' 
  },
  
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 24 
  },
  
  botao: { 
    backgroundColor: '#E83D84', 
    padding: 16, 
    borderRadius: 12 
  },

  botaoTexto: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  avatar: {
    width: 150,
    height: 150,
    marginBottom: 20,
  }
},


);