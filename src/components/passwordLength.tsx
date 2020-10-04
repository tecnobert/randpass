import React, { memo } from "react";
import { Slider } from "react-native";
import { Box, Text } from "react-native-design-utility";
import theme from "../constants/theme";

interface Props {
    valueLength: number;
    setValueLength: (p: number) => void;
}

const PasswordLength: React.FC<Props> = ({ valueLength, setValueLength }) => {
    return (
        <Box mx={20} mt={15}>
            <Text size={14} bold>
                LENGTH:
                {valueLength}
            </Text>

            <Box
                dir="row"
                justify="between"
                h={35}
                mt={5}
                bg={theme.color.purple}
                radius={10}
                center
                px={16}
                style={{
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
                <Text size="lg" color="white" bold uppercase>
                    4
                </Text>
                <Box f={1} px={20}>
                    <Slider
                        minimumValue={4}
                        maximumValue={32}
                        minimumTrackTintColor={theme.color.purpleLightest}
                        thumbTintColor="white"
                        step={1}
                        value={8}
                        onValueChange={(value) => setValueLength(value)}
                    />
                </Box>
                <Text size="lg" bold color="white">
                    32
                </Text>
            </Box>
        </Box>
    );
};

export default memo(PasswordLength);
