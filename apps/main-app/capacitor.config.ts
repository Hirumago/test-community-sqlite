import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
    appId: '***',
    appName: '***',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        CapacitorSQLite: {
            iosDatabaseLocation: 'Library/CapacitorDatabase',
            iosIsEncryption: true,
            iosKeychainPrefix: '***',
            iosBiometric: {
                biometricAuth: false,
                biometricTitle: 'Biometric login for capacitor sqlite'
            },
            androidIsEncryption: true,
            androidBiometric: {
                biometricAuth: false,
                biometricTitle: 'Biometric login for capacitor sqlite',
                biometricSubTitle: 'Log in using your biometric'
            }
        }
    }
}

export default config

