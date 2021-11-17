import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import OTPVerificationsCodes from "otp-verifications-codes";



const Verification = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: "20%", alignItems: 'center' }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Verify
                    </Text>

                </View>

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.light, alignSelf: 'center', marginTop: "4%" }}>
                    Enter Your OTP code here
                </Text>

                <View style={styles.container}>
                    <View style={styles.simpleModal}>
                        <Text style={{ textAlign: "center", color: "#000" }}>
                            react native OTPVerificationsCodes
                        </Text>
                        <OTPVerificationsCodes
                            ViewWrapperStyle={styles.ViewWrapperStyle}
                            codeInputStyle={styles.inputStyle}
                            focusedBordercolor={"#00FFFF"}
                            borderColor={"black"}
                            warningTitle={"warning"}
                            warningContent={"Please Enter Number Only"}
                            warningButtonText={"ok"}
                            onInputCompleted={(otpCode) => console.log(otpCode)}
                        />
                    </View>
                </View>;



                <View style={{ flex: 1, marginTop: "40%" }}>
                    <View style={STYLES.btnPrimary}>
                        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                Varify Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C0C0C0",
    },
    simpleModal: {
        width: "80%",
        justifyContent: "center",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        opacity: 0.8,
        paddingTop: 20,
        paddingBottom: 30,
        marginBottom: -30,
    },
    inputStyle: {
        height: 35,
        fontSize: 16,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#FEFFFE",
        color: "#222",
        padding: 5,
        width: 35,
        textAlign: "center",
    },
    ViewWrapperStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 40,
    },
});