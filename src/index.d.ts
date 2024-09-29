import * as React from "react";
import { ViewStyle } from "react-native";

interface OTPInputProps {
  length?: number;
  onOtpComplete?: (message: string) => void;
  style?: ViewStyle;
  inputStyle?: ViewStyle;
}

export default function OTPInput({
  length,
  onOtpComplete,
  style,
  inputStyle,
}: OTPInputProps): React.JSX.Element;
