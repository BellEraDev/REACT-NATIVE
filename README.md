# Test1_RNN
React-Native (Mobile App)
+++++++++++++
สำหรับการติดตั้ง
+++++++++++++
***********************************************************************************************
-------------------------------------> การอัพเดท React-Native
สำคัญ! ที่ไฟล์ build.gradle ในโฟลเดอร์ app ที่อยู่ในโฟลเดอร์ android ต้องมี...

-> defaultConfig { ...
      multiDexEnabled true
    }

-------------------------------------> React Native Navigation ทำการติดตั้งตามลิ้งด้านล่าง
https://wix.github.io/react-native-navigation/docs/installing
สำคัญ! ที่ไฟล์ build.gradle ในโฟลเดอร์ android ต้องมี...

-> buildscript {
      ext{ ...
        kotlinVersion = "1.3.72" // Or any version above 1.3.x
        RNNkotlinStdlib = "kotlin-stdlib-jdk8"
      }

-> repositories { ...
      mavenLocal()
      mavenCentral()
    }

-------------------------------------> React Native Vector Icons ทำการติดตั้งตามลิ้งด้านล่าง
https://github.com/oblador/react-native-vector-icons
สำคัญ! ที่ไฟล์ build.gradle ในโฟลเดอร์ app ที่อยู่ในโฟลเดอร์ android ต้องมี... 
ยกตัวอย่าง กรณีใช้ icon คือ Ionicons by Iconic Framework (v5.0.1, 1227 icons)

-> project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf' ] // Name of the font files you want to copy
    ]

   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

-------------------------------------> React Native Image Picker ทำการติดตั้งตามลิ้งด้านล่าง
https://github.com/react-native-image-picker/react-native-image-picker

-------------------------------------> การขอ Permission
สำคัญ! ที่ไฟล์ AndroidManifest.xml ในที่อยู่ android/app/src/main ต้องมี...
เพื่อขอใช้กล้องจากคอมพิวเตอร์และ Storage
->  <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> 
 อีกทั้ง ... ให้เข้าไปแก้ไขใน AVD Manager ของ Virtual Devices
 -> เข้าไปที่ Show Advanced Settings
 ส่วนของ Camera Front และ Back ให้เลือกเป็น Emulated หรือ VirtualScene
 
***********************************************************************************************





