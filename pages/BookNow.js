import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
const arrow = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M15.9336 7C15.9336 7.26517 15.8291 7.51948 15.6431 7.70698C15.4572 7.89448 15.205 7.99982 14.942 7.99982H3.45384L7.71158 12.291C7.80377 12.384 7.8769 12.4944 7.92679 12.6158C7.97669 12.7373 8.00237 12.8675 8.00237 12.9989C8.00237 13.1304 7.97669 13.2606 7.92679 13.382C7.8769 13.5035 7.80377 13.6138 7.71158 13.7068C7.61939 13.7997 7.50994 13.8735 7.38949 13.9238C7.26904 13.9741 7.13994 14 7.00956 14C6.87918 14 6.75008 13.9741 6.62963 13.9238C6.50917 13.8735 6.39973 13.7997 6.30754 13.7068L0.358201 7.70787C0.265861 7.615 0.192599 7.50467 0.142612 7.3832C0.0926246 7.26173 0.0668945 7.13151 0.0668945 7C0.0668945 6.86849 0.0926246 6.73827 0.142612 6.6168C0.192599 6.49533 0.265861 6.385 0.358201 6.29213L6.30754 0.293211C6.49372 0.105471 6.74625 0 7.00956 0C7.27287 0 7.52539 0.105471 7.71158 0.293211C7.89777 0.48095 8.00237 0.735579 8.00237 1.00108C8.00237 1.26659 7.89777 1.52122 7.71158 1.70896L3.45384 6.00018H14.942C15.205 6.00018 15.4572 6.10552 15.6431 6.29302C15.8291 6.48052 15.9336 6.73483 15.9336 7Z" fill="#000929"/>
</svg>`;
const countries = [
  {label: 'USA', value: 'USA'},
  {label: 'Canada', value: 'Canada'},
  {label: 'India', value: 'India'},
  {label: 'Australia', value: 'Australia'},
  {label: 'UK', value: 'UK'},
  {label: 'Germany', value: 'Germany'},
  {label: 'France', value: 'France'},
];

const days = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
];

const months = [
  {label: 'January', value: 'January'},
  {label: 'February', value: 'February'},
  {label: 'March', value: 'March'},
];

const years = [
  {label: '2023', value: '2023'},
  {label: '2022', value: '2022'},
  {label: '2021', value: '2021'},
  {label: '2020', value: '2020'},
  {label: '2019', value: '2019'},
  {label: '2018', value: '2018'},
  {label: '2017', value: '2017'},
  {label: '2016', value: '2016'},
  {label: '2015', value: '2015'},
  {label: '2014', value: '2014'},
  {label: '2013', value: '2013'},
  {label: '2012', value: '2012'},
  {label: '2011', value: '2011'},
  {label: '2010', value: '2010'},
  {label: '2009', value: '2009'},
  {label: '2008', value: '2008'},
  {label: '2007', value: '2021'},
];

const Booknow = () => {
  const currentStep = 2;
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const navigation = useNavigation();

  const handleBookNow = () => {
    navigation.navigate('Tour');
  };

  const handleCountryChange = value => {
    setSelectedCountry(value);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  const getProgressBarWidth = () => {
    const progressPercentage = (currentStep / 4) * 100;
    return `${progressPercentage}%`;
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text></Text>;
    }
    return null;
  };

  return (
    <View style={{flex:1,justifyContent:"space-between"}}>
      <View>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}>
              <SvgXml xml={arrow} width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>Book Tour</Text>
          </View>
          <View style={styles.rightContainer}></View>
        </View>

        <View style={styles.progressBarContainer}>
          <Text style={styles.stepText}>Step {currentStep}/4</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressIndicator,
                {width: getProgressBarWidth()},
              ]}></View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formLabelText}>Name</Text>
          <TextInput style={styles.inputField} placeholder="Enter your name" />

          <Text style={styles.formLabelText}>Name</Text>
          <TextInput style={styles.inputField} placeholder="Enter your email" />
          <Text style={styles.formLabelText}>Age</Text>
          <View style={styles.rowContainer}>
            <View style={[styles.container1, {maxWidth: 300}]}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={days}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Day' : '...'}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={selectedDay}
                onChange={item => {
                  setSelectedDay(item.value);
                }}
              />
            </View>

            <View style={[styles.container1, {maxWidth: 100}]}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={months}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Month' : '...'}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={selectedMonth}
                onChange={item => {
                  setSelectedMonth(item.value);
                }}
              />
            </View>

            <View style={[styles.container1, {maxWidth: 100}]}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={years}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Year' : '...'}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={selectedYear}
                onChange={item => {
                  setSelectedYear(item.value);
                }}
              />
            </View>
          </View>

          <Text style={styles.formLabelText}>Gender</Text>
          <View style={styles.rowContainer}>
            {/* Gender options */}
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'Male' ? styles.selectedGender : null,
              ]}
              onPress={() => setSelectedGender('Male')}>
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'Female' ? styles.selectedGender : null,
              ]}
              onPress={() => setSelectedGender('Female')}>
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'Others' ? styles.selectedGender : null,
              ]}
              onPress={() => setSelectedGender('Others')}>
              <Text>Others</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.formLabelText}>Mobile</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            placeholder="+91 0000000000"
          />

          <Text style={styles.formLabelText}>Country</Text>
          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={countries}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Country' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleBookNow}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    color: '#000',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
  },
  stepText: {
    fontSize: 20,
    marginRight: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: 'green',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 5,
    marginRight: 5,
  },
  genderOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
  },
  selectedGender: {
    backgroundColor: 'green',
  },

  container: {
    paddingTop: 10,
  },
  container1: {
    width: 100,
    paddingTop: 10,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: '',
  },

  placeholderStyle: {
    fontSize: 16,
    color: '#677294',
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  footer: {
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  continueButton: {
    display: 'flex',
    paddingVertical: 12,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    backgroundColor: '#006EFF',
  },
  continueText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16.32 * 0.96,
  },
});

export default Booknow;
