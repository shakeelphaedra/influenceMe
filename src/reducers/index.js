import {combineReducers} from 'redux';
export default combineReducers({
    auth: () => [],
    entries: () => [
        {
            key: 'somethun',
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            image: require('../assets/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 'somethun-dos',
            title: 'Title 2',
            text: 'Other cool stuff',
            image: require('../assets/2.png'),
            backgroundColor: '#febe29',
        },
        {
            key: 'somethun1',
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: require('../assets/3.png'),
            backgroundColor: '#22bcb5',
        }
    ] ,
    showRealApp: () => false,
})