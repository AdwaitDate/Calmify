import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send } from 'lucide-react-native';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your mental health companion. How are you feeling today?", isBot: true },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message, isBot: false }]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "I understand how you're feeling. Would you like to talk more about it?",
          isBot: true
        }]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Mental Health Companion</Text>
          <Text style={styles.subtitle}>Your AI wellness assistant</Text>
        </View>

        <ScrollView style={styles.messagesContainer}>
          {messages.map(msg => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.isBot ? styles.botBubble : styles.userBubble
              ]}
            >
              <Text style={[
                styles.messageText,
                msg.isBot ? styles.botText : styles.userText
              ]}>
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            placeholderTextColor="#94A3B8"
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Send size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1E293B',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  botBubble: {
    backgroundColor: '#F1F5F9',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#6366F1',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  botText: {
    color: '#1E293B',
    fontFamily: 'Inter-Regular',
  },
  userText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});