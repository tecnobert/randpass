import React, { memo, useState, useEffect } from "react";
import { Clipboard, ToastAndroid } from "react-native";
import { ZXCVBNResult } from "zxcvbn";
import { Box, Text } from "react-native-design-utility";

import theme from "../constants/theme";

interface Props {
    password: string;
    storePassword: number;
    infoPassword: ZXCVBNResult | undefined;
}

interface Status {
    status: string;
    color: string;
}

const GeneratedPassowrd: React.FC<Props> = ({ password, storePassword }) => {
    const [statusPassword, setStatusPassword] = useState<Status>({
        status: "",
        color: theme.color.redDark,
    });

    useEffect(() => {
        generatePasswordStrength(storePassword);
    }, [storePassword]);

    function generatePasswordStrength(store: number) {
        switch (store) {
            case 0:
                setStatusPassword({
                    status: "risky password",
                    color: theme.color.redDark,
                });
                break;
            case 1:
                setStatusPassword({
                    status: "very guessable",
                    color: theme.color.red,
                });
                break;
            case 2:
                setStatusPassword({
                    status: "somewhat guessable",
                    color: theme.color.purpleDarkest,
                });
                break;
            case 3:
                setStatusPassword({
                    status: "safely unguessable",
                    color: theme.color.blueDark,
                });
                break;
            case 4:
                setStatusPassword({
                    status: "very unguessable",
                    color: theme.color.greenDark,
                });
                break;

            default:
                setStatusPassword({
                    status: "",
                    color: theme.color.greyLight,
                });
                break;
        }
    }
    return (
        <Box>
            <Box mx={20} mt={2}>
                <Box dir="row" justify="between" center>
                    <Text size={14} bold uppercase>
                        Generated password
                    </Text>
                    <Text size={10} bold uppercase color={statusPassword.color}>
                        {statusPassword.status}
                    </Text>
                </Box>

                <Box
                    h={79}
                    mt={5}
                    py={8}
                    px={20}
                    bg={theme.color.purple}
                    radius={20}
                    justify="evenly"
                    center
                    style={{
                        borderWidth: 2.5,
                        borderColor: statusPassword.color,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}
                >
                    <Text
                        size={26}
                        lineH={26}
                        color="white"
                        onPress={() => {
                            Clipboard.setString(password);
                            ToastAndroid.show(
                                "Password copied!",
                                ToastAndroid.SHORT
                            );
                        }}
                    >
                        {password}
                    </Text>
                </Box>
            </Box>

            {password !== "password" && (
                <Box dir="row-reverse" mx={20} mt={5} justify="evenly">
                    <Text bold uppercase size={16} color="#714DC3">
                        Click password to copy
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default memo(GeneratedPassowrd);
