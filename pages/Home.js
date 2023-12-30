import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListingBox from '../components/ListingBox';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [selectedSection, setSelectedSection] = useState('Recommended');
  const navigation = useNavigation();
  const handleSectionClick = section => {
    setSelectedSection(section);
  };
  const navigateToPropertyPage = () => {
    navigation.navigate('Property');
  };
  return (
    <ScrollView>
      <View>
        <Header />
      </View>
      <View style={styles.sectionsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSectionClick('Recommended')}
            style={[
              styles.section,
              {
                backgroundColor:
                  selectedSection === 'Recommended' ? '#E5F1FF' : '#FFF',
              },
            ]}>
            <Text
              style={[
                styles.sectionText,
                {
                  color:
                    selectedSection === 'Top Rates' ? '#308DFF' : '#308DFF',
                },
              ]}>
              Recommended
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSectionClick('Top Rates')}
            style={[
              styles.section,
              {
                backgroundColor:
                  selectedSection === 'Top Rates' ? '#E5F1FF' : '#FFF',
              },
            ]}>
            <Text
              style={[
                styles.sectionText,
                {
                  color:
                    selectedSection === 'Top Rates' ? '#308DFF' : '#000000',
                },
              ]}>
              Top Rates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSectionClick('Best Offers')}
            style={[
              styles.section,
              {
                backgroundColor:
                  selectedSection === 'Best Offers' ? '#E5F1FF' : '#FFF',
              },
            ]}>
            <Text
              style={[
                styles.sectionText,
                {
                  color:
                    selectedSection === 'Best Offers' ? '#308DFF' : '#000000',
                },
              ]}>
              Best Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSectionClick('Most Relevant')}
            style={[
              styles.section,
              {
                backgroundColor:
                  selectedSection === 'Most Relevant' ? '#E5F1FF' : '#FFF',
              },
            ]}>
            <Text
              style={[
                styles.sectionText,
                {
                  color:
                    selectedSection === 'Most Relevant' ? '#308DFF' : '#000000',
                },
              ]}>
              Most Relevant
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.sectionsContainer}></View>
      <View style={styles.sectionsContainer}>
        <View style={styles.listingBoxContainer}>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image1.jpg')}
              title="Lorem House "
              price="$340/month"
              location="Avenue, West Side"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image2.jpg')}
              title="Lorem House "
              price="$400/month"
              location="Street, East Side"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionsContainer}>
        <View style={styles.listingBoxContainer}>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image1.jpg')}
              title="Lorem House "
              price="$340/month"
              location="Avenue, West Side"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image2.jpg')}
              title="Lorem House "
              price="$400/month"
              location="Street, East Side"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionsContainer}>
        <View style={styles.listingBoxContainer}>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image1.jpg')}
              title="Lorem House "
              price="$340/month"
              location="Avenue, West Side"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image2.jpg')}
              title="Lorem House "
              price="$400/month"
              location="Street, East Side"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionsContainer}>
        <View style={styles.listingBoxContainer}>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image1.jpg')}
              title="Lorem House 1"
              price="$340/month"
              location="Avenue, West Side"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToPropertyPage}>
            <ListingBox
              imageSource={require('../assets/image2.jpg')}
              title="Lorem House 2"
              price="$400/month"
              location="Street, East Side"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionsContainer: {
    paddingVertical: 10,
  },
  listingBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
