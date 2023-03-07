import React from 'react'
import { StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavBar = () => {
	return (
		<View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <Entypo name="home" size={20} style={{alignSelf: 'center'}} />
        <Text style={styles.bottomNavText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <MaterialIcons name="search" size={20} style={{alignSelf: 'center'}} />
        <Text style={styles.bottomNavText}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <MaterialCommunityIcons
          name="widgets"
          size={20}
          style={{alignSelf: 'center'}}
        />
        <Text style={styles.bottomNavText}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Settings Screen')}>
        <Entypo name="star" size={20} style={{alignSelf: 'center'}} />
        <Text style={styles.bottomNavText}>Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Profile Screen')}>
        <MaterialIcons name="person" size={20} style={{alignSelf: 'center'}} />
        <Text style={styles.bottomNavText}>Profile</Text>
      </TouchableOpacity>
    </View>
	);
};

const styles = StyleSheet.create({
	bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bottomNavText: {
    fontSize: 12,
    marginTop: 5,
  },
})

export default BottomNavBar
