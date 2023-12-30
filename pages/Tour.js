import React from 'react';
import {View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SvgXml} from 'react-native-svg';

const arrow = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M15.9336 7C15.9336 7.26517 15.8291 7.51948 15.6431 7.70698C15.4572 7.89448 15.205 7.99982 14.942 7.99982H3.45384L7.71158 12.291C7.80377 12.384 7.8769 12.4944 7.92679 12.6158C7.97669 12.7373 8.00237 12.8675 8.00237 12.9989C8.00237 13.1304 7.97669 13.2606 7.92679 13.382C7.8769 13.5035 7.80377 13.6138 7.71158 13.7068C7.61939 13.7997 7.50994 13.8735 7.38949 13.9238C7.26904 13.9741 7.13994 14 7.00956 14C6.87918 14 6.75008 13.9741 6.62963 13.9238C6.50917 13.8735 6.39973 13.7997 6.30754 13.7068L0.358201 7.70787C0.265861 7.615 0.192599 7.50467 0.142612 7.3832C0.0926246 7.26173 0.0668945 7.13151 0.0668945 7C0.0668945 6.86849 0.0926246 6.73827 0.142612 6.6168C0.192599 6.49533 0.265861 6.385 0.358201 6.29213L6.30754 0.293211C6.49372 0.105471 6.74625 0 7.00956 0C7.27287 0 7.52539 0.105471 7.71158 0.293211C7.89777 0.48095 8.00237 0.735579 8.00237 1.00108C8.00237 1.26659 7.89777 1.52122 7.71158 1.70896L3.45384 6.00018H14.942C15.205 6.00018 15.4572 6.10552 15.6431 6.29302C15.8291 6.48052 15.9336 6.73483 15.9336 7Z" fill="#000929"/>
</svg>`;
const Tour = () => {
  const navigation=useNavigation()
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <SvgXml xml={arrow} width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.headerText}>Tour Request</Text>
        </View>
        <View style={styles.rightContainer}></View>
      </View>
      <View style={styles.firstRow}>
        <Image
          source={require('../assets/tic.png')}
          style={styles.firstRowImage}
          resizeMode="cover"
        />
        <Text style={styles.requestReceivedText}>Request Received!</Text>
        <Text style={styles.checkingText}>
          We're checking if the home can be seen on
        </Text>
        <Text style={styles.dateText}>Fri, October 4, 6:00 PM</Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.agentText}>Agent Will take you on the tour!</Text>
        <View style={styles.nestedRow}>
          <View style={styles.leftColumn}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.agentImage}
              resizeMode="cover"
            />
            <View style={styles.nameBox}>
              <Text style={styles.agentName}>Sandeep S.</Text>
              <Text style={styles.agentName1}>Partner</Text>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <Image
              source={require('../assets/right-arrow.png')}
              style={styles.rightImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    height: 100,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 35,
    height: 30,
  },
  middleContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstRowImage: {
    width: 80,
    height: 80,
  },
  firstRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2B3F',
    borderStyle: 'dashed',
    marginLeft: 20,
    marginRight: 20,
  },
  requestReceivedText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 19.2,
    paddingTop: 15,
  },
  checkingText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    paddingTop: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 13.44,
  },
  dateText: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    paddingTop: 10,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 13.44,
  },
  secondRow: {
    flex: 1,

    padding: 20,
  },
  agentText: {
    color: '#2A2B3F',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12.48,
    paddingTop: 10,
    paddingLeft: 10,
  },
  agentImage: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'row',
  },
  agentName: {
    color: '#2A2B3F',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  agentName1: {
    color: '#8C8C8C',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  nameBox: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 5,
  },
  nestedRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingRight: 5,
  },
});

export default Tour;
