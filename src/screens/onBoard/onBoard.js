import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {OneSlider} from '../../helpers/data/svgImages';
import Button from '../../props/button/button';
import Paginator from '../../props/paginator/Paginator';
import {Onboarding} from '../../helpers/data/onBoarding';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OnBoard = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < Onboarding.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <FlatList
      data={Onboarding}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={item => item.id}
      scrollEventThrottle={32}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollx}}}], {
        useNativeDriver: false,
      })}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
      renderItem={({item, index}) => {
        return (
          <View style={styles.pageOne}>
            <View style={{bottom: hp('4%')}}>
              <View style={styles.bordingImage}>
                <item.image width={350} height={400} />
                <Paginator data={Onboarding} scrollX={scrollx} />
              </View>
              <View style={styles.onboardingContainer}>
                <Text style={styles.onboardingText}>{item.title}</Text>
                <Button buttonText="Next" onPress={scrollTo} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}
                  style={styles.buttonSkip}>
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
      bounces={false}
    />
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  pageOne: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp('100%'),
  },

  headerOnboarding: {
    alignItems: 'flex-end',
    top: hp('2%'),
    left: wp('40%'),
  },
  onboardingContainer: {
    alignItems: 'center',
    bottom: hp('2%'),
  },
  onboardingText: {
    width: wp('63%'),
    fontSize: hp('3.2%'),
    letterSpacing: 0.2,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  bordingImage: {
    alignItems: 'center',
  },
  buttonSkip: {
    margin: 12,
  },
  buttonText: {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: '600',
  },
});
