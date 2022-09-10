import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {memo} from 'react/cjs/react.production.min';
import HomeScreen from './HomeScreen';
import LabTests from './LabTests';
import Medicine from './Medicine';

export const tabBarOptions = [
  {
    id: 1,
    title: 'HomeScreen',
    image: <HomeScreen />,
  },
  {
    id: 2,
    title: 'LABTESTS',
    image: <LabTests />,
  },
  {
    id: 3,
    title: 'MEDICINES',
    image: <Medicine />,
  },
];
const {height, width} = Dimensions.get('screen');
export const DeviceHelper = () => {
  const isIphoneX = () => {
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      (height >= 812 || width >= 812)
    );
  };

  return {
    isIphoneX,
  };
};

const {isIphoneX} = DeviceHelper();

export const BottomTabBar = memo(props => {
  const {showPopUp, navigation} = props;

  return (
    <View>
      <View style={styles.bottomTabBarLine} />
      <View
        style={[
          styles.tabBarMainViewStyle,
          {height: showPopUp ? 0 : isIphoneX() ? 77 : 57},
        ]}>
        {tabBarOptions.map((tabBarOptions, i) => (
          <View key={i}>
            <TouchableOpacity
              activeOpacity={0.5}
              key={i}
              onPress={() => {
                if (i === 0) {
                  navigation.navigate('APPOINTMENTS');
                } else if (i == 1) {
                  props.navigation.navigate('HEALTH RECORDS');
                } else if (i == 2) {
                  props.navigation.navigate('MEDICINES', {
                    comingFrom: '247 Home bottom bar',
                  });
                } else if (i == 3) {
                  const homeScreenAttributes = {
                    'Nav src': 'Bottom bar',
                    'Page Name': 'Home Screen',
                    Source: DiagnosticHomePageSource.TAB_BAR,
                  };
                  props.navigation.navigate('TESTS', {homeScreenAttributes});
                } else if (i == 4) {
                  props.navigation.navigate('MY ACCOUNT');
                }
              }}>
              {/* <View style={styles.tabBarViewStyle} key={i}>
                <View>
                  {tabBarOptions.image}
                  {i === 1 && (
                    <BadgeView
                      phrNotificationCount={phrNotificationCount || 0}
                    />
                  )}
                </View>
                <Text style={styles.tabBarTitleStyle}>
                  {tabBarOptions.title}
                </Text>
              </View> */}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
});

// export const BadgeView: FC<{phrNotificationCount: number}> = React.memo(
//   ({phrNotificationCount}) => {
//     return phrNotificationCount ? (
//       <View style={[styles.badgelabelView]}>
//         <Text style={styles.badgelabelText}>{phrNotificationCount}</Text>
//       </View>
//     ) : null;
//   },
// );

const styles = StyleSheet.create({
  bottomTabBarLine: {
    height: 0.5,
    backgroundColor: '#D4D4D4',
    marginHorizontal: -16,
  },
  tabBarMainViewStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    width: width,
  },
  tabBarViewStyle: {
    width: width / 5,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitleStyle: {
    // ...theme.fonts.IBMPlexSansSemiBold(7),
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 8,
    color: '#02475b',
  },
  badgelabelView: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: '#E50000',
    height: 15,
    width: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgelabelText: {
    // ...theme.fonts.IBMPlexSansBold(9),
    // color: theme.colors.WHITE,
  },
});
