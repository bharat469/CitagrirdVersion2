import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SideBar} from '../../helpers/data/svgImages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import {Primary} from '../../helpers/data/colors';
import {Avatar} from 'react-native-elements';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={{left: hp('2%')}}>
        <SideBar width={40} height={40} />
      </TouchableOpacity>

      <View style={styles.currentLocation}>
        <Text style={styles.textHeader}> Your Location</Text>
        <TouchableOpacity style={styles.headerLocationBtn}>
          <Entypo name="location-pin" size={24} color={Primary} />
          <Text style={styles.locationText}>{props.location}</Text>
          <Entypo name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Avatar
          size={40}
          rounded
          containerStyle={{backgroundColor: Primary}}
          source={{
            uri: props.uri,
          }}></Avatar>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: hp('2%'),
    width: wp('95%'),
  },
  currentLocation: {
    alignItems: 'center',
  },
  headerLocationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: hp('1.7%'),
    color: '#686868',
    fontWeight: '700',
  },
  locationText: {
    fontSize: hp('2%'),
    color: '#000',
  },
});
