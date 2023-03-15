import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import data from '../boxinfo';

const numColumns = 3;
const ITEM_WIDTH = normalize(111);
const ITEM_HEIGHT = normalize(88);

const Box = ({title, image}) => {
  return (
 
      <View style={styles.box}>
     <Image source={image} style={styles.image}/> 
      <Text style={styles.boxTitle}>{title}</Text>
    </View>

  );
};

const BoxGrid = () => {
  const renderItem = ({item}) => {
    return <Box title={item.title} image={item.image} />;
  };

  // console.log(data);

  return (
    <View > 
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      // contentContainerStyle={styles.container}
      contentContainerStyle={{ justifyContent: 'center', flexDirection: 'column'}}
      
    /></View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: normalize(16),
    paddingTop: 0,
    alignSelf: 'center',
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    marginRight: normalize(10),
    marginBottom: normalize(10),
    borderColor: '#000',
    padding:8,
    backgroundColor: '#231732',
    alignItems: 'center',
  },
  boxImage: {
    width: ITEM_WIDTH - normalize(20),
    height: ITEM_HEIGHT - normalize(50),
    backgroundColor: '#FFF',
  },
  boxTitle: {
    fontSize: normalize(14),
    fontWeight: 500,
    color: '#FFF',
    textAlign: 'center',
    fontFamily:'SF Pro Display',
  },
  image : {
    margin:8
  }
});

export default BoxGrid;
