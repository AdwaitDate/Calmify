import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/utils/ThemeContext';
import { Play, Calendar, Clock, TrendingUp } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SessionsScreen() {
  const { theme } = useTheme();

  const sessions = [
    {
      id: 1,
      title: 'Morning Meditation',
      duration: '10 min',
      schedule: 'Daily at 8:00 AM',
      progress: '7/10 completed',
    },
    {
      id: 2,
      title: 'Stress Relief',
      duration: '15 min',
      schedule: 'Mon, Wed, Fri',
      progress: '5/8 completed',
    },
    {
      id: 3,
      title: 'Deep Sleep',
      duration: '20 min',
      schedule: 'Every night',
      progress: '12/15 completed',
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          Sessions
        </Text>
        <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
          Your mindfulness journey
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {sessions.map((session) => (
          <View
            key={session.id}
            style={[styles.sessionCard, { backgroundColor: theme.card }]}
          >
            <LinearGradient
              colors={[theme.primary + '15', 'transparent']}
              style={styles.cardGradient}
            />
            <View style={styles.sessionHeader}>
              <Text
                style={[styles.sessionTitle, { color: theme.text.primary }]}
              >
                {session.title}
              </Text>
              <TouchableOpacity
                style={[styles.playButton, { backgroundColor: theme.primary }]}
              >
                <Play size={20} color={theme.text.inverse} />
              </TouchableOpacity>
            </View>

            <View style={styles.sessionDetails}>
              <View style={styles.detailItem}>
                <Clock size={16} color={theme.text.secondary} />
                <Text
                  style={[styles.detailText, { color: theme.text.secondary }]}
                >
                  {session.duration}
                </Text>
              </View>
              <View style={styles.detailItem}>
                <Calendar size={16} color={theme.text.secondary} />
                <Text
                  style={[styles.detailText, { color: theme.text.secondary }]}
                >
                  {session.schedule}
                </Text>
              </View>
              <View style={styles.detailItem}>
                <TrendingUp size={16} color={theme.text.secondary} />
                <Text
                  style={[styles.detailText, { color: theme.text.secondary }]}
                >
                  {session.progress}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Account for tab bar
  },
  sessionCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
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
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sessionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionDetails: {
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});
