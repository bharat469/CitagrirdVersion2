import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TokenSvg} from '../../helpers/data/svgImages';
import {Primary} from '../../helpers/data/colors';
import Button from '../../props/button/button';

const TokenScreen = ({navigation, route}) => {
  const {day, time} = route.params;
  useEffect(() => {
    console.log(day);
    console.log(time);
  }, []);
  return (
    <View style={styles.TokenScreen}>
      <View style={styles.tokenHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainPage}>
        <TokenSvg width={400} height={300} />
        <View style={styles.tokenName}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.tokenDetail}>
              <Text style={styles.tokenText}>50</Text>
            </TouchableOpacity>
            <Text style={styles.textToken}>Total Tokens</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.tokenDetail}>
              <Text style={styles.tokenText}>30</Text>
            </TouchableOpacity>
            <Text style={styles.textToken}>Total Left</Text>
          </View>
        </View>
        <View style={styles.totalDetail}>
          <Text style={styles.tokenAssignText}>
            You Will Be Assigned token :
          </Text>
          <Text style={styles.blueText}>31</Text>
        </View>
        <Button
          buttonText="Next"
          buttonSize={styles.ButtonText}
          onPress={() =>
            navigation.navigate('BookingDetails', {
              day,
              time,
            })
          }
        />
      </View>
    </View>
  );
};

export default TokenScreen;

const styles = StyleSheet.create({
  TokenScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tokenHeader: {
    padding: 12,
    backgroundColor: '',
  },

  backButton: {
    borderWidth: 1,
    padding: 6,
    width: wp('10%'),
    height: hp('5%'),
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#D8D8D8',
    backgroundColor: '#F8FBFF',
  },
  tokenName: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tokenDetail: {
    backgroundColor: '#DBE8FC',
    padding: 12,
    alignItems: 'center',
    borderRadius: 36,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: wp('16%'),
  },
  tokenText: {
    fontSize: hp('3%'),
    color: Primary,
    fontWeight: '700',
  },
  textToken: {
    marginTop: 12,
    fontSize: hp('2%'),
    fontWeight: '700',
    color: '#000',
  },
  ButtonText: {
    width: wp('90%'),
    left: wp('5%'),
    top: hp('10%'),
  },
  totalDetail: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tokenAssignText: {
    fontSize: hp('2.2%'),
    color: '#000',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  blueText: {
    fontSize: hp('2.2%'),
    color: Primary,
    fontWeight: '800',
    margin: 12,
  },
});
