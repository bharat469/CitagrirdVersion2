import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Primary} from '../../helpers/data/colors';
import OtpSCreen from '../../props/otp/otpScreen';

const ForgetOtp = ({navigation, route}) => {
  const {email} = route.params;

  return (
    <View style={styles.otpScreen}>
      <OtpSCreen mail={email} navigation={'changePassword'} />
    </View>
  );
};

export default ForgetOtp;

const styles = StyleSheet.create({
  otpScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  BackButton: {
    padding: 12,
    borderWidth: 1,
    width: wp('12%'),
    top: hp('2%'),
    marginLeft: wp('2%'),
    borderColor: '#D8D8D8',
    borderRadius: 12,
  },
  otpTextData: {
    top: hp('4%'),
    padding: 12,
  },
  textSizeBig: {
    fontSize: hp('3%'),
    width: wp('51%'),
    fontWeight: 'bold',
    color: '#000',
  },
  textSizeSmall: {
    fontSize: hp('2%'),
    marginTop: hp('2%'),
    letterSpacing: 0.1,
    color: '#686868',
  },

  codeFieldRoot: {
    marginTop: 15,
  },
  cellRoot: {
    width: wp('10%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    margin: 12,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: Primary,
    borderBottomWidth: 2,
  },
  verifyBtn: {
    top: hp('7%'),
    alignItems: 'center',
  },
  blackText: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: '#000',
  },
  blueText: {
    color: Primary,
    fontSize: hp('2%'),
    left: wp('1%'),
    fontWeight: '700',
  },
});
