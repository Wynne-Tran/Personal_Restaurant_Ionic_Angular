import React, {useState, useEffect} from 'react';
import { Modal, ActivityIndicator,
   Text, View, Image, ImageBackground} from 'react-native';
   import * as Location from 'expo-location';
import { globalStyles } from './styles/global';
import Card from './shared/card'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const getFonts = () => Font.loadAsync({
  'fruktur-regular': require('./assets/font/Fruktur-Regular.ttf')
});


const ListScreen = ()=>{
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [date, setdate] = useState ()
  const [day, setDay] = useState([])
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}&units=metric&exclude=minutely,alerts&appid=4fedab93f5be7c8b150304f1146efc95`)
      .then (response => response.json())
      .then((json)=>{
        setData(json); 
        setdate(json.current.dt);
        setDay(json.daily)
        setIsError(false);
      })
      .catch((err)=>{setIsError(true); console.error(err); setData([]);})
      .finally(()=>setIsLoading(false))
    
    })();

    
  }, []);
  
  function getIcon(icon){ return "http://openweathermap.org/img/wn/" + icon + "@2x.png"}


  return (

    <ImageBackground source={require('./assets/game_bg.png')} style={{width: '100%', height: '100%', resizeMode: 'contain'}}>
      <View>
            <Modal visible={isError} animationType='fade' transparent={true}>
                <View style={globalStyles.centeredView}>
                  <View style={globalStyles.modalView}>
                    <Text>Data loading error. Please try again later.</Text>
                  </View>
                </View>
            </Modal>
            {isLoading ? <>
              <ActivityIndicator size='large' color='#00ccbb'></ActivityIndicator>
              <Text style={globalStyles.titleText}>Loading ...</Text>
            </> :
            
            
            <View >
              <Text style={{marginTop: 40, marginBottom: 5, marginLeft: 5 ,fontFamily: 'fruktur-regular',fontSize: 30,color: 'green',textAlign: "center"}}>{data.timezone}</Text>
            
              
              <Card>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image source={{uri: getIcon(day[0].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[0].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[0].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(Math.round(day[0].temp.day))}°C</Text>
            </View>
            </Card>

            <Card>
          
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image source={{uri: getIcon(day[1].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[1].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[1].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(Math.round(day[1].temp.day))}°C</Text>
            </View>
            </Card>
            <Card>

            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={{uri: getIcon(day[2].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[2].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[2].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(day[2].temp.day)}°C</Text>
            </View>
            </Card>
            <Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={{uri: getIcon(day[3].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[3].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[3].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(day[3].temp.day)}°C</Text>
            </View>
            </Card>
            <Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image source={{uri: getIcon(day[4].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[4].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[4].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(day[4].temp.day)}°C</Text>
            </View>
            </Card>
            <Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image source={{uri: getIcon(day[5].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[5].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[5].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(day[5].temp.day)}°C</Text>
            </View>
            </Card>
            <Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image source={{uri: getIcon(day[6].weather[0].icon) }} style={globalStyles.image} />
              <Text style={globalStyles.titleText}>
                {days[(new Date(day[6].dt * 1000)).getDay()]} 
                {"\n"}
                <Text style={globalStyles.buttonText}>{day[6].weather[0].main}</Text>
              </Text>
              <Text style={globalStyles.degreeText}>{Math.round(day[6].temp.day)}°C</Text>
            </View>
            </Card>
            </View>
            
            }
            </View>

      </ImageBackground >
      
  
  );
};


export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <ListScreen />
   );
  }
  return(

      <View>
        <AppLoading 
        startAsync = {getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
      </View>
  
  )}
