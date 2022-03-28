import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Login, Logo} from '../../helpers/data/svgImages';
import Input from '../../props/input/input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../props/button/button';
import {Primary} from '../../helpers/data/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const onEmail = text => {
    setMail(text);
  };

  const onPassword = text => {
    setPassword(text);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.loginScreen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.internalContainer}>
            <Login height={300} width={300} />
            <View style={styles.loginform}>
              <Input
                icon={<Entypo name="mail" size={24} color={Primary} />}
                Placeholder="Email"
                value={mail}
                onChangeText={text => onEmail(text)}
              />
              <Input
                icon={<Entypo name="lock" size={24} color={Primary} />}
                Placeholder="Password"
                value={password}
                onChangeText={text => onPassword(text)}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={styles.forgetPasswordBtn}
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgetPasswordText}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.loginBtn}>
            <Button
              buttonText="Login"
              buttonSize={styles.ButtonText}
              onPress={() => navigation.navigate('LocationScreen')}
            />
            <View style={styles.registerView}>
              <Text style={styles.loginText}>New To The Citagrid ?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.RegisterBtn}>REGISTER NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  internalContainer: {
    alignItems: 'center',
    padding: 12,
  },
  ButtonText: {
    width: wp('90%'),
  },
  loginBtn: {
    alignItems: 'center',
  },
  registerView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    top: hp('10%'),
  },
  loginText: {
    fontSize: hp('2%'),
    color: '#A5A5A5',
    fontWeight: '600',
  },
  RegisterBtn: {
    fontSize: hp('2%'),
    fontWeight: '800',
    color: Primary,
    left: hp('1%'),
  },
  forgetPasswordBtn: {
    alignItems: 'flex-end',
    right: wp('5%'),
  },
  forgetPasswordText: {
    color: Primary,
    fontWeight: '700',
  },
});
