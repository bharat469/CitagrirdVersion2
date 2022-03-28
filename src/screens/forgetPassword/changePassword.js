import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../props/input/input';
import Entypo from 'react-native-vector-icons/Entypo';
import {Primary} from '../../helpers/data/colors';
import Button from '../../props/button/button';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState();
  const [Cpassword, setCPassword] = useState();
  const ChangePassword = () => {
    if (password === Cpassword) {
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert('Password enterd didint match');
    }
  };
  return (
    <View style={styles.changePassword}>
      <TouchableOpacity
        style={styles.BackButton}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.otpTextData}>
        <Text style={styles.textSizeBig}>Reset Password</Text>
        <Text style={styles.textSizeSmall}>
          Enter the new password for your account associated with given email
          address
        </Text>
      </View>
      <View style={{top: hp('3.6%'), alignItems: 'center'}}>
        <Input
          icon={<Entypo name="lock" size={24} color={Primary} />}
          Placeholder="Password"
          value={password}
          onChangeText={text => onPassword(text)}
          secureTextEntry={true}
        />
        <Input
          icon={<Entypo name="lock" size={24} color={Primary} />}
          Placeholder=" Confirm Password"
          value={Cpassword}
          onChangeText={text => onCPassword(text)}
          secureTextEntry={true}
        />
        <Button
          buttonText="Save"
          buttonSize={styles.ButtonText}
          onPress={ChangePassword}
        />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  changePassword: {
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
  ButtonText: {
    width: wp('90%'),
  },
});
