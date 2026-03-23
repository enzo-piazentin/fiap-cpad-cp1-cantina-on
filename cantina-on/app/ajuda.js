import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function AjudaSuporte() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.btnVoltar}>
          <Text style={styles.btnVoltarText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ajuda e Suporte</Text>
        <Text style={styles.subtitle}>Como podemos te ajudar hoje?</Text>
      </View>

      {/* Seção de Dúvidas Frequentes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dúvidas Frequentes</Text>
        
        <View style={styles.faqCard}>
          <Text style={styles.faqQuestion}>Como peço reembolso?</Text>
          <Text style={styles.faqAnswer}>Vá até a aba de pedidos, selecione o pedido desejado e clique em "Solicitar Reembolso".</Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.faqQuestion}>Posso agendar uma retirada?</Text>
          <Text style={styles.faqAnswer}>Sim! Na tela de carrinho você pode escolher retirar o lanche no horário do seu intervalo.</Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.faqQuestion}>Minha recarga de saldo não caiu, e agora?</Text>
          <Text style={styles.faqAnswer}>Recargas via PIX podem levar até 5 minutos. Se demorar mais, entre em contato no botão abaixo.</Text>
        </View>
      </View>

      {/* Seção de Contato */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ainda precisa de ajuda?</Text>
        
        <TouchableOpacity style={styles.contactBtnWhatsApp}onPress={() => router.push('/Desenvolvimento')}>
          <Text style={styles.contactBtnText}>💬 Falar no WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactBtnEmail }onPress={() => router.push('/Desenvolvimento')}>
          <Text style={styles.contactBtnTextEmail}>✉️ Enviar E-mail para a Cantina</Text>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  btnVoltar: {
    marginBottom: 15,
  },
  btnVoltarText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  faqCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactBtnWhatsApp: {
    backgroundColor: '#25D366', // Cor oficial do WhatsApp
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  contactBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactBtnEmail: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  contactBtnTextEmail: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});