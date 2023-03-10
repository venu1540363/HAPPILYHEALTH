import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import boxinfo from '/Projects/HAPPILYHEALTH/boxinfo.json';

const numColumns = 3;
const ITEM_WIDTH =normalize(112);
const ITEM_HEIGHT =normalize(94);

const Box = ({ title, image }) => {
  return (
    <View style={styles.box}>
      <Image source={{ uri: image }} style={styles.boxImage} />
      <Text style={styles.boxTitle}>{title}</Text>
    </View>
  );
};

const BoxGrid = () => {
  const renderItem = ({ item }) => {
    return <Box title={item.title} image={item.image} />;
  };

  return (
    <FlatList
      data={boxinfo.DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding:normalize(16),
		paddingTop: 0,
		alignSelf: 'center',
  },
  columnWrapper: {
    justifyContent: 'flex-start'
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderWidth:normalize(1),
    borderColor: '#000',
    justifyContent: 'center',
    backgroundColor: '#231732',
    borderRadius:normalize(10),
    alignItems: 'center',
    margin:normalize(5),
  },
  boxImage: {
    width: ITEM_WIDTH - normalize(20),
    height: ITEM_HEIGHT - normalize(50),
    // resizeMode: 'contain',
    // marginBottom: normalize(10),
    // backgroundColor: '#FFF',
  },
  boxTitle: {
    fontSize:normalize(18),
    fontWeight:500,
		color: '#FFF',
		textAlign: 'center'
  },
});

export default BoxGrid;
