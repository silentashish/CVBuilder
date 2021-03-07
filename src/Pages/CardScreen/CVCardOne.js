import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {TextField, Divider, GlobalTheme, RoundAvatar} from '../../Component';
import {formatDate, primaryColor} from '../../Utils';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CVCardOne = ({route, loading}) => {
  const {
    userImage,
    teamId,
    userId,
    name,
    bio,
    positionDetails,
    userAddress,
    website,
    contactNumber,
    facebookLink,
    twitterLink,
    linkedinLink,
    schoolName,
    schoolDegreeName,
    schoolStartingDate,
    schoolEndingDate,
    highSchoolName,
    highSchoolDegreeName,
    highSchoolStartingDate,
    highSchoolEndingDate,
    universityName,
    universityDegreeName,
    universityStartingDate,
    universityEndingDate,
    experienceOneName,
    experienceOnePositionName,
    experienceOneStartingDate,
    experienceOneEndingDate,
    experienceTwoName,
    experienceTwoPositionName,
    experienceTwoStartingDate,
    experienceTwoEndingDate,
    skills,
    interests,
    color,
    email,
    dob,
  } = route.params;

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const styles = _styles({color});

  const [saved, setSaved] = useState(false);
  const viewRef = React.useRef();

  const onTakeScreenshot = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    const allData = await AsyncStorage.getItem('allData');
    let data = [];
    if (allData) {
      data = JSON.parse(allData);
    }
    console.log('All Data', allData);
    await AsyncStorage.setItem(
      'allData',
      JSON.stringify([...data, route.params]),
    );
    viewRef.current.capture().then((uri) => {
      CameraRoll.save(uri, ('photo', 'IDcard'));
      setSaved(true);
    });
  };

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={35} color={GlobalTheme.darkBlueColor} />
      </View>
    );

  return (
    <View style={{flex: 1, backgroundColor: primaryColor}}>
      <View style={{backgroundColor: primaryColor, width: '100%', flex: 1}}>
        <ScrollView horizontal>
          <View style={styles.mainView}>
            <ViewShot ref={viewRef} options={{format: 'jpg', quality: 0.9}}>
              <View style={styles.card}>
                <View style={styles.leftView}>
                  <View
                    style={{backgroundColor: color, height: 15, width: '100%'}}
                  />
                  <Divider />

                  <TextField bold title>
                    {name}
                  </TextField>

                  <Divider />

                  <RoundAvatar size={100} source={{uri: userImage}} />
                  <Divider small />
                  <TextField secondarybody>{positionDetails}</TextField>
                  <Divider />
                  <TextField bold medium>
                    Contact
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <Divider small />
                  <TextField secondarybody bold>
                    Email
                  </TextField>
                  <TextField secondarybody>{email}</TextField>
                  <Divider small />
                  <TextField secondarybody bold>
                    Phone
                  </TextField>
                  <TextField secondarybody>{contactNumber}</TextField>
                  <Divider small />
                  <TextField secondarybody bold>
                    Address
                  </TextField>
                  <TextField secondarybody>{userAddress}</TextField>
                  <Divider small />
                  {website && (
                    <>
                      <TextField secondarybody bold>
                        Website
                      </TextField>
                      <TextField secondarybody>{website}</TextField>
                      <Divider small />
                    </>
                  )}
                  {dob && (
                    <>
                      <TextField secondarybody bold>
                        Date Of Birth
                      </TextField>
                      <TextField secondarybody>{formatDate(dob)}</TextField>
                      <Divider small />
                    </>
                  )}
                  <TextField bold medium>
                    About
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <TextField secondarybody>{bio}</TextField>
                </View>

                <View style={styles.rightView}>
                  <View
                    style={{
                      backgroundColor: color,
                      height: 15,
                      width: '110%',
                      alignSelf: 'flex-start',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    }}
                  />
                  <Divider />
                  <TextField bold medium>
                    Social Media
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <Divider small />
                  <TextField secondarybody>
                    <Icon name="facebook-square" size={20} /> {facebookLink}
                  </TextField>
                  <Divider small />
                  <TextField secondarybody>
                    <Icon name="twitter-square" size={20} /> {twitterLink}
                  </TextField>
                  <Divider small />
                  <TextField secondarybody>
                    <Icon name="linkedin-square" size={20} /> {linkedinLink}
                  </TextField>
                  <Divider medium />
                  <TextField bold medium>
                    Education
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <Divider small />
                  <View>
                    <TextField bold regular>
                      {schoolName}
                    </TextField>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                      }}>
                      <TextField secondarybody>{schoolDegreeName}</TextField>
                    </View>
                    <TextField secondarybody>
                      {formatDate(schoolStartingDate)} to{' '}
                      {formatDate(schoolEndingDate)}
                    </TextField>
                  </View>
                  <Divider small />
                  <View>
                    <TextField bold regular>
                      {highSchoolName}
                    </TextField>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                      }}>
                      <TextField secondarybody>
                        {highSchoolDegreeName}
                      </TextField>
                    </View>
                    <TextField secondarybody>
                      {formatDate(highSchoolStartingDate)} to{' '}
                      {formatDate(highSchoolEndingDate)}
                    </TextField>
                  </View>
                  <Divider small />
                  <View>
                    <TextField bold regular>
                      {universityName}
                    </TextField>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                      }}>
                      <TextField secondarybody>
                        {universityDegreeName}
                      </TextField>
                    </View>
                    <TextField secondarybody>
                      {formatDate(universityStartingDate)} to{' '}
                      {formatDate(universityEndingDate)}
                    </TextField>
                  </View>
                  <Divider small />
                  <TextField bold medium>
                    Work Experience
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <Divider small />
                  <View>
                    <TextField bold regular>
                      {experienceOneName}
                    </TextField>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                      }}>
                      <TextField secondarybody>
                        {experienceOnePositionName}
                      </TextField>
                    </View>
                    <TextField secondarybody>
                      {formatDate(experienceOneStartingDate)} to{' '}
                      {formatDate(experienceOneEndingDate)}
                    </TextField>
                  </View>
                  <View>
                    <TextField bold regular>
                      {experienceTwoName}
                    </TextField>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                      }}>
                      <TextField secondarybody>
                        {experienceTwoPositionName}
                      </TextField>
                    </View>
                    <TextField secondarybody>
                      {formatDate(experienceTwoStartingDate)} to{' '}
                      {formatDate(experienceTwoEndingDate)}
                    </TextField>
                  </View>
                  <TextField bold medium>
                    Skills
                  </TextField>
                  <View
                    style={{height: 1, width: '100%', backgroundColor: '#111'}}
                  />
                  <Divider small />
                  <TextField secondarybody>{skills}</TextField>
                </View>
              </View>
            </ViewShot>
            <TouchableOpacity
              disabled={saved}
              style={[
                styles.sendButton,
                {backgroundColor: saved ? 'green' : 'white'},
              ]}
              onPress={onTakeScreenshot}>
              <TextField>{saved ? 'Saved' : 'Save ID Card'} </TextField>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const _styles = ({color}) => {
  return StyleSheet.create({
    mainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: primaryColor,
    },
    // 3579 x 2551
    card: {
      // backgroundColor: GlobalTheme.darkBlueColor,
      width: 432,
      height: 606,
      alignItems: 'center',
      backgroundColor: '#fff',
      overflow: 'hidden',
      borderRadius: 6,
      position: 'relative',
      flexDirection: 'row',
    },
    head: {width: '100%', alignItems: 'center'},
    line: {
      position: 'absolute',
      height: 100,
      width: 100,
      left: 0,
      top: 0,
      borderTopColor: color,
      borderLeftColor: color,
      borderRightColor: GlobalTheme.white,
      borderBottomColor: GlobalTheme.whiteColor,
      borderWidth: 8,
    },
    logo: {
      width: 200,
      height: 100,
    },
    imageContain: {
      height: 120,
      width: '100%',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    crossView: {
      // width: '100%',
      position: 'absolute',
      // height: 100,
      // backgroundColor: color,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: Dimensions.get('window').width * 0.9,
      borderTopWidth: 120,
      borderRightColor: 'transparent',
      borderTopColor: color,
      transform: [{rotate: '180deg'}],
    },
    infoDetail: {
      // backgroundColor: color,
      // width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    names: {
      flex: 1,
      justifyContent: 'center',
    },
    sendButton: {
      marginTop: 20,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    leftView: {
      flex: 2,
      backgroundColor: '#a1a1a1',
      height: '100%',
      alignItems: 'center',
    },
    rightView: {
      flex: 3,
      backgroundColor: 'white',
      height: '100%',
      paddingStart: 10,
    },
  });
};

export {CVCardOne};
