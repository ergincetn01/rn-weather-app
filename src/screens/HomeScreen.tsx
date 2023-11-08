import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';
import { locations } from '../utils';
import { WeatherWidget } from './weatherWidget';

const selectionGray: string = 'gray';

function HomeScreen() {
  const [searchVisible, setSearchVisible] = useState<boolean>(true);

  const [selectedLocation, setSelectedLocation] = useState();
  const changeSearchVisible: any = () => {
    setSearchVisible(!searchVisible);
  };

  const selectLocation: any = (e: any) => {
    setSelectedLocation(e);
    changeSearchVisible();
  };

  return (
    <View style={styles.main}>
      <StatusBar style='light' />
      <Image
        blurRadius={40}
        source={require('../../assets/images/bg.png')}
        style={styles.bgImg}
      />
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            zIndex: 50,
            marginHorizontal: 20,
            marginTop: 15,
            height: '14%',
            position: 'relative',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: searchVisible
                ? 'rgba(255,255,255,0.2)'
                : 'transparent',
              borderRadius: 100,
              justifyContent: searchVisible ? 'space-between' : 'flex-end',
            }}
          >
            {searchVisible ? (
              <TextInput
                placeholderTextColor={'lightgray'}
                placeholder='Search City'
                selectionColor={selectionGray}
                autoFocus={false}
                style={styles.searchBar}
              />
            ) : (
              <></>
            )}
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'rgba(255,255,255, 0.3)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
            >
              <MagnifyingGlassIcon
                onPress={changeSearchVisible}
                color='white'
                size='25'
              />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && searchVisible ? (
            <View style={styles.locsView}>
              {locations.map((loc: any, index: number) => {
                let showBorder: boolean = index + 1 !== locations.length;
                return (
                  <TouchableOpacity
                    onPress={() => selectLocation(loc)}
                    style={showBorder ? styles.locs : styles.locNoBorder}
                    key={index}
                  >
                    <MapPinIcon color='gray' size='24' />
                    <Text style={{ fontSize: 16 }}>
                      {loc.city}, {loc.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <WeatherWidget location={selectedLocation} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  locNoBorder: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 3,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  locsView: {
    borderRadius: 12,
    backgroundColor: 'white',
    marginTop: 10,
  },
  locs: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 3,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderRadius: 0,
  },
  city: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: { fontSize: 17, color: 'lightgray', fontWeight: '600' },
  weather: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    textAlign: 'left',
    height: 50,
    opacity: 1,
    paddingLeft: 20,
    color: 'red',
    fontSize: 15,
  },
  safeArea: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
    position: 'relative',
  },
  bgImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default HomeScreen;
