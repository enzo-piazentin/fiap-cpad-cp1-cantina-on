import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout(){
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#E83D84', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="carrinho"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="produtos"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <Ionicons name="fast-food" size={24} color={color} />,
        }}
      />


      <Tabs.Screen
        name="addSaldo"
        options={{
          title: 'Saldo',
          tabBarIcon: ({ color }) => <Ionicons name="fast-food" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="pagamento"
        options={{
          title: 'pagamento',
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} />,
        }}
      /> 

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}