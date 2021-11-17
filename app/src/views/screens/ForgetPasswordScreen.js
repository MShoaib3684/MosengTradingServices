import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

const ForgetPasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>



                <View style={{ marginTop: "20%", alignItems: 'center' }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Forgot Password?
                    </Text>

                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.light, alignSelf: 'center', marginTop: "4%" }}>
                        Retrieve Your Password
                    </Text>
                    <View style={STYLES.inputContainer}>
                        {/* <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}
                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('CodeAuthentication')}>
                        <View style={{ flex: 1, marginTop: "40%" }}>
                            <View style={STYLES.btnPrimary}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                    Submit
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgetPasswordScreen;
