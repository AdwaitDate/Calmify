import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Brain, Wind, Book } from 'lucide-react-native';

export default function SessionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Wellness Sessions</Text>
          <Text style={styles.subtitle}>Choose your practice for today</Text>
        </View>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
              <Brain size={24} color="#6366F1" />
            </View>
            <Text style={styles.categoryTitle}>Meditation</Text>
            <Text style={styles.categoryDescription}>Guided sessions for inner peace</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
              <Wind size={24} color="#22C55E" />
            </View>
            <Text style={styles.categoryTitle}>Breathing</Text>
            <Text style={styles.categoryDescription}>Calming breathing exercises</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
              <Book size={24} color="#F59E0B" />
            </View>
            <Text style={styles.categoryTitle}>Journaling</Text>
            <Text style={styles.categoryDescription}>Express your thoughts</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Recent Sessions</Text>
          <View style={styles.historyCard}>
            <Text style={styles.historyTitle}>Morning Meditation</Text>
            <Text style={styles.historyDate}>Today, 8:30 AM</Text>
            <Text style={styles.historyDuration}>15 minutes</Text>
          </View>
          <View style={styles.historyCard}>
            <Text style={styles.historyTitle}>Deep Breathing</Text>
            <Text style={styles.historyDate}>Yesterday, 9:00 PM</Text>
            <Text style={styles.historyDuration}>10 minutes</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1E293B',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B',
    marginTop: 4,
  },
  categoriesContainer: {
    padding: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 8,
  },
  categoryDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  historySection: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 16,
  },
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  historyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 4,
  },
  historyDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  historyDuration: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6366F1',
  },
});