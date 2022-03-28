import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Forget from '../../props/forget/forget';
import {PinForget} from '../../helpers/data/svgImages';

const ForgetPin = () => {
  return (
    <View style={{flex: 1}}>
      <Forget
        image={<PinForget width={300} height={300} />}
        heading="Forgot your PIN?"
        para="Don’t worry it happens. Please provide us the
email address of your account"
        NavigationName="PinOtp"
      />
    </View>
  );
};

export default ForgetPin;

const styles = StyleSheet.create({});
