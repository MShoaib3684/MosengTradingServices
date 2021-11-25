import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';

const fullScreenWidth = Dimensions.get('window').width;

const logo = '../../assets/splash1.png';
const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView
                style={{ paddingHorizontal: "2%", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
                <View style={{ flex: 1, backgroundColor: '' }}>
                    <View style={{ flex: 2, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require(logo)} />
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <View style={{ paddingVertical: "10%" }}>
                                <View style={STYLES.btnPrimary}>
                                    <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>
                                        Get Started
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>

                </View>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({


})

export default WelcomeScreen;



