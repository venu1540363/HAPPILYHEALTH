import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from 'react-native';
import normalize from 'react-native-normalize';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TopNavBar = () => {
  const cities = [
    {id: 1, name: 'Bangalore'},
    {id: 2, name: 'Mumbai'},
    {id: 3, name: 'Delhi'},
    {id: 4, name: 'Chennai'},
    {id: 5, name: 'Hyderabad'},
    {id: 6, name: 'Vijayawada'},
    {id: 7, name: 'Kerala'},
  ];
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLocationChange = location => {
    setSelectedLocation(location);
    setModalVisible(false);
  };

  const renderCity = ({item}) => (
    <TouchableOpacity onPress={() => handleLocationChange(item.name)}>
      <Text style={styles.cityItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.locationContainer}>
          <MaterialIcons
            style={styles.locIcon}
            name="location-on"
            size={20}
            color="white"
          />
          <Text style={styles.locationText}>{selectedLocation}</Text>
          <Entypo
            name="chevron-down"
            size={20}
            color="white"
            style={styles.drop}
          />
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => console.log('Show notifications')}>
          <MaterialCommunityIcons
            name="bell"
            size={25}
            color="white"
            style={styles.bell}
          />
        </TouchableOpacity>
        <MaterialIcons
          name="more-vert"
          size={25}
          color="#FFF"
          style={styles.menu}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <FlatList
            data={cities}
            renderItem={renderCity}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    width:normalize(428),
    height:normalize(78),
    marginBottom:normalize(5),
  },
  locIcon: {
    paddingTop:normalize(29),
    paddingLeft:normalize(21),
    paddingBottom:normalize(30),
  },
  locationText: {
    color: '#FFF',
    position: 'absolute',
    fontSize: normalize(16),
    top:normalize(28.5),
    left:normalize(45),
  },
  drop: {
    position: 'absolute',
    left:normalize(120),
    top:normalize(29),
  },
  bell: {
    position: 'absolute',
    left:normalize (300),
    bottom:normalize(30),
  },
  menu: {
    left:normalize(345),
    bottom:normalize(53),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#231732',
  },
  cityItem: {
    color: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
});

export default TopNavBar;
