import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import StarRating from './StarRating';

const Filter = () => {
  const navigation = useNavigation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBathroom, setSelectedBathroom] = useState('7');
  const [clicked, setClicked] = useState('Apply');

  const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.22205C14 6.42096 13.921 6.61173 13.7803 6.75238C13.6397 6.89303 13.4489 6.97205 13.25 6.97205L2.61201 6.97205L6.77001 10.9321C6.9064 11.0715 6.98312 11.2585 6.9839 11.4536C6.98467 11.6486 6.90943 11.8363 6.77414 11.9768C6.63885 12.1173 6.45416 12.1995 6.25923 12.2061C6.0643 12.2127 5.87447 12.1431 5.73001 12.0121L0.230007 6.76205C0.157421 6.69209 0.0996842 6.60821 0.0602486 6.51543C0.020813 6.42265 0.000488024 6.32287 0.00048802 6.22205C0.000488015 6.12124 0.020813 6.02146 0.0602486 5.92868C0.0996842 5.83589 0.157421 5.75202 0.230007 5.68205L5.73001 0.432052C5.8002 0.360305 5.88408 0.303376 5.97668 0.264641C6.06928 0.225905 6.16871 0.206151 6.26908 0.206547C6.36945 0.206944 6.46873 0.227485 6.56101 0.266952C6.6533 0.306419 6.73673 0.36401 6.80635 0.43631C6.87598 0.508611 6.93038 0.594152 6.96634 0.687864C7.00229 0.781576 7.01908 0.881552 7.01569 0.981868C7.0123 1.08218 6.98881 1.1808 6.9466 1.27187C6.9044 1.36294 6.84435 1.44462 6.77001 1.51205L2.61201 5.47205L13.25 5.47205C13.4489 5.47205 13.6397 5.55107 13.7803 5.69172C13.921 5.83237 14 6.02314 14 6.22205Z" fill="black"/>
  </svg>`;
  const searchicon = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M18 18.7222L13.9862 14.7012L18 18.7222ZM16.2105 9.32743C16.2105 11.3445 15.4093 13.2789 13.983 14.7052C12.5567 16.1314 10.6223 16.9327 8.60526 16.9327C6.58822 16.9327 4.65379 16.1314 3.22753 14.7052C1.80127 13.2789 1 11.3445 1 9.32743C1 7.31039 1.80127 5.37596 3.22753 3.9497C4.65379 2.52343 6.58822 1.72217 8.60526 1.72217C10.6223 1.72217 12.5567 2.52343 13.983 3.9497C15.4093 5.37596 16.2105 7.31039 16.2105 9.32743V9.32743Z" stroke="#95A2B0" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;
  const slider = `<svg width="335" height="16" viewBox="0 0 335 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="5.22217" width="335" height="5" rx="2.5" fill="#E2EBFF"/>
  <rect x="0.5" y="0.722168" width="14" height="14" rx="7" fill="#246BFD" stroke="#E9E9E9"/>
  <rect x="12" y="5.22217" width="68" height="5" fill="#246BFD"/>
  <rect x="77.5" y="0.722168" width="14" height="14" rx="7" fill="#246BFD" stroke="#E9E9E9"/>
  </svg>
  `;
  const star = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M13.4185 5.29984L9.26153 4.70674L7.40326 1.00828C7.3525 0.907016 7.269 0.825043 7.16585 0.775216C6.90717 0.649844 6.59282 0.75432 6.46348 1.00828L4.60521 4.70674L0.448251 5.29984C0.333644 5.31591 0.228861 5.36895 0.148636 5.44932C0.0516486 5.54718 -0.0017959 5.67885 4.60817e-05 5.81537C0.00188807 5.9519 0.0588658 6.08213 0.158459 6.17744L3.16607 9.05616L2.45551 13.1211C2.43885 13.2156 2.44951 13.3129 2.48628 13.4018C2.52305 13.4907 2.58446 13.5677 2.66355 13.6241C2.74264 13.6805 2.83625 13.714 2.93375 13.7209C3.03125 13.7277 3.12875 13.7076 3.21519 13.6628L6.93337 11.7436L10.6515 13.6628C10.7531 13.7158 10.8709 13.7335 10.9839 13.7142C11.2688 13.666 11.4603 13.4008 11.4112 13.1211L10.7007 9.05616L13.7083 6.17744C13.7901 6.09868 13.8442 5.99581 13.8605 5.8833C13.9047 5.60202 13.705 5.34163 13.4185 5.29984Z" fill="#EEA651"/>
  </svg>
  `;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchIconPress = () => {
    navigation.navigate('Search');
  };

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const handleBathroomPress = category => {
    setSelectedBathroom(category);
  };
  const FilterSelection = option => {
    setClicked(option);
  };
  const prices = [100, 500, 1000, 1500, 3000, 5000];
  return (
    <SafeAreaView style={styles.filterContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBackPress}
            style={styles.backContainer}>
            <SvgXml xml={arrow} width={20} height={20} />
          </TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSearchIconPress}
            style={styles.searchContainer}>
            <SvgXml xml={searchicon} width={20} height={20} marginRight={10} />
          </TouchableOpacity>
        </View>
        {isSearchVisible && (
          <View style={styles.searchBox}>
            <TextInput placeholder="Search..." style={styles.searchInput} />
          </View>
        )}
        <View style={styles.filterBody}>
          <View>
            <Text style={styles.categoryText}>Category</Text>
          </View>
          <View style={styles.categoryContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScroll}>
              {['All', 'House', 'Villa', 'Apartment'].map(category => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={category}
                  style={[
                    styles.categoryItem,
                    {
                      backgroundColor:
                        selectedCategory === category ? '#246BFD' : '#F4F6F9',
                    },
                  ]}
                  onPress={() => handleCategoryPress(category)}>
                  <Text
                    style={[
                      styles.categoryItemText,
                      {
                        color:
                          selectedCategory === category ? '#fff' : '#242424',
                        fontWeight: '500',
                      },
                    ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.categoryText}>Price Range</Text>
            <SvgXml xml={slider} width={350} marginTop={30} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              {prices.map((item, index) => (
                <View style={{justifyContent: 'space-around'}}>
                  <Text
                    style={{
                      marginRight: 5,
                      color: '#2A2B3F',
                      fontWeight: '600',
                    }}>
                    ${item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.categoryText}>Reviews</Text>
            <View style={{marginTop: 20}}>
              <StarRating />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.categoryText}>Category</Text>
            </View>
            <View style={styles.categoryContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryScroll}>
                {['All', 'House', 'Villa', 'Apartment'].map(category => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={category}
                    style={[
                      styles.categoryItem,
                      {
                        backgroundColor:
                          selectedCategory === category ? '#246BFD' : '#F4F6F9',
                      },
                    ]}
                    onPress={() => handleCategoryPress(category)}>
                    <Text
                      style={[
                        styles.categoryItemText,
                        {
                          color:
                            selectedCategory === category ? '#fff' : '#242424',
                          fontWeight: '500',
                        },
                      ]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.categoryText}>Bathroom</Text>
            </View>
            <View style={styles.categoryContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryScroll}>
                {['7', '1+', '2+', '4+', '5+'].map(item => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    style={[
                      styles.categoryItem,
                      {
                        backgroundColor:
                          selectedBathroom === item ? '#246BFD' : '#F4F6F9',
                      },
                    ]}
                    onPress={() => handleBathroomPress(item)}>
                    <Text
                      style={[
                        styles.categoryItemText,
                        {
                          color: selectedBathroom === item ? '#fff' : '#242424',
                          fontWeight: '500',
                        },
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.button,
                clicked === 'Reset Filter' && styles.activeButton,
              ]}
              onPress={() => {
                setClicked('Reset Filter');
              }}>
              <Text
                style={[
                  styles.btntxt,
                  {
                    color: clicked === 'Reset Filter' ? '#FFFFFF' : '#006EFF',
                  },
                ]}>
                Reset Filter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.button,
                clicked === 'Apply' && styles.activeButton,
              ]}
              onPress={() => {
                setClicked('Apply');
              }}>
              <Text
                style={[
                  styles.btntxt,
                  {
                    color: clicked === 'Apply' ? '#FFFFFF' : '#006EFF',
                  },
                ]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backContainer: {
    marginRight: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  filterText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  filterBody: {
    gap: 10,
  },
  searchContainer: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchBox: {
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    top: 10,
  },
  categoryScroll: {
    flexDirection: 'row',
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryItemText: {
    fontSize: 14,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 80,
    marginTop: 35,
    paddingHorizontal: 5,
    elevation: 24,
    backgroundColor: '#FFFFFF',
    ios: {
      shadowColor: '#E7E7E7',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      backgroundColor: '#fff',
    },
  },
  button: {
    width: '50%',
    paddingVertical: 10,
    borderRadius: 25,
    // marginTop:30
  },
  activeButton: {
    backgroundColor: '#006EFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Filter;
