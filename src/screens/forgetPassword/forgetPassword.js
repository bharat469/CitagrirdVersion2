import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ForgetPass} from '../../helpers/data/svgImages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../props/input/input';
import Entypo from 'react-native-vector-icons/Entypo';
import {Primary} from '../../helpers/data/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../props/button/button';
import Forget from '../../props/forget/forget';

const ForgetPassword = ({navigation}) => {
  return (
    <Forget
      image={<ForgetPass width={300} height={300} />}
      heading="Forget Password?"
      para=" Don’t worry it happens. Please provide us the email address of
            your account"
      NavigationName="ForgetOtp"
    />
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  forgetContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
