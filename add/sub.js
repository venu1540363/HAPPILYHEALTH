import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const BoxWithGradientAndButton = () => {
  return (
    <LinearGradient
      colors={['#4C759A', '#886BCB']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '92%',
        alignSelf: 'center',
        height: '20%',
        borderRadius: 10,
      }}>
      <View>
        <MaterialCommunityIcons
          name="video-vintage"
          size={32}
          color="#FFF"
          style={{top: 20}}></MaterialCommunityIcons>
        <Text
          style={{
            justifyContent: 'flex-end',
            color: '#FFF',
            fontSize: 13,
            paddingTop: 2,
            paddingBottom: 20,
            bottom: 15,
            paddingLeft: 40,
          }}>
          Live classes @INR 249/month.Join Live Yoga & Medication classes
          everyday.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          // paddingVertical: 10,
          borderRadius: 5,
          justifyContent: 'center',
          bottom: 8,
        }}
        onPress={() => console.log('Button pressed!')}>
          <MaterialCommunityIcons name='lock-open-outline' size={20} style= {{ left: 37, top: 20, color:'black',}}/>
        <Text
          style={{
            color: '#333',
            fontWeight: 'bold',
            padding: 10,
            // justifyContent: 'center',
            bottom: 10,
            paddingLeft: 60,
            paddingRight: 60,
          }}>
          Subscribe to Premium
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BoxWithGradientAndButton;
