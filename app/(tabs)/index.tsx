import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { VictoryAccessibleContainer } from '@/components/VictoryAccessibleContainer';

export default function HomeScreen() {
  const mockData = [
    { x: 1, y: 2000 },
    { x: 2, y: 3000 },
    { x: 3, y: 5000 },
    { x: 4, y: 4000 },
    { x: 5, y: 7000 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.name}>Sarah</Text>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "The only way to do great work is to love what you do."
          </Text>
          <Text style={styles.author}>- Steve Jobs</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Your Activity</Text>
          <View style={styles.chartContainer}>
            <VictoryChart 
              height={250} 
              padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
              containerComponent={
                <VictoryAccessibleContainer />
              }
            >
              <VictoryLine
                data={mockData}
                style={{
                  data: { stroke: "#6366F1" },
                }}
              />
              <VictoryAxis
                style={{
                  axis: { stroke: "#E2E8F0" },
                  tickLabels: { fontSize: 12, fontFamily: 'Inter-Regular' }
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: { stroke: "#E2E8F0" },
                  tickLabels: { fontSize: 12, fontFamily: 'Inter-Regular' }
                }}
              />
            </VictoryChart>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Steps</Text>
            <Text style={styles.statValue}>7,234</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Sleep</Text>
            <Text style={styles.statValue}>7h 30m</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statTitle}>Mood</Text>
            <Text style={styles.statValue}>😊</Text>
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
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748B',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1E293B',
    marginTop: 4,
  },
  quoteCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  quote: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
  },
  author: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },
  statsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 16,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  statTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1E293B',
  },
});