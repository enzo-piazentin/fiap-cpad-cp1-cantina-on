import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  const produtos = {
    coxinha: "https://panattos.com.br/produto/coxinha-frango-requeijao-massa-congelada"};
  return (
    <View style={styles.mainContainer}>

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
  
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffffff'
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
});