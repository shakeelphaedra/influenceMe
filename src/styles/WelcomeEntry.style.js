import { StyleSheet, Dimensions, Colors, Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const IS_IOS = Platform.OS === 'ios';
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;


export const styles = {
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    buttonStyle: {
        backgroundColor: '#cd5c5c',
        alignSelf: 'center',
        padding: 10,
        color: '#ffffff',
        fontWeight: "600",
        fontSize: 20,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 20
    },

    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: '#1a1917',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    introContainerStyle: {
        alignItems: 'center', 
        flex: 1,
        justifyContent: 'flex-end',
        fontSize: 18,
        alignItems: 'center',
        marginBottom: 60,
        paddingTop: 30,
        color: '#ffffff'
    },
    titleStyle: {
        alignItems: 'center', 
        fontSize: 39,
        fontFamily: 'Esphimere',
        marginTop: 10,
        color: '#ffffff',
    },
    descriptionStyle: {
        fontSize: 14,
        marginTop: 10,
        width: '82%',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Esphimere',

        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#ffffff',
    },
    bottomTextStyle: {
        color: '#ffffff',
        marginBottom: 50,
        alignSelf: 'center',
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: '#1a1917'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: '#1a1917'
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: '#1a1917'
    },
    title: {
        color: '#1a1917',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: '#888888',
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
}
