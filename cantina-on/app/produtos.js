import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Produtos() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Para comer 😋</Text>
      <View style={styles.linha}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemSanduicheNatural.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Sanduíche Natural</Text>
            <Text style={styles.descricaoProduto}>Pão de forma, tomate cereja, salada, queijo e presunto</Text>
            <Text style={styles.precoProduto}>R$ 15</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemMiniPaesDeQueijo.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Mini Pães de Queijo</Text>
            <Text style={styles.descricaoProduto}>Contém 6 unidades</Text>
            <Text style={styles.precoProduto}>R$ 7,50</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.linha}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemSalgado.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Mini Salgado Assado</Text>
            <Text style={styles.descricaoProduto}>Unidade de salgado de carne, presunto e queijo ou frango</Text>
            <Text style={styles.precoProduto}>R$ 1,30</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemCoxinha.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Coxinha</Text>
            <Text style={styles.descricaoProduto}>Coxinha de carne, presunto e queijo ou frango com requeijão</Text>
            <Text style={styles.precoProduto}>R$ 8,50</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.linha}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemBoloDePote.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Bolo de Pote de Chocolate com Cookies</Text>
            <Text style={styles.descricaoProduto}>Novidade! Delicioso bolo de pote de chocolate com recheio sabor cookies n' cream!</Text>
            <Text style={styles.precoProduto}>R$ 12</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemBarraDeChocolate.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Barra de Chocolate</Text>
            <Text style={styles.descricaoProduto}>Barra de chocolate de 90g</Text>
            <Text style={styles.precoProduto}>R$ 7</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Para beber 🥤</Text>
      <View style={styles.linha}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemAguaMineral.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Água Mineral</Text>
            <Text style={styles.descricaoProduto}>Água mineral sem gás de 500ml</Text>
            <Text style={styles.precoProduto}>R$ 4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemCafe.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Café Expresso</Text>
            <Text style={styles.descricaoProduto}>Café Expresso de 200ml</Text>
            <Text style={styles.precoProduto}>R$ 5,50</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.linha}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemSucoDeLaranja.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Suco de Laranja</Text>
            <Text style={styles.descricaoProduto}>Suco de laranja de 500ml</Text>
            <Text style={styles.precoProduto}>R$ 11</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.caixaProduto}>
            <Image source={require('../assets/imagemEnergetico.png')} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>Energético</Text>
            <Text style={styles.descricaoProduto}>Energético de 300ml</Text>
            <Text style={styles.precoProduto}>R$ 13</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  caixaProduto: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#E83D84',
    margin: 5,
    borderRadius: 15,
    padding: 10,
    minHeight: 180,
  },
  imagemProduto: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  titulo:{
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  descricaoProduto: {
    fontSize: 14,
    color: '#666',
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textDecorationLine: 'underline',
    color: '#E83D84',
  },
});