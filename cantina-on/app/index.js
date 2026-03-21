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

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ir para Sobre</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
        <Text style={styles.botaoTexto}>👤 Acessar Perfil</Text>
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
    width: 200,
    height: 200,
    marginBottom: 20,
  }
},


);