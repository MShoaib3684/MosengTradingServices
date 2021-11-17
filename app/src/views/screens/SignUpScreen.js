import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: "10%", alignContent: 'center', justifyContent: 'center' }}>
                </View>
                <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Welcome to
                    </Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 28, color: COLORS.dark, alignSelf: 'center' }}>
                        Moseng Trading Services
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: COLORS.light, alignSelf: 'center' }}>
                        Create a new Account
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        {/* <Icon
                            name="account-circle"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}
                        <TextInput placeholder="Full Name" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        {/* <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                        {/* <Icon
                            name="visibility-off"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIconl}

                        /> */}
                    </View>
                    <View style={STYLES.inputContainer}>
                        {/* <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}
                        <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        {/* <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            secureTextEntry
                        />
                        {/* <Icon
                            name="visibility-off"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIconl}

                        /> */}

                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            marginTop: 10,
                        }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text
                                style={{ color: COLORS.code, fontSize: 18, fontWeight: '500' }}> Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <View style={STYLES.btnSecondary}>

                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                    Signup
                                </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ color: COLORS.light, fontSize: 18 }}>
                            Already a user?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text
                                style={{ color: COLORS.code, fontWeight: '500', fontSize: 18 }}> Signin
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView >
    );
};

export default SignUpScreen;
