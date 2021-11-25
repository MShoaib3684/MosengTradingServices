import * as React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from "react-native-maps";

const Home = ({ }) => {

    const [pin, setPin] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324
    })
    const [region, setRegion] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    return (

        <SafeAreaView
            style={{ paddingVertical: "1%", flex: 1, backgroundColor: COLORS.white }}>

            <ScrollView style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 0.7, backgroundColor: '' }}>
                    <Text style={styles.text}> Welcome , John Deo</Text>
                </View>

                <View style={{ flex: 0.6, flexDirection: 'row', backgroundColor: '', alignItems: 'center', }}>
                    <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name="location-on"
                            color={COLORS.code}
                            size={35}
                            style={styles.inputIcon}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '', alignItems: 'center' }}>

                        <GooglePlacesAutocomplete
                            placeholder="your current location"
                            fetchDetails={true}
                            GooglePlacesSearchQuery={{
                                rankby: "distance"
                            }}
                            onPress={(data, details = null) => {
                                // 'details' is provided when fetchDetails = true
                                console.log(data, details)
                                setRegion({
                                    latitude: details.geometry.location.lat,
                                    longitude: details.geometry.location.lng,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421
                                })
                            }}
                            query={{
                                key: "AIzaSyDiWvlfMN2VzLj4DUGtwdgurBjJJ8rcKaE",
                                language: "en",
                                components: "country:pakistan",
                                types: "islamabad",
                                radius: 300000,
                                location: `${region.latitude}, ${region.longitude}`
                            }}
                            styles={{
                                container: { position: "relative", height: "100%", zIndex: 1 },
                                listView: { backgroundColor: "white" }
                            }}
                        />

                    </View>


                </View>


                <View style={{ flex: 1, backgroundColor: '' }
                }>

                    <View style={styles.container}>
                        <MapView style={styles.map} />
                    </View>

                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        provider="google"
                    >
                        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                        <Marker
                            coordinate={pin}
                            pinColor="black"
                            draggable={true}
                            onDragStart={(e) => {
                                console.log("Drag start", e.nativeEvent.coordinates)
                            }}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude
                                })
                            }}
                        >
                            <Callout>
                                <Text>I'm here</Text>
                            </Callout>
                        </Marker>
                        <Circle center={pin} radius={1000} />

                    </MapView>
                </View>

            </ScrollView>
        </SafeAreaView>


    );
};
export default Home;


const styles = StyleSheet.create({
    textBox: {
        color: '#fff',
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderWidth: 2,
        paddingLeft: "10%",
        marginLeft: "-1%",
    },

    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "1%",
    },
    inputIcon: {
        marginTop: "2%",
        position: 'relative',
        marginLeft: "2%",

    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
});



