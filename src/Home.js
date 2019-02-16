import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button, Image,
    StatusBar,
    StyleSheet, Text, TouchableOpacity,
    View,
    Platform,
    Alert,
    ScrollView,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const color1 = '#262626';
const color2 = '#424242';
const color3 = '#283fff';
const color4 = '#ffffff';
const color5 = '#a0a0a0';

const BACON_IPSUM =
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const TAGS = [
    {
        title: 'Home',
        type: 1,
        imgURL: require('./images/icHomeTag/icHomeTag.png')
    },
    {
        title: 'Work',
        type: 2,
        imgURL: require('./images/icWorkTag/icWorkTag.png')
    },
    {
        title: 'Event',
        type: 3,
        imgURL: require('./images/icEventTag/icEventTag.png')
    },
    {
        title: 'Custom',
        type: 4,
        imgURL: require('./images/icCustomTag/icCustomTag.png')
    },
];

const CONTENT = [
    {
        title: 'First',
        content: BACON_IPSUM,
        date: new Date('2019-02-17').toString(),
        tagCount: 2,
        tagList: [1,2]
    },
    {
        title: 'Call Parnian',
        content: BACON_IPSUM,
        date: new Date('2019-02-28').toString(),
        tagCount: 1,
        tagList: [1]
    },
    {
        title: 'Do homework',
        content: BACON_IPSUM,
        date: new Date('2019-02-04').toString(),
        tagCount: 1,
        tagList: [2]
    },
    {
        title: 'doing my laundry',
        content: BACON_IPSUM,
        date: new Date('2019-02-07').toString(),
        tagCount: 1,
        tagList: [1]
    },
    {
        title: 'Fifth',
        content: BACON_IPSUM,
        date: new Date().toString(),
        tagCount: 2,
        tagList: [1,2]
    },
];


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        // this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    };

    state = {
        activeSections: [],
        // collapsed: true,
        multipleSelect: false,
    };

    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        return (

            <Animatable.View
                duration={400}
                style={[styles.eventCard, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor"
            >
                <View style={styles.eventCardContainer}>

                    <View style={styles.eventCardLeft}>
                        <View style={styles.eventCardLeftTarnsformed}>
                            {/*<Text*/}
                                {/*// style={styles.eventCardTitleLabel}*/}
                                  {/*// numberOfLines={1}     //add condition*/}
                            {/*>*/}
                                {/*HI*/}
                            {/*</Text>*/}
                            <View style={styles.eventCardDateContainer}>
                                <View style={styles.imgDotBase1}>
                                    <Text style={styles.eventCardDateLabel}>
                                        {section.date.slice(4,7)}
                                    </Text>
                                    <Text style={styles.eventCardDateNoLabel}>
                                        {section.date.slice(8,10)}
                                    </Text>
                                </View>
                                {/*<View style={styles.imgDotBase2}>*/}
                                    {/*<Text style={styles.eventCardDateNoLabel}>*/}
                                        {/*23*/}
                                    {/*</Text>*/}
                                {/*</View>*/}
                            </View>
                        </View>
                    </View>

                    <View style={styles.eventCardRight}>
                        <View style={[styles.eventCardRightContainer, isActive ? styles.activeMoreHeader : styles.inactiveMoreHeader]}>
                            <View style={styles.eventCardRightRow1}>
                                <View style={styles.eventCardRightRow1Container}>
                                    <Text style={styles.eventCardTitleLabel}
                                          numberOfLines={1}     //add condition
                                    >
                                        {section.title}
                                    </Text>
                                    <Image
                                        style={styles.icArrow}
                                        source={require('./images/icArrowDown/icArrowDown.png')}     //add condition
                                    />
                                </View>
                            </View>
                            <View style={styles.eventCardRightRow2}>
                                <View style={styles.eventCardRightRow2Container}>
                                    <View style={styles.eventCardTagBase}>
                                        <View style={styles.eventCardTagBaseContainer}>
                                            <Image
                                                style={styles.icTag}
                                                source={require('./images/icHomeTag/icHomeTag.png')}
                                            />
                                            <Text style={styles.eventCardTagLabel}>
                                                Home
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.eventCardTagBase}>
                                        <View style={styles.eventCardTagBaseContainer}>
                                            <Image
                                                style={styles.icTag}
                                                source={require('./images/icWorkTag/icWorkTag.png')}
                                            />
                                            <Text style={styles.eventCardTagLabel}>
                                                Work
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </Animatable.View>
        )
            ;
    };


    renderContent(section, _, isActive) {
        return (
            <Animatable.View
                             duration={400}
                             style={[styles.eventCardMore, isActive ? styles.active : styles.inactive]}
                             transition="backgroundColor"
            >
                <View style={styles.eventCardContainer}>

                    <View style={styles.eventCardLeft}>
                        <View style={styles.eventCardContainer}>
                        </View>
                    </View>

                    <View style={styles.eventCardRightMore}>
                        <View style={[styles.eventCardRightContainer, isActive ? styles.activeMore : styles.inactiveMore]}>
                            <View style={styles.eventCardRightRow1More}>
                                <View style={styles.eventCardRightRow1ContainerMore}>
                                    <Text style={styles.eventCardMoreText}>
                                        {section.content}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.eventCardRightRow2More}>
                                <View style={styles.eventCardRightRow2MoreContainer}>
                                    <TouchableOpacity
                                        style={styles.eventCardMoreButton}
                                    >
                                        <Text style={styles.eventCardMoreButtonLabel}>
                                            Full entry
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </Animatable.View>
        );
    }

    convertToFullMonthName = month => {
        let fullMonthName;
        switch (month) {
            case "Jan":
                fullMonthName = 'January';
                break;
            case "Feb":
                fullMonthName = 'February';
                break;
            case "Mar":
                fullMonthName = 'March';
                break;
            case "Apr":
                fullMonthName = 'April';
                break;
            case "May":
                fullMonthName = 'May';
                break;
            case "Jun":
                fullMonthName = 'June';
                break;
            case "Jul":
                fullMonthName = 'July';
                break;
            case "Aug":
                fullMonthName = 'August';
                break;
            case "Sep":
                fullMonthName = 'September';
                break;
            case "Oct":
                fullMonthName = 'October';
                break;
            case "Nov":
                fullMonthName = 'November';
                break;
            case "Dec":
                fullMonthName = 'December';
                break;
            default:
                fullMonthName = month;
        }
        ;
        return fullMonthName;
    };

    static navigationOptions = {
        header: null,
        title: 'Home',
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
            <View
                // source={require('./images/icCalendar/icCalendar.png')}
                style={[styles.sideIcon, {tintColor: tintColor}]}
            >
                <View style={styles.sideIconContainer}>
                    <View style={styles.sideIconBar1}>
                        <View style={styles.sideIconBarContainer}>
                            <Text style={styles.sideIconNumberLabel}>
                                {Date().slice(8, 10)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sideIconBar2}>
                        <Text style={styles.sideIconTextLabel}>
                            {Date().slice(4, 7)}
                        </Text>
                    </View>
                </View>
            </View>
        ),
    };

    render() {
        const {multipleSelect, activeSections} = this.state;
        return (
            <SafeAreaView style={styles.main}>
                <View style={styles.mainContainer}>
                    <StatusBar hidden={true}/>
                    <View style={styles.topBarBase}>
                        <View style={styles.topBarContainer}>
                            <TouchableOpacity
                                onPress={() => (this.props.navigation.toggleDrawer())}
                            >
                                <Image
                                    style={styles.icSideToggle}
                                    source={require('./images/icSideToggle/icSideToggleLight.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.calendarBase}>
                        <View style={styles.calendarBaseContainer}>
                            <View style={styles.calendarBaseMonthBarStyle}>
                                <View style={styles.calendarBaseMonthBarContainer}>
                                    <Text style={styles.monthTextLabel}>
                                        {this.convertToFullMonthName(Date().slice(4, 7))}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.calendarBaseCalendarStyle}>
                                <View style={styles.calendarBaseCalendarContainer}>
                                    <CalendarList
                                        monthFormat={'MMMM yyyy'}
                                        // onMonthChange={(month) => {console.log('month changed', month)}}
                                        // onDayPress={(day) => {console.log('selected day', day)}}
                                        hideExtraDays={true}
                                        // showWeekNumbers={true}
                                        // hideDayNames={true}
                                        scrollEnabled={true}
                                        // Handler which gets executed on day press. Default = undefined
                                        onDayPress={(day) => {console.log('selected day', day)}}
                                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                                        // onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                                        // Max amount of months allowed to scroll to the past. Default = 50
                                        pastScrollRange={10}
                                        // Max amount of months allowed to scroll to the future. Default = 50
                                        futureScrollRange={10}
                                        // Enable or disable vertical scroll indicator. Default = false
                                        showScrollIndicator={false}
                                        // Enable horizontal scrolling, default = false
                                        horizontal={true}
                                        // Enable paging on horizontal, default = false
                                        pagingEnabled={true}
                                        // Set custom calendarWidth.
                                        // calendarWidth={400}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                        }}
                                        theme={{
                                            backgroundColor: color1,
                                            calendarBackground: color1,
                                            textSectionTitleColor: '#b6c1cd',
                                            selectedDayBackgroundColor: '#00adf5',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: color4,
                                            dayTextColor: color5,
                                            textDisabledColor: color2,
                                            dotColor: '#00adf5',
                                            selectedDotColor: '#ffffff',
                                            arrowColor: color5,
                                            monthTextColor: color4,
                                            // textDayFontFamily: "Plantagenet Cherokee",
                                            textMonthFontFamily: "Plantagenet Cherokee",
                                            // textDayHeaderFontFamily: 'monospace',
                                            textMonthFontWeight: 'bold',
                                            textDayFontSize: 16,
                                            textMonthFontSize: 20,
                                            textDayHeaderFontSize: 16,
                                            'stylesheet.calendar.header': {
                                                dayHeader: {
                                                    marginTop: 0,
                                                    marginBottom: 0,
                                                    width: 32,
                                                    textAlign: 'center',
                                                    // fontSize: appStyle.textDayHeaderFontSize,
                                                    fontFamily: "Plantagenet Cherokee",
                                                    color: color4
                                                },
                                                monthText: {
                                                    fontSize: 20,
                                                    fontFamily: "Plantagenet Cherokee",
                                                    fontWeight: 'bold',
                                                    color: color4,
                                                    margin: 0
                                                },

                                                week: {
                                                    marginTop: 7,
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around'
                                                },
                                            },
                                            'stylesheet.day.single': {
                                                base: {
                                                    width: 20,
                                                    height: 20,
                                                    alignItems: 'center'
                                                },
                                                text: {
                                                    marginTop: Platform.OS === 'android' ? 0 : 0,
                                                    fontSize: 16,
                                                    // fontFamily: appStyle.textDayFontFamily,
                                                    fontWeight: '300',
                                                    color: color5,
                                                    // backgroundColor: 'rgba(255, 255, 255, 0)'
                                                },
                                                alignedText: {
                                                    marginTop: Platform.OS === 'android' ? 0 : 0
                                                },
                                                today: {
                                                    backgroundColor: color1
                                                },
                                                todayText: {
                                                    color: color4,
                                                    fontWeight: 'bold'
                                                },
                                            },

                                        }}
                                        markingType={'custom'}
                                        markedDates={{
                                            '2019-02-17': {
                                                customStyles: {
                                                    container: {
                                                        borderRadius: 0,
                                                        // width: 30,
                                                        // height: 30,
                                                        // padding: 2,
                                                        borderBottomWidth: 1.5,
                                                        borderBottomColor: color3
                                                    },
                                                    text: {
                                                        // color: color5,
                                                        // fontWeight: 'bold'
                                                    },
                                                },
                                            },
                                            '2019-02-27': {
                                                customStyles: {
                                                    container: {
                                                        borderRadius: 0,
                                                        // width: 30,
                                                        // height: 30,
                                                        // padding: 2,
                                                        borderBottomWidth: 1.5,
                                                        borderBottomColor: color3
                                                    },
                                                    text: {
                                                        // color: color5,
                                                        // fontWeight: 'bold'
                                                    },
                                                },
                                            },
                                            '2019-02-04': {
                                                customStyles: {
                                                    container: {
                                                        borderRadius: 0,
                                                        // width: 30,
                                                        // height: 30,
                                                        // padding: 2,
                                                        borderBottomWidth: 1.5,
                                                        borderBottomColor: color3
                                                    },
                                                    text: {
                                                        // color: color5,
                                                        // fontWeight: 'bold'
                                                    },
                                                },
                                            },
                                            '2019-02-08': {
                                                customStyles: {
                                                    container: {
                                                        borderRadius: 0,
                                                        // width: 30,
                                                        // height: 30,
                                                        // padding: 2,
                                                        borderBottomWidth: 1.5,
                                                        borderBottomColor: color3
                                                    },
                                                    text: {
                                                        // color: color5,
                                                        // fontWeight: 'bold'
                                                    },
                                                },
                                            }}}
                                        // markedDates={{
                                        //     '2019-02-19': {selected: true, marked: true,textColor: 'black' ,selectedColor: 'blue', color: 'yellow'},
                                        //     '2019-02-09': {textColor: 'yellow'},
                                        //     '2019-02-08': {marked: true},
                                        //     '2019-02-18': {marked: true, dotColor: color3, activeOpacity: 0},
                                        //     '2019-02-20': {disabled: true, disableTouchEvent: true}
                                        // }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.eventsBase}>
                        <View style={styles.eventsBaseContainer}>
                            <View style={styles.eventsBaseTitleBar}>
                                <View style={styles.eventsBaseTitleBarContainer}>
                                    <Text style={styles.eventsBaseTitleText}>
                                        Events
                                    </Text>
                                </View>
                            </View>
                            <ScrollView style={styles.eventsBaseListBar}>
                                <View style={styles.eventsBaseListBarContainer}>

                                    <Accordion
                                        activeSections={activeSections}
                                        sections={CONTENT}
                                        touchableComponent={TouchableOpacity}
                                        expandMultiple={multipleSelect}
                                        renderHeader={this.renderHeader}
                                        renderContent={this.renderContent}
                                        duration={400}
                                        onChange={this.setSections}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };


}

const styles = StyleSheet.create({
    icSideToggle: {
        height: 25,
        width: 25
    },
    eventCardTagLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 15,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "left",
        lineHeight: 15,
        height: 15,
        // backgroundColor: color1,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color5,
    },
    eventCardMoreButtonLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 15,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "center",
        height: '100%',
        width: '100%',
        paddingTop: 2,
        // backgroundColor: color1,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color4,
    },
    eventCardMoreText: {
        width: '100%',
        maxHeight: "100%",
        // fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 15,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        lineHeight: 20,
        textAlign: "left",
        // backgroundColor: color1,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color5,
    },
    icTag: {
        height: 15,
        width: 15,
        marginRight: 5,
    },
    eventCardTagBaseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardTagBase: {
        height: '100%',
        width: '33%',
        maxWidth: '50%'
    },
    eventCardTitleLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "left",
        maxWidth: '90%',
        maxHeight: '100%',
        lineHeight: 18,
        textTransform: 'capitalize',
        letterSpacing: 1,
        paddingTop: 0,
        color: color4,
    },
    eventCardDateLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 15,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "right",
        width: '100%',
        // height: '100%',
        // lineHeight: 18,
        textTransform: 'capitalize',
        // letterSpacing: 1,
        // paddingTop: 0,
        textAlignVertical: 'bottom',
        paddingRight: 2,
        color: color5,
    },
    eventCardDateNoLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 17,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "right",
        width: '100%',
        paddingRight: 2,
        // height: '100%',
        // lineHeight: 18,
        textTransform: 'capitalize',
        // letterSpacing: 1,
        // paddingTop: 0,
        textAlignVertical: 'bottom',
        color: color5,
    },
    eventCardRightRow2Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardRightRow2MoreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    eventCardMoreButton: {
        height: 25,
        width: 120,
        borderWidth: 1,
        borderColor: color5,
        borderRadius: 4,
        marginTop: 5
    },
    eventCardRightRow1Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventCardRightRow1ContainerMore: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardRightRow1: {
        height: '50%',
        width: '100%'
    },
    eventCardRightRow1More: {
        maxHeight: '90%',
        width: '100%'
    },
    eventCardRightRow2: {
        height: '50%',
        width: '100%'
    },
    eventCardRightRow2More: {
        height: 40,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        // backgroundColor: color2,
    },
    inactive: {
        // backgroundColor: color2,
    },
    activeMore: {
        marginTop: 0,
        paddingTop: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    inactiveMore: {
        // backgroundColor: color2,
    },
    activeMoreHeader: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    inactiveMoreHeader: {
        // backgroundColor: color2,
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
    imgDot: {
        height: 15,
        width: 15,
    },
    icArrow: {
        height: 20,
        width: 20,
    },
    imgDotBaseViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgDotBaseView: {
        height: '100%',
        width: '100%',
    },
    imgDotBase1: {
        height: '100%',
        width: '100%',
        // padding:,
        justifyContent: 'flex-start'
        // backgroundColor: color2
    },
    imgDotBase2: {
        height: '50%',
        width: '100%',
        justifyContent: 'flex-start'
        // backgroundColor: color2
    },
    eventCardRight: {
        height: '100%',
        width: '85%',
        paddingRight: 30,
        // backgroundColor: color3,
    },
    eventCardRightMore: {
        maxHeight: '100%',
        width: '85%',
        paddingRight: 30,
    },
    eventCardLeftTarnsformed: {
        height: '100%',
        width: '100%',
        transform: [{rotate: '270deg'}],
    },
    eventCardLeft: {
        height: '100%',
        width: '15%',
        paddingVertical: 10,
        // backgroundColor: color4
    },
    eventCardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    eventCardDateContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardRightContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color2,
        margin: 10,
        marginLeft: 0,
        marginBottom: 0,
        padding: 10,
        // paddingLeft: 0,
        borderRadius: 5
    },
    eventCard: {
        height: 70,
        width: '100%',
    },
    eventCardMore: {
        maxHeight: '100%',
        width: '100%',
    },
    eventsBaseTitleText: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 25,
        fontWeight: Platform.OS === 'ios' ? "bold" : "bold",
        fontStyle: "normal",
        textAlign: "left",
        width: '100%',
        letterSpacing: 1.5,
        paddingLeft: 30,
        color: color4,
    },
    eventsBaseTitleBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    eventsBaseListBarContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventsBaseContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventsBaseTitleBar: {
        width: '100%',
        height: '10%',
        // backgroundColor: color4
    },
    eventsBaseListBar: {
        width: '100%',
        height: '90%',
        paddingLeft: 30,
        marginBottom: 10,
        // backgroundColor: color5
    },
    sideIconTextLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 20,
        fontWeight: Platform.OS === 'ios' ? "100" : "100",
        fontStyle: "normal",
        width: '100%',
        height: '100%',
        // lineHeight: 20,
        letterSpacing: 3,
        textAlign: "center",
        // textAlignVertical: 'bottom',
        color: color4,
        // backgroundColor: color2,
    },
    sideIconNumberLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 25,
        fontWeight: Platform.OS === 'ios' ? "100" : "100",
        fontStyle: "normal",
        width: '100%',
        height: '100%',
        // lineHeight: 20,
        // letterSpacing: 3,
        textAlign: "center",
        // textAlignVertical: 'bottom',
        color: color4,
        // backgroundColor: color2,
    },
    sideIconBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideIconBar1: {
        height: '60%',
        width: '100%'
    },
    sideIconBar2: {
        height: '40%',
        width: '100%'
    },
    sideIconContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarBaseMonthBarContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthTextLabel: {
        transform: [{rotate: '270deg'}],
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 20,
        fontWeight: Platform.OS === 'ios' ? "100" : "100",
        fontStyle: "normal",
        width: 100,
        height: 20,
        lineHeight: 20,
        letterSpacing: 3,
        textAlign: "center",
        textAlignVertical: 'bottom',
        color: color4,
        // backgroundColor: color2,
    },
    calendarBaseCalendarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: color5,
    },
    calendarBaseCalendarStyle: {
        height: '100%',
        width: '100%',
        // paddingRight: '10%',
        // paddingTop: '10%',
        // paddingBottom: '10%',
        // backgroundColor: color4,
    },
    calendarBaseMonthBarStyle: {
        height: '100%',
        width: '0%',
        // backgroundColor: color3,
    },
    calendarBaseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: color4,
    },
    topBarBase: {
        height: '7%',
        width: '100%',
        backgroundColor: color1,
    },
    calendarBase: {
        height: '35%',
        width: '100%',
        // backgroundColor: color5,
    },
    eventsBase: {
        height: '58%',
        width: '100%',
        backgroundColor: color1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: color1,
        // flex: 1,
        // backgroundColor: '#fff'
    },
    sideIcon: {
        marginTop: 10,
        width: 50,
        height: 50
    }
});