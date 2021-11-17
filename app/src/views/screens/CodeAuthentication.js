/**
 * this file exports Code Authentication screen
 */
import React, { useState, useRef } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import STYLES from '../../styles';
import ResetPasswordScreen from './ResetPasswordScreen';
// import SixDigitsText from '../../components/SixDigitsText';
// import CodeSendTo from '../../components/CodeSendTo';


/**
 * this component will return Code Authentication screen as a whole
 * @returns React Component
 */
const CodeAuthentication: React.FC<any> = ({ navigation }) => {
    const textInput1 = useRef(null);
    const textInput2 = useRef(null);
    const textInput3 = useRef(null);
    const textInput4 = useRef(null);
    const textInput5 = useRef(null);


    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

    return (
        <ScrollView style={STYLES.container}>
            {/* <SixDigitsText />
            <CodeSendTo /> */}
            <ResetPasswordScreen />

            <View style={STYLES.verificationCodeInputViewBox}>
                <View style={STYLES.verificationCodeInputView}>
                    <TextInput
                        testID={'#input1'}
                        ref={textInput1}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            // text && textInput2.current.focus();
                            text ? textInput2.current.focus() : textInput1.current.focus();
                        }}
                        style={STYLES.verificationCodeInput}
                    />
                </View>
                <View style={STYLES.verificationCodeInputView}>
                    <TextInput
                        testID={'#input2'}
                        ref={textInput2}
                        // value={pin2}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            text ? textInput3.current.focus() : textInput1.current.focus();
                        }}
                        style={STYLES.verificationCodeInput}
                    />
                </View>
                <View style={STYLES.verificationCodeInputView}>
                    <TextInput
                        testID={'#input3'}
                        ref={textInput3}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            text ? textInput4.current.focus() : textInput2.current.focus();
                        }}
                        style={STYLES.verificationCodeInput}
                    />
                </View>
                <View style={STYLES.verificationCodeInputView}>
                    <TextInput
                        testID={'#input4'}
                        ref={textInput4}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            text ? textInput5.current.focus() : textInput3.current.focus();
                        }}
                        style={STYLES.verificationCodeInput}
                    />
                </View>
            </View>
            <View style={STYLES.container}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <View style={STYLES.btnVerify}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                            Varify Now
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default CodeAuthentication;

