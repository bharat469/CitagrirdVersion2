import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Filter} from '../../helpers/data/svgImages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderInside = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <TouchableOpacity>
        <Filter />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderInside;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: hp('2%'),
    fontWeight: '700',
    color: '#000',
  },
});
