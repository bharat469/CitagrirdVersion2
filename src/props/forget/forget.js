import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../input/input';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Primary} from '../../helpers/data/colors';
import Button from '../button/button';
import {useNavigation} from '@react-navigation/native';

const Forget = props => {
  const [email, setEmail] = useState();
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View style={styles.forgetContainer}>
        <TouchableOpacity
          style={styles.BackIcon}
          onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.forgetView}>
          {props.image}
          <View style={styles.textForget}>
            <Text style={styles.headerText}>{props.heading}</Text>
            <Text style={styles.paraText}>{props.para}</Text>
          </View>
          <Input
            Placeholder="Email"
            icon={<Entypo name="mail" size={24} color={Primary} />}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Button
            buttonText="Get OTP"
            buttonSize={styles.ButtonText}
            onPress={
              email
                ? () =>
                    navigation.navigate(props.NavigationName, {
                      email,
                    })
                : null
            }
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Forget;

const styles = StyleSheet.create({
  BackIcon: {
    padding: 12,
    borderWidth: 1,
    width: wp('12%'),
    top: hp('2%'),
    marginLeft: wp('2%'),
    borderColor: '#D8D8D8',
    borderRadius: 12,
  },
  forgetView: {
    alignItems: 'center',
  },
  textForget: {
    padding: 12,
  },
  headerText: {
    fontSize: hp('3.5%'),
    color: '#000',
    fontWeight: '700',
  },
  paraText: {
    marginTop: hp('1%'),
    fontSize: hp('2%'),
    color: '#686868',
    fontWeight: '500',
  },
  ButtonText: {
    width: wp('90%'),
  },
});
