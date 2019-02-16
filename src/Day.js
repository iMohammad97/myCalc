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


const BACON_IPSUMM =
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

export default class DayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        // this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    };

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
        title: 'Day',
        drawerLabel: () => null,
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('./images/icCalendar/icCalendar.png')}
                style={[styles.sideIcon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
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
                                    source={require('./images/icBack/icBack.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item]}>
                <View style={styles.eventCardColumnsContainer}>
                    <View style={styles.eventCardLeftPane}>
                        <View style={styles.eventCardContainer}>
                            <Text style={styles.eventCardMainText}>
                                {item.name} and tell manny to be right back !
                            </Text>
                            <View style={styles.tagsViewAgenda}>
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
                            <Text style={styles.eventCardMoreText}>
                                {BACON_IPSUMM}
                            </Text>
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
                    <View style={styles.eventCardRightPane}>
                        <View style={styles.eventCardRightPaneContainer}>
                            <View style={styles.eventCardRightPaneUpperContainer}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('./images/icAvatar/icAvatar1.jpg')}
                                        style={styles.profilePictureAgenda}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('./images/icAvatar/icAvatar2.jpg')}
                                        style={styles.profilePictureAgenda}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('./images/icAvatar/icAvatar3.jpg')}
                                        style={styles.profilePictureAgenda}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.eventCardRightPaneLowerBase}>
                                <View style={styles.eventCardRightPaneLowerContainer}>
                                    <Text style={styles.eventCardTime}>
                                        All Day
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            // <View style={[styles.item, {height: item.height}]}><Text style={styles.itemText}>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.itemEmpty}>

                <View style={styles.itemEmptyContainer}>
                    <View style={styles.itemEmptyLine}>

                    </View>
                    <Text style={styles.itemText}>No Events</Text>
                    <View style={styles.itemEmptyLine}>

                    </View>
                </View>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }


}

const styles = StyleSheet.create({
    profilePictureAgenda: {
        marginTop: 5,
        width: 40,
        height: 40,
        borderColor: color5,
        borderRadius: 20,
        borderWidth: 1
    },
    tagsViewAgenda: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemText: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        // fontSize: 15,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "center",
        // lineHeight: 15,
        width: '30%',
        // backgroundColor: color1,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color5,
    },
    eventCardTime: {
        // fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 8,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "center",
        lineHeight: 15,
        maxHeight: '100%',
        width: '100%',
        // backgroundColor: color1,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color5,
    },
    item: {
        backgroundColor: color1,
        // height: 50,
        maxHeight: '100%',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    itemEmptyLine: {
        width: '35%',
        height: 1,
        backgroundColor: color5
    },
    itemEmptyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemEmpty: {
        // backgroundColor: color1,
        // height: 50,
        maxHeight: '100%',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        // opacity: 0
    },
    eventCardColumnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    eventCardRightPane: {
        width: '20%'
    },
    eventCardLeftPane: {
        width: '80%'
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    icSideToggle: {
        height: 30,
        width: 30,
        // backgroundColor: color4
    },
    eventCardTagLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 12,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "left",
        lineHeight: 12,
        // includeFontPadding: false,
        height: 12,
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
    eventCardMainText: {
        width: '100%',
        maxHeight: "100%",
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 17,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        lineHeight: 20,
        textAlign: "left",
        textTransform: 'capitalize',
        // backgroundColor: color4,
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
        // backgroundColor: color4,
        // textAlignVertical: 'bottom',
        // letterSpacing: 1,
        // paddingTop: 0,
        color: color5,
    },
    icTag: {
        height: 12,
        width: 12,
        marginRight: 5,
    },
    eventCardTagBaseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardTagBase: {
        height: 30,
        // backgroundColor: color3,
        // width: '33%',
        marginRight: 8,
        maxWidth: '50%'
    },
    eventCardTitleLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? "normal" : "normal",
        fontStyle: "normal",
        textAlign: "left",
        width: '100%',
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
        color: color5,
    },
    eventCardDateNoLabel: {
        fontFamily: Platform.OS === 'ios' ? "Plantagenet Cherokee" : "Plantagenet Cherokee",
        fontSize: 17,
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    eventCardRightRow1ContainerMore: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventCardRightRow1: {
        maxHeight: '100%',
        width: '100%'
    },
    eventCardRightRow1More: {
        maxHeight: '90%',
        width: '100%'
    },
    eventCardRightRow2: {
        maxHeight: '50%',
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
        maxHeight: '100%',
        width: '100%',
        // paddingRight: 30,
        // backgroundColor: color3,
    },
    eventCardRightMore: {
        maxHeight: '100%',
        width: '100%',
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingRight: 5,
    },
    eventCardRightPaneUpperContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 15,
    },
    eventCardRightPaneLowerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingRight: 5,
    },
    // eventCardRightPaneLowerTransformBase: {
    //     height: 50,
    //     width: 100,
    //     // borderRadius: 4,
    //     transform: [{rotate: '90deg'}],
    //     backgroundColor: color3,
    // },
    eventCardRightPaneLowerBase: {
        maxHeight: '100%',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 3,
        backgroundColor: color2,
    },
    eventCardRightPaneContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingRight: 5,
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
        backgroundColor: color1,
        // margin: 10,
        // marginLeft: 0,
        // marginBottom: 0,
        padding: 10,
        // paddingLeft: 0,
        borderRadius: 5
    },
    eventCard: {
        // flex: 1,
        borderRadius: 5,
        // padding: 10,
        // margin: 10,
        marginRight: 10,
        marginTop: 17,
        // width: '100%',
        height: 50,
        maxHeight: '100%',
        backgroundColor: color1
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
        paddingLeft: 20,
        // paddingBottom: 10,
        // backgroundColor: color4,
    },
    topBarBase: {
        height: '7%',
        width: '100%',
        // backgroundColor: color3,
    },
    calendarBase: {
        height: '35%',
        width: '100%',
        // backgroundColor: color5,
    },
    eventsBase: {
        height: '55%',
        width: '100%',
        backgroundColor: color1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: color1,
    },
    sideIcon: {
        marginTop: 40,
        width: 45,
        height: 45
    }
});