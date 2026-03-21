import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  const produtos = {
    coxinha: "https://panattos.com.br/produto/coxinha-frango-requeijao-massa-congelada"};
  const imagem = {
    source: require('../img/MascoteOn.png')
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.faixa}>
        <Text style={styles.faixaTexto}></Text>
      </View>

      <Image
        source={imagem.source}
        style={styles.imagem}
      />

      <View style={styles.container}> 
        
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/produtos')}>
          <Text style={styles.botaoTexto}></Text>
          <Image
            source={{ uri: produtos.coxinha }}
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/produtos')}>
          <Text style={styles.botaoTexto}>Ir para Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  faixa: {
    backgroundColor: '#ed145b',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  
  faixaTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffffff'
  },
  
  titulo:    { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 24 
  },

  botao: { 
    position: 'relative',
    backgroundColor: '#E83D84', 
    
    borderRadius: 12, 
  },

  botaoTexto:{ 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  imagem: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 100,
    height: 100,
    zIndex: 10
  }
});