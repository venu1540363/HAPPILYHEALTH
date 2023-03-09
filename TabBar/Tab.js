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
import normalize from 'react-native-normalize';

const BottomNavBar = () => {
	return (
		<View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <Entypo name="home" size={normalize(20)} style={{alignSelf: 'center', color: 'black'}} />
        <Text style={styles.bottomNavText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <MaterialIcons name="search" size={normalize(20)} style={{alignSelf: 'center', color: 'black'}} />
        <Text style={styles.bottomNavText}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navigate to Home Screen')}>
        <MaterialCommunityIcons
          name="widgets"
          size={normalize(20)}
          style={{alignSelf: 'center', 
          color: 'black',
        }}
        />
        <Text style={styles.bottomNavText}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Settings Screen')}>
        <Entypo name="star" size={normalize(20)} style={{alignSelf: 'center', color: 'black'}} />
        <Text style={styles.bottomNavText}>Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Profile Screen')}>
        <MaterialIcons name="person" size={normalize(20)} style={{alignSelf: 'center', color: 'black'}} />
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
    position: 'absolute',
    paddingVertical:normalize(8),
    bottom:normalize(0),
    left:normalize(0),
    right:normalize(0),
    borderTopRightRadius:normalize(10),
    borderTopLeftRadius:normalize(10),
  },
  bottomNavText: {
    fontSize:normalize(12),
    marginTop: normalize(5),
    color: 'black'
  },
})

export default BottomNavBar;
