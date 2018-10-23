#!/usr/bin/env node
'use strict'

//adapted from
// https://thunderwiring.wordpress.com/2017/04/22/node-js-adb-how-to-thunderhack-your-android/

const appuimADB = require('appium-adb')
const  {ADB} = appuimADB
let adb = new ADB();
 

// calling the function
getScreen()
 
/*
 * captures a screenshot, names it 'screenshot.png' in the Android,
 * and pulls it to the PC.
 * the 2nd arg which 'pull' takes, is the name of the file to be-
 * shown in the PC.
 * Using the '.then' to ensure that the pulling occures after taking-
 * the picture
 */
function getScreen() {
  adb.shell('screencap -p  /sdcard/screencap.png')
  .then(() => {adb.pull('/mnt/sdcard/screencap.png', 'screencap.png')})
}