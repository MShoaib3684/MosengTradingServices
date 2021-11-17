import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';

const fullScreenWidth = Dimensions.get('window').width;

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
            <View style={{ paddingHorizontal: "5%", paddingVertical: "1%", flex: 1, backgroundColor: COLORS.white }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Image
                            style={{ alignSelf: 'center', justifyContent: 'center', top: "80%" }}
                            source={require('../../assets/splash1.png')} />
                    </View>

                    <View >
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
                </ScrollView>
            </View>
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({


})

export default WelcomeScreen;