import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Ionicons name="menu-outline" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Quiz App</Text>
      </View>

      {/* Quiz Categories */}
      <TouchableOpacity style={{ width: '80%', backgroundColor: '#f2f2f2', padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 18 }}>General Knowledge</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width: '80%', backgroundColor: '#f2f2f2', padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 18 }}>Science</Text>
      </TouchableOpacity>

      {/* Other dashboard elements */}
      {/* Add more components as needed */}
    </View>
  );
};

export default Dashboard;
