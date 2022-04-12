import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Avatar} from 'react-native-elements';
import {Link} from '../../helpers/data/Links';
import {Primary} from '../../helpers/data/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReactNativeModal from 'react-native-modal';
import Input from '../../props/input/input';
import Button from '../../props/button/button';
import ImagePicker from 'react-native-image-crop-picker';
import {Signup} from '../../helpers/data/svgImages';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrmPassword, setConfirmPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Register',
    });
  });
  return (
    <KeyboardAwareScrollView>
      <View style={styles.registerForm}>
        <Signup width={300} height={300} />
        <View style={styles.registerInput}>
          <Input
            icon={<Entypo name="user" size={24} color={Primary} />}
            Placeholder="Username"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Input
            icon={<Entypo name="mail" size={24} color={Primary} />}
            Placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            icon={<Entypo name="lock" size={24} color={Primary} />}
            Placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.textTerms}>
            <Text style={styles.headerText}>
              By continuing further you will abide the{' '}
            </Text>
            <TouchableOpacity>
              <Text style={styles.textBtn}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonStyle}>
            <Button buttonText="Register" buttonSize={styles.ButtonText} />
            <View style={styles.textWarning}>
              <Text style={styles.headerText}>ALREADY A MEMBER?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.textBtn}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerForm: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerCamera: {
    bottom: hp('6.4%'),
    alignItems: 'center',
    right: hp('1.4%'),
    backgroundColor: '#A5A5A5',
    width: wp('11%'),
    padding: 12,
    borderRadius: 50,
    left: wp('20%'),
  },
  options: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  Picker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  TextPicker: {
    fontSize: hp('2%'),
    color: '#000',
    padding: 12,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  ButtonText: {
    width: wp('90%'),
    bottom: hp('2.4%'),
  },
  textWarning: {
    alignItems: 'center',
    flexDirection: 'row',
    bottom: hp('2%'),
  },
  headerText: {
    fontSize: hp('2%'),

    color: '#000',
  },
  textBtn: {
    color: Primary,
    fontWeight: '800',
  },
  registerInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTerms: {
    alignItems: 'center',
  },
});
