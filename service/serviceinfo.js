import React from 'react';
import props from '../info.json';
import {Image, StyleSheet} from 'react-native';
import {View, Text, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import theme from '../theme';

const ScrollingBox = () => {
  return (
    <View style={styles.svStyle}>
      <ScrollView horizontal>
        {props.scrolling.length !== 0
          ? props.scrolling.map(each => {
              return (
                <View key={each.id} style={styles.container}>
                  <View>
                            <Image
                    source={require('../images/doc.png')}
                    style={styles.image}></Image>
                  </View>
                  <View style={styles.textInBox}>
                    <Text style={styles.heading}>{each.title}</Text>
                    <Text style={styles.content}>{each.name}</Text>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  svStyle: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 2,
    paddingBottom: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  container: {
    width: normalize(112),
    height: normalize(148),
    marginRight: theme.spacing.small,
    backgroundColor: '#231732',
    borderRadius: 12,
    alignItems: 'center',
  },
  image: {
    width: normalize(110),
    height: normalize(60),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  }, 
  textInBox:{
    alignItems:"center",
    padding:normalize(6), //doubt1
    flexDirection:"column",
    justifyContent:"space-between",
  },
  heading: {
    color: theme.colors.light,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: theme.fontWeight.bold,
    fontSize: normalize(12), //doubt2
    margin:4
  },
  content:{
    color: theme.colors.light,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: theme.fontWeight.light,
    fontSize: normalize(10),

  }
 
});

export default ScrollingBox;
