import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

const Header = () => {
  const searchicon = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M18 18.7222L13.9862 14.7012L18 18.7222ZM16.2105 9.32743C16.2105 11.3445 15.4093 13.2789 13.983 14.7052C12.5567 16.1314 10.6223 16.9327 8.60526 16.9327C6.58822 16.9327 4.65379 16.1314 3.22753 14.7052C1.80127 13.2789 1 11.3445 1 9.32743C1 7.31039 1.80127 5.37596 3.22753 3.9497C4.65379 2.52343 6.58822 1.72217 8.60526 1.72217C10.6223 1.72217 12.5567 2.52343 13.983 3.9497C15.4093 5.37596 16.2105 7.31039 16.2105 9.32743V9.32743Z" stroke="#95A2B0" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;
  const filter = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
  <circle cx="4.5" cy="16.7222" r="4.5" transform="rotate(-90 4.5 16.7222)" fill="white"/>
  <rect x="3" y="9.22217" width="9" height="2" transform="rotate(-90 3 9.22217)" fill="white"/>
  <circle cx="16.5" cy="4.72217" r="4.5" transform="rotate(90 16.5 4.72217)" fill="white"/>
  <rect x="18" y="12.2222" width="9" height="2" transform="rotate(90 18 12.2222)" fill="white"/>
  </svg>`;

  const navigation = useNavigation();

  const handleSquarePress = () => {
    navigation.navigate("Filter");
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          Let's find your{"\n"}
          <Text style={{ color: "#122D4D", fontWeight: "bold", fontSize: 20 }}>
            Favorite Home
          </Text>
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/profile-pic.jpg")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.row2}>
        <View style={styles.searchContainer}>
          <SvgXml xml={searchicon} width={20} height={20} marginRight={10} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Address, City, or ZIP"
            placeholderTextColor="#a0a0a0"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleSquarePress}
          style={styles.squareContainer}
        >
          <SvgXml xml={filter} width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  textContainer: {
    alignItems: "flex-start",
    top: 35,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    color: "#8997A9",
  },
  profileContainer: {
    alignItems: "flex-end",
    marginTop: -13,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(61, 61, 61, 0.02)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  squareContainer: {
    backgroundColor: "#308DFF",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Header;
