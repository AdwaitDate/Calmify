import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { VictoryAccessibleContainer } from '@/components/VictoryAccessibleContainer';
import { useTheme } from '@/utils/ThemeContext';
import { useRef, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const mockData = [
    { x: 1, y: 2000 },
    { x: 2, y: 3000 },
    { x: 3, y: 5000 },
    { x: 4, y: 4000 },
    { x: 5, y: 7000 },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View
          style={[
            styles.header,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={[styles.greeting, { color: theme.text.secondary }]}>
            Good morning,
          </Text>
          <Text style={[styles.name, { color: theme.text.primary }]}>
            Sarah
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.quoteCard,
            {
              backgroundColor: theme.card,
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <LinearGradient
            colors={[theme.primary + '20', 'transparent']}
            style={styles.cardGradient}
          />
          <Text style={[styles.quote, { color: theme.text.primary }]}>
            "The only way to do great work is to love what you do."
          </Text>
          <Text style={[styles.author, { color: theme.text.secondary }]}>
            - Steve Jobs
          </Text>
        </Animated.View>

        <View style={styles.statsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
            Your Activity
          </Text>
          <Animated.View
            style={[
              styles.chartContainer,
              {
                backgroundColor: theme.card,
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <VictoryChart
              height={250}
              padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
              containerComponent={<VictoryAccessibleContainer />}
            >
              <VictoryLine
                data={mockData}
                style={{
                  data: { stroke: theme.primary },
                }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
              />
              <VictoryAxis
                style={{
                  axis: { stroke: theme.border },
                  tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Inter-Regular',
                    fill: theme.text.secondary,
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  axis: { stroke: theme.border },
                  tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Inter-Regular',
                    fill: theme.text.secondary,
                  },
                }}
              />
            </VictoryChart>
          </Animated.View>
        </View>

        <View style={styles.statsGrid}>
          {[
            { title: 'Steps', value: '7,234' },
            { title: 'Sleep', value: '7h 30m' },
            { title: 'Mood', value: '😊' },
          ].map((stat, index) => (
            <Animated.View
              key={stat.title}
              style={[
                styles.statCard,
                {
                  backgroundColor: theme.card,
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <LinearGradient
                colors={[theme.primary + '10', 'transparent']}
                style={styles.cardGradient}
              />
              <Text style={[styles.statTitle, { color: theme.text.secondary }]}>
                {stat.title}
              </Text>
              <Text style={[styles.statValue, { color: theme.text.primary }]}>
                {stat.value}
              </Text>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Account for tab bar
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginTop: 4,
  },
  quoteCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cardGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
  quote: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  author: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginTop: 8,
  },
  statsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    marginBottom: 16,
  },
  chartContainer: {
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  statTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
});
