import { StyleSheet, Text, View, Image } from 'react-native';
import '../../assets/images/heavyrain.png';
export const WeatherWidget = ({ location }: { location: any }) => {
  const getImageForWeather = (weather: string) => {
    switch (weather) {
      case 'sunny':
        return require('../../assets/images/sun.png');
      case 'rainy':
        return require('../../assets/images/heavyrain.png');
      case 'cloudy':
        return require('../../assets/images/cloud.png');
      default:
        return null;
    }
  };

  const weatherImage = location ? getImageForWeather(location.weather) : null;

  return (
    <View style={styles.weather}>
      <Text style={styles.city}>
        {location.city},<Text style={styles.country}>{location.country}</Text>
      </Text>
      <View style={styles.img}>
        {weatherImage && (
          <Image
            source={weatherImage}
            style={{ position: 'relative', width: 200, height: 200 }}
          />
        )}
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.degree}>{location.degree}° </Text>
        <Text style={styles.label}> {location.label}</Text>
      </View>

      <View style={{ justifyContent: 'center',flexDirection: "row", paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: "center", marginHorizontal: 20 }}>
            <Text style={{color: "white", fontSize: 20}}>{location.wind} </Text>
            <Image source={require("../../assets/icons/wind.png")} style={{width: 30, height: 30}}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", marginHorizontal: 20 }}>
            <Text style={{color: "white", fontSize: 20}}>{location.moist}% </Text>
            <Image source={require("../../assets/icons/drop.png")}  style={{width: 30, height: 30}} />

        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  degree: {
    fontSize: 46,
    color: 'white',
    textAlign: 'center',
    marginLeft: 24,
    marginBottom: 6,
  },
  label: { color: 'white', fontSize: 26, textAlign: 'center' },
  img: { justifyContent: 'center', flexDirection: 'row' },
  city: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: { fontSize: 27, color: 'lightgray', fontWeight: '600' },
  weather: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
