import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../props/header/header';
import {Profile} from '../../helpers/data/svgImages';
import {Link} from '../../helpers/data/Links';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Primary} from '../../helpers/data/colors';
import {Symptoms} from '../../helpers/data/symptoms';
import {Special} from '../../helpers/data/speciality';
import {Doctor} from '../../helpers/data/Doctor';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.homeScreenContainer}>
        <Header location="Punjab" uri={Link} />
        <View>
          <TouchableOpacity
            style={styles.searchDoctor}
            onPress={() => navigation.navigate('Search')}>
            <Text style={styles.searchText}>
              Let’s find you a doctor for consultation
            </Text>
            <TouchableOpacity
              style={styles.searchBar}
              onPress={() => navigation.navigate('Search')}>
              <Text style={styles.searchHeader}>
                Search by doctors symptoms...
              </Text>
              <View style={styles.searchView}>
                <FontAwesome5 name="search" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.symptoms}>
            <View style={styles.listContainer}>
              <Text style={styles.ListText}>Symptoms</Text>
              <TouchableOpacity>
                <Text style={styles.listbtn}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Symptoms}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.symptomContainer}
                    onPress={() =>
                      navigation.navigate('Symptoms', {
                        sName: item.symptomsText,
                      })
                    }>
                    <item.image width={40} height={40} />
                    <Text style={styles.symtomsText}>{item.symptomsText}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.specialityContainer}>
            <View style={styles.listContainer}>
              <Text style={styles.ListText}>Specialities</Text>
              <TouchableOpacity>
                <Text style={styles.listbtn}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Special}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.specialList}
                    onPress={() =>
                      navigation.navigate('Speciality', {
                        sName: item.name,
                      })
                    }>
                    <item.image />
                    <Text style={styles.specialText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.DoctorsContainer}>
            <View style={styles.listContainer}>
              <Text style={styles.ListText}>Doctors Near You</Text>
              <TouchableOpacity>
                <Text style={styles.listbtn}>View All</Text>
              </TouchableOpacity>
            </View>
            <View>
              {Doctor.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.doctorCard}
                    onPress={() => {
                      navigation.navigate('DoctorInfo', {
                        name: item.name,
                      });
                    }}>
                    <item.Pimage width={80} height={100} />
                    <View style={styles.doctorDetail}>
                      <View>
                        <Text style={styles.drName}>{item.name}</Text>
                        <Text style={styles.hname}>{item.hospital}</Text>
                        <Text style={styles.specialName}>
                          {item.specialList} ({item.year}yrs)
                        </Text>
                        <Text style={styles.timeName}>{item.time}</Text>
                      </View>
                      <View style={styles.leftStyle}>
                        <Text style={styles.price}>₹{item.price}</Text>
                        <Text style={styles.rating}>★ {item.rating}</Text>
                        <TouchableOpacity style={styles.btn}>
                          <Text style={styles.doctorBtn}>Know More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <View style={{height: hp('10%')}}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchDoctor: {
    top: hp('6%'),
    alignItems: 'center',
    backgroundColor: '#D0E3FF',
    padding: 6,
    width: wp('95%'),
    left: wp('2.5%'),
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchText: {
    fontSize: hp('3%'),
    textAlign: 'center',
    fontWeight: '700',
    color: '#2F2F2F',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 6,
    margin: 22,
    width: wp('75%'),
    borderRadius: 44,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  searchView: {
    backgroundColor: Primary,
    padding: 12,
    borderRadius: 50,
  },
  searchHeader: {
    fontSize: hp('1.8%'),
  },
  symptoms: {
    top: hp('8%'),
    alignItems: 'center',
  },
  symptomContainer: {
    margin: 12,
    alignItems: 'center',
    borderWidth: 2,
    padding: 6,
    width: wp('25%'),
    borderRadius: 22,
    borderColor: Primary,
  },
  symtomsText: {
    fontSize: hp('2%'),
    color: '#000',
    margin: 6,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('89%'),
    alignItems: 'center',
  },
  ListText: {
    fontSize: hp('2.2%'),
    fontWeight: '700',
    color: '#2F2F2F',
  },
  listbtn: {
    color: Primary,
    fontSize: hp('2%'),
    fontWeight: '600',
  },
  specialityContainer: {
    top: hp('9%'),
    alignItems: 'center',
  },
  specialList: {
    margin: 12,
    alignItems: 'center',
  },
  specialText: {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: '600',
    margin: 5,
  },
  DoctorsContainer: {
    top: hp('9%'),
    alignItems: 'center',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
    margin: 12,
    width: wp('95%'),
    borderRadius: 12,
  },
  doctorDetail: {
    flexDirection: 'row',
    margin: 12,

    justifyContent: 'space-between',
    width: wp('73%'),
  },
  drName: {
    fontSize: hp('2.3%'),
    fontWeight: '700',
    color: '#000',
  },
  hname: {
    color: '#000',
    fontSize: hp('1.8%'),
    fontWeight: '500',
  },
  specialName: {
    fontSize: hp('1.8%'),
    color: '#686868',
  },
  timeName: {
    color: '#000',
    fontSize: hp('1.8%'),
    fontWeight: '600',
  },
  price: {
    fontSize: hp('2.2%'),
    fontWeight: '700',
    color: Primary,
  },
  rating: {
    backgroundColor: '#FFB121',
    borderRadius: 12,
    color: '#fff',
    textAlign: 'center',
    margin: 6,
    padding: 3,
    fontSize: hp('1.8%'),
    right: hp('2%'),
  },
  btn: {
    right: hp('2%'),
  },
  doctorBtn: {
    fontWeight: '700',
    fontSize: hp('1.7%'),
    textDecorationLine: 'underline',
  },
});
