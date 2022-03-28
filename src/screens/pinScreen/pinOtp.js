import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OtpSCreen from '../../props/otp/otpScreen';

const PinOtp = ({navigation, route}) => {
  const {email} = route.params;
  return (
    <View style={{flex: 1}}>
      <OtpSCreen mail={email} navigation={'createPin'} />
    </View>
  );
};

export default PinOtp;

const styles = StyleSheet.create({});
