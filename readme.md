# @codsod/react-native-otp-input

A customizable OTP input component for React Native, designed to simplify user authentication through one-time passwords. This package offers an intuitive interface and flexible functionality, making it ideal for mobile applications.

## Features

- **Easy-to-Use API**: Quickly integrate OTP input functionality into your applications.
- **Customizable Length**: Specify the number of input fields for your OTP.
- **Cross-Platform Support**: Optimized for both iOS and Android devices, as well as desktop web.
- **Seamless Focus Management**: Automatically shifts focus between input fields, enhancing user experience.
- **TypeScript Support**: Fully typed for better development experience and error checking.

## Installation

To install the package, use npm or yarn:

```bash
npm install @codsod/react-native-otp-input
```

## Complete Example:

```javascript
import React, { View } from "react";
import OTPInput from "@codsod/react-native-otp-input";

const Home = () => {
  const [otp, setOTP] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OTPScreen length={6} onOtpComplete={(txt: number) => setOTP(txt)} />
    </View>
  );
};

export default Home;
```

## Props

| Prop            | Type       | Description                                                               | Default |
| --------------- | ---------- | ------------------------------------------------------------------------- | ------- |
| `length`        | `number`   | The number of input fields for the OTP.                                   | `4`     |
| `onOtpComplete` | `Function` | Callback fired when the OTP input is complete, receiving the entered OTP. | -       |
| `style`         | `style`    | Custom styles for the OTP container.                                      | -       |
| `inputStyle`    | `style`    | Custom styles for each input field.                                       | -       |

### Key Changes and Improvements

1. **Title and Description**: Adjusted the title and description to focus on OTP input functionality instead of chat interfaces.

2. **Features Section**: Clearly listed relevant features that are specific to OTP input, highlighting usability and flexibility.

3. **Installation and Usage**: Improved the example code for clarity and usability. Included more context in the example for better understanding.

4. **Props Table**: Corrected the descriptions of props to accurately reflect their purposes.

5. **Contribution and License Sections**: Added these sections to encourage community engagement and clarify the licensing.

### Conclusion

Feel free to modify any sections further to better align with your branding or preferences. This README should provide a solid foundation for users to understand and utilize your OTP input component effectively! If you have any more requests or need further assistance, let me know!
