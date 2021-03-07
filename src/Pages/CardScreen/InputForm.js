import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AppHeader, Button, Divider, ResolutionGrid} from '../../Component';
import {formatDate, primaryColor} from '../../Utils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';

const icons = [
  'red',
  'blue',
  'cadetblue',
  'aquamarine',
  'crimson',
  'darkslategrey',
  'firebrick',
  'maroon',
  'navy',
  'olivedrab',
  'purple',
  'teal',
];

const InputPart = ({
  title,
  style,
  onChangeText,
  value,
  placeholder,
  multiline,
  keyboardType,
  half,
  numberOfLines,
}) => (
  <View style={[styles.inputForm, half && {width: '48%'}]}>
    <Text style={styles.title}>{title}</Text>
    <Divider medium />
    <TextInput
      placeholder={placeholder}
      style={[styles.inputTxt, style]}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholderTextColor={'gray'}
      multiline={multiline}
      keyboardType={keyboardType}
      numberOfLines={numberOfLines}
    />
  </View>
);

const DatePicker = ({title, style, value, onChangeDate, minimumDate, half}) => {
  const [datePickerVisible, setShowDatePicker] = useState(false);
  const hideDayPicker = () => {
    setShowDatePicker(false);
  };
  const showDayPicker = () => {
    setShowDatePicker(true);
  };
  return (
    <TouchableOpacity
      style={[styles.inputForm, half && {width: '48%'}]}
      onPress={showDayPicker}>
      <Text style={styles.title}>{title}</Text>
      <Divider medium />
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        date={value}
        onConfirm={(date) => {
          onChangeDate(date);
          hideDayPicker();
        }}
        onCancel={hideDayPicker}
        minimumDate={minimumDate}
      />
      <View style={[styles.inputTxt]}>
        <Text style={styles.date}>{formatDate(value)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const InputForm = (props) => {
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const [iconName, setIconName] = useState('red');

  const createResolution = () => {
    props.navigation.navigate('CVScreen', {
      teamId: '11',
      userId: '11',
      userImage,
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
      color: iconName,
      email,
      dob,
    });
  };

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [positionDetails, setPositionDetails] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const [facebookLink, setFacebookLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');

  const [schoolName, setSchoolName] = useState('');
  const [schoolDegreeName, setSchoolDregreeName] = useState('');
  const [schoolStartingDate, setSchoolStartingDate] = useState(new Date());
  const [schoolEndingDate, setSchoolEndingDate] = useState(new Date());

  const [highSchoolName, setHighSchoolName] = useState('');
  const [highSchoolDegreeName, setHighSchoolDregreeName] = useState('');
  const [highSchoolStartingDate, setHighSchoolStartingDate] = useState(
    new Date(),
  );
  const [highSchoolEndingDate, setHighSchoolEndingDate] = useState(new Date());

  const [universityName, setUniversityName] = useState('');
  const [universityDegreeName, setUniversityDregreeName] = useState('');
  const [universityStartingDate, setUniversityStartingDate] = useState(
    new Date(),
  );
  const [universityEndingDate, setUniversityEndingDate] = useState(new Date());

  const [experienceOneName, setexperienceOneName] = useState('');
  const [experienceOnePositionName, setexperienceOnePositionName] = useState(
    '',
  );
  const [experienceOneStartingDate, setexperienceOneStartingDate] = useState(
    new Date(),
  );
  const [experienceOneEndingDate, setexperienceOneEndingDate] = useState(
    new Date(),
  );

  const [experienceTwoName, setexperienceTwoName] = useState('');
  const [experienceTwoPositionName, setexperienceTwoPositionName] = useState(
    '',
  );
  const [experienceTwoStartingDate, setexperienceTwoStartingDate] = useState(
    new Date(),
  );
  const [experienceTwoEndingDate, setexperienceTwoEndingDate] = useState(
    new Date(),
  );

  const [skills, setSkills] = useState('');

  const [interests, setInterests] = useState('');

  const [dob, setDOB] = useState(new Date());
  const [error, setError] = useState('');
  const [userImage, setUserImage] = useState(
    'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
  );
  const [schoolImage, setschoolImage] = useState(
    'https://i.pinimg.com/originals/70/34/1f/70341ff61825f30a9bf030c4d4458d2c.jpg',
  );

  const SelectUserImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      setUserImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Enter Details" />

      <ScrollView>
        <View>
          <Divider medium />
          <View style={styles.imgFile}>
            <TouchableOpacity onPress={SelectUserImage}>
              <Text style={styles.titleCenter}>User Image</Text>
              <Divider medium />
              {/* <View style={styles.inputTxt}> */}
              <Image
                style={{height: 150, width: 150, borderRadius: 5}}
                source={{uri: userImage}}
              />
              {/* </View> */}
            </TouchableOpacity>
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={name}
              onChangeText={(text) => {
                setName(text);
                setError('');
              }}
              title="Name"
              placeholder="Enter Name"
              color="gray"
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={bio}
              onChangeText={(text) => {
                setBio(text);
                setError('');
              }}
              title="Bio"
              placeholder="Enter Details"
              color="gray"
            />
          </View>

          <Divider medium />

          <DatePicker
            title="Date of Birth"
            value={dob}
            onChangeDate={(value) => {
              setDOB(value);
            }}
          />

          <Divider medium />

          <View>
            <InputPart
              value={positionDetails}
              onChangeText={(text) => {
                setPositionDetails(text);
                setError('');
              }}
              title="Position Details"
              placeholder="Enter Position Name"
              color="gray"
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={userAddress}
              onChangeText={(text) => {
                setUserAddress(text);
                setError('');
              }}
              title="Address"
              placeholder="Enter Address"
              color="gray"
              numberOfLines={4}
              multiline
            />
          </View>
          <Divider medium />
          <View>
            <InputPart
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError('');
              }}
              title="Email Address"
              placeholder="Enter Email Address"
              color="gray"
              numberOfLines={4}
              multiline
            />
          </View>
          <Divider medium />
          <View>
            <InputPart
              value={contactNumber}
              onChangeText={(text) => {
                setContactNumber(text);
                setError('');
              }}
              title="Contact Number"
              placeholder="Enter Contact Number"
              color="gray"
              numberOfLines={4}
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={website}
              onChangeText={(text) => {
                setWebsite(text);
                setError('');
              }}
              title="Website"
              placeholder="Enter Email Address"
              color="gray"
              numberOfLines={4}
              multiline
            />
          </View>

          <Divider large />
          {/* social media input details from here */}
          <View>
            <InputPart
              value={facebookLink}
              onChangeText={(text) => {
                setFacebookLink(text);
                setError('');
              }}
              title="Facebook Link"
              placeholder="Enter Facebook Link"
              color="gray"
            />
          </View>
          <Divider medium />
          <View>
            <InputPart
              value={twitterLink}
              onChangeText={(text) => {
                setTwitterLink(text);
                setError('');
              }}
              title="Twitter Link"
              placeholder="Enter Twitter Link"
              color="gray"
            />
          </View>
          <Divider medium />
          <View>
            <InputPart
              value={linkedinLink}
              onChangeText={(text) => {
                setLinkedinLink(text);
                setError('');
              }}
              title="Linkedin Link"
              placeholder="Enter Linkedin Link"
              color="gray"
            />
          </View>

          <Divider large />
          {/* primary school details here */}
          <View>
            <InputPart
              value={schoolName}
              onChangeText={(text) => {
                setSchoolName(text);
                setError('');
              }}
              title="School Name"
              placeholder="Enter School Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={schoolDegreeName}
              onChangeText={(text) => {
                setSchoolDregreeName(text);
                setError('');
              }}
              title="Enter School Degree Name"
              placeholder="Enter Degree Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View style={styles.dateInput}>
            <DatePicker
              title="Starting Year"
              value={schoolStartingDate}
              half
              onChangeDate={(value) => {
                setSchoolStartingDate(value);
              }}
            />
            <DatePicker
              title="Ending Year"
              value={schoolEndingDate}
              half
              onChangeDate={(value) => {
                setSchoolEndingDate(value);
              }}
            />
          </View>

          <Divider large />

          <View>
            <InputPart
              value={highSchoolName}
              onChangeText={(text) => {
                setHighSchoolName(text);
                setError('');
              }}
              title="High School Name"
              placeholder="Enter High School Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={highSchoolDegreeName}
              onChangeText={(text) => {
                setHighSchoolDregreeName(text);
                setError('');
              }}
              title="Enter High School Degree Name"
              placeholder="Enter High Degree Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View style={styles.dateInput}>
            <DatePicker
              title="Starting Year"
              value={highSchoolStartingDate}
              half
              onChangeDate={(value) => {
                setHighSchoolStartingDate(value);
              }}
            />
            <DatePicker
              title="Ending Year"
              value={highSchoolEndingDate}
              half
              onChangeDate={(value) => {
                setHighSchoolEndingDate(value);
              }}
            />
          </View>

          <Divider large />

          <View>
            <InputPart
              value={universityName}
              onChangeText={(text) => {
                setUniversityName(text);
                setError('');
              }}
              title="University Name"
              placeholder="Enter University Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={universityDegreeName}
              onChangeText={(text) => {
                setUniversityDregreeName(text);
                setError('');
              }}
              title="University Degree Name"
              placeholder="Enter University Degree Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View style={styles.dateInput}>
            <DatePicker
              title="Starting Year"
              value={universityStartingDate}
              half
              onChangeDate={(value) => {
                setUniversityStartingDate(value);
              }}
            />
            <DatePicker
              title="Ending Year"
              value={universityEndingDate}
              half
              onChangeDate={(value) => {
                setUniversityEndingDate(value);
              }}
            />
          </View>

          <Divider large />

          <View style={styles.inputForm}>
            <Text style={styles.title}>Experience One</Text>
          </View>
          <Divider divider />
          <View>
            <InputPart
              value={experienceOneName}
              onChangeText={(text) => {
                setexperienceOneName(text);
                setError('');
              }}
              title="Company Name"
              placeholder="Enter Company Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={experienceOnePositionName}
              onChangeText={(text) => {
                setexperienceOnePositionName(text);
                setError('');
              }}
              title="Position Name"
              placeholder="Enter Position Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View style={styles.dateInput}>
            <DatePicker
              title="Starting Year"
              value={experienceOneStartingDate}
              half
              onChangeDate={(value) => {
                setexperienceOneStartingDate(value);
              }}
            />
            <DatePicker
              title="Ending Year"
              value={experienceOneEndingDate}
              half
              onChangeDate={(value) => {
                setexperienceOneEndingDate(value);
              }}
            />
          </View>

          <Divider large />

          <View style={styles.inputForm}>
            <Text style={styles.title}>Experience Two</Text>
          </View>
          <Divider divider />
          <View>
            <InputPart
              value={experienceTwoName}
              onChangeText={(text) => {
                setexperienceTwoName(text);
                setError('');
              }}
              title="Company Name"
              placeholder="Enter Company Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={experienceTwoPositionName}
              onChangeText={(text) => {
                setexperienceTwoPositionName(text);
                setError('');
              }}
              title="Position Name"
              placeholder="Enter Position Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View style={styles.dateInput}>
            <DatePicker
              title="Starting Year"
              value={experienceTwoStartingDate}
              half
              onChangeDate={(value) => {
                setexperienceTwoStartingDate(value);
              }}
            />
            <DatePicker
              title="Ending Year"
              value={experienceTwoEndingDate}
              half
              onChangeDate={(value) => {
                setexperienceTwoEndingDate(value);
              }}
            />
          </View>

          <Divider large />

          <View>
            <InputPart
              value={skills}
              onChangeText={(text) => {
                setSkills(text);
                setError('');
              }}
              title="Skills"
              placeholder="Enter Details"
              color="gray"
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={interests}
              onChangeText={(text) => {
                setInterests(text);
                setError('');
              }}
              title="Interests"
              placeholder="Enter Interests"
              color="gray"
            />
          </View>

          <Divider large />

          <TouchableOpacity style={styles.inputForm} onPress={showDatePicker}>
            <Text style={styles.title}>Color</Text>
            <Divider medium />
            <View style={styles.icons}>
              {icons.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.iconWrap,
                    item === iconName
                      ? {borderWidth: 2, borderColor: '#fff'}
                      : null,
                  ]}
                  onPress={() => {
                    setIconName(item);
                    setError('');
                  }}>
                  <View
                    style={{backgroundColor: item, height: 50, width: 50}}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>

          <Divider medium />

          {error ? (
            <View style={styles.inputForm}>
              <Text style={styles.err}>* {error}</Text>
            </View>
          ) : null}

          <Button full width onPress={createResolution}>
            Create ID Card
          </Button>

          <Divider medium />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  imgFile: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputForm: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#fcf8e8',
    fontSize: 18,
  },
  titleCenter: {
    fontWeight: 'bold',
    color: '#fcf8e8',
    fontSize: 18,
    textAlign: 'center',
  },
  inputTxt: {
    height: 50,
    borderColor: '#fcf8e8',
    borderWidth: 2,
    borderTopLeftRadius: 0,
    borderRadius: 7,
    color: 'gray',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  date: {
    color: 'gray',
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconWrap: {
    padding: 5,
  },
  err: {
    color: 'red',
  },
  dateInput: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  leftView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  rightView: {
    flex: 3,
    backgroundColor: 'red',
  },
});

export {InputForm};
