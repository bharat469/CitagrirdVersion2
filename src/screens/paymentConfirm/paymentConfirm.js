import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {PaymentConfirmation} from '../../helpers/data/svgImages';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Primary} from '../../helpers/data/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaymentConfirm = ({navigation, route}) => {
  const {day, time} = route.params;
  let appoint = true;
  return (
    <View style={styles.paymentScreen}>
      <View style={styles.payment}>
        <AntDesign name="checkcircle" size={124} color={Primary} />
        <View style={styles.paymentText}>
          <Text style={styles.heading}>Payment Confirmed</Text>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentHeading}>Token Number :</Text>
            <Text style={styles.paymentdefine}>30</Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentHeading}>Date & Time :</Text>
            <Text style={styles.paymentdefine}>
              {day} || {time}
            </Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentHeading}>Doctor Name :</Text>
            <Text style={styles.paymentdefine}>Dr. Ritesh Deshmukh</Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentHeading}>Clinic Name :</Text>
            <Text style={styles.paymentdefine}>Fortis Hospital</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.navigate('HomeScreen', {
              appoint,
            })
          }>
          <Ionicons name="arrow-back" size={24} color={Primary} />
          <Text style={styles.blueText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentConfirm;

const styles = StyleSheet.create({
  paymentScreen: {
    flex: 1,
    backgroundColor: '#C8DDFD',
  },
  payment: {
    alignItems: 'center',
    top: hp('13%'),
  },
  paymentText: {
    padding: 12,
    top: hp('5%'),
    left: wp('6%'),
  },
  heading: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: '#000',
  },
  paymentInfo: {
    flexDirection: 'row',
    padding: 6,
  },
  paymentHeading: {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: '500',
  },
  paymentdefine: {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: '600',
    left: wp('2%'),
  },
  backBtn: {
    top: hp('20%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueText: {
    fontSize: hp('2%'),
    color: Primary,
  },
});
