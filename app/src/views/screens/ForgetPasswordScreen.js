import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

const ForgetPasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: "2%", flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>



                <View style={{ flex: 0.2, marginTop: "20%", alignItems: 'center', backgroundColor: '' }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Forgot Password?
                    </Text>

                </View>

                <View style={{ flex: 0.2, backgroundColor: '' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.light, alignSelf: 'center', marginTop: "4%" }}>
                        Retrieve Your Password
                    </Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: '' }}>
                    <View style={STYLES.inputContainer}>

                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                </View>

                <View style={{ flex: 1, height: 400, backgroundColor: '', justifyContent: 'space-between' }}>
                    {/* <Text>green</Text> */}

                </View>
                <View style={{ flex: 0.5, backgroundColor: '' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CodeAuthentication')}>
                        <View style={STYLES.btnPrimary}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                Submit
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgetPasswordScreen;
