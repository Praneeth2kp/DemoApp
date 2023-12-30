import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {RadioButton} from 'react-native-paper';

const StarRating = () => {
  const starSvg = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector" d="M13.4185 5.29984L9.26153 4.70674L7.40326 1.00828C7.3525 0.907016 7.269 0.825043 7.16585 0.775216C6.90717 0.649844 6.59282 0.75432 6.46348 1.00828L4.60521 4.70674L0.448251 5.29984C0.333644 5.31591 0.228861 5.36895 0.148636 5.44932C0.0516486 5.54718 -0.0017959 5.67885 4.60817e-05 5.81537C0.00188807 5.9519 0.0588658 6.08213 0.158459 6.17744L3.16607 9.05616L2.45551 13.1211C2.43885 13.2156 2.44951 13.3129 2.48628 13.4018C2.52305 13.4907 2.58446 13.5677 2.66355 13.6241C2.74264 13.6805 2.83625 13.714 2.93375 13.7209C3.03125 13.7277 3.12875 13.7076 3.21519 13.6628L6.93337 11.7436L10.6515 13.6628C10.7531 13.7158 10.8709 13.7335 10.9839 13.7142C11.2688 13.666 11.4603 13.4008 11.4112 13.1211L10.7007 9.05616L13.7083 6.17744C13.7901 6.09868 13.8442 5.99581 13.8605 5.8833C13.9047 5.60202 13.705 5.34163 13.4185 5.29984Z" fill="#EEA651"/>
  </svg>`;

  const unratedSvg = `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M16.7817 5.85622L11.6654 5.12625L9.3783 0.574303C9.31583 0.449674 9.21307 0.348783 9.08612 0.287457C8.76774 0.133154 8.38084 0.26174 8.22165 0.574303L5.93455 5.12625L0.818296 5.85622C0.677241 5.87601 0.548276 5.94129 0.449538 6.0402C0.330169 6.16065 0.264391 6.32269 0.266658 6.49073C0.268925 6.65877 0.339052 6.81904 0.461629 6.93635L4.16331 10.4794L3.28877 15.4824C3.26826 15.5988 3.28138 15.7184 3.32663 15.8279C3.37189 15.9373 3.44748 16.0321 3.54482 16.1015C3.64216 16.1709 3.75737 16.2122 3.87737 16.2206C3.99737 16.229 4.11737 16.2042 4.22376 16.149L8.79998 13.787L13.3762 16.149C13.5011 16.2143 13.6462 16.2361 13.7853 16.2123C14.1359 16.153 14.3716 15.8266 14.3112 15.4824L13.4366 10.4794L17.1383 6.93635C17.2391 6.83941 17.3056 6.7128 17.3257 6.57433C17.3801 6.22813 17.1343 5.90766 16.7817 5.85622Z" fill="#E2EBFF"/>
  </svg>`;

  const ratingOptions = [
    {rating: '4.5 and above'},
    {rating: '4.0 - 4.5'},
    {rating: '3.0 - 4.0'},
    {rating: '3.0 - 3.5'},
    {rating: '2.5 - 3.0'},
  ];

  const [selectedRating, setSelectedRating] = useState(5);

  const renderStarSvg = index => {
    const stars = [];

    const starCount =
      index === 0 ? 5 : index === 1 ? 5 : index === 2 ? 4 : index === 3 ? 3 : 2;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <SvgXml
          key={i}
          xml={i < starCount ? starSvg : unratedSvg}
          width="20"
          height="20"
          marginRight={8}
        />,
      );
    }

    return <View style={styles.starsContainer}>{stars}</View>;
  };

  return (
    <View style={styles.starsContainer1}>
      {ratingOptions.map((option, index) => (
        <View key={index} style={styles.ratingOption}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderStarSvg(index)}

            <Text style={{color: '#2A2B3F', fontWeight: '500', fontSize: 16}}>
              {option.rating}
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <RadioButton
              value={option.rating}
              status={
                selectedRating === option.rating ? 'checked' : 'unchecked'
              }
              onPress={() => setSelectedRating(option.rating)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
});

export default StarRating;
