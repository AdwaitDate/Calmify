import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Moon, Bell, Trash2 } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileImagePlaceholder}>
            <User size={32} color="#94A3B8" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileEmail}>sarah.j@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Moon size={20} color="#64748B" />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              trackColor={{ false: "#CBD5E1", true: "#818CF8" }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#CBD5E1"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Bell size={20} color="#64748B" />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: "#CBD5E1", true: "#818CF8" }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#CBD5E1"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Data</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingText}>Connect Google Fit</Text>
            </View>
            <Switch
              trackColor={{ false: "#CBD5E1", true: "#818CF8" }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#CBD5E1"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingText}>Connect Apple Health</Text>
            </View>
            <Switch
              trackColor={{ false: "#CBD5E1", true: "#818CF8" }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#CBD5E1"
            />
          </View>
        </View>

        <View style={styles.dangerSection}>
          <TouchableOpacity style={styles.deleteButton}>
            <Trash2 size={20} color="#EF4444" />
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 24,
  },
  profileImagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1E293B',
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  editButton: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#6366F1',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1E293B',
    marginLeft: 12,
  },
  dangerSection: {
    padding: 20,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 8,
  },
  deleteButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#EF4444',
    marginLeft: 8,
  },
});