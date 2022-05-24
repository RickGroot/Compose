import { DataType } from '~source/types/data';

const data: DataType = {
    1: {
        name: 'Piano',
        icon: '\uD834\uDD8F',
        iconType: 'icon',
        // all answers start with "This ..."
        is: [
            'is piano',
            'means play softly',
            'is the opposite of forte',
            'is softer then mezzo piano',
        ],
        isNot: [
            'is pianissimo',
            'means play loudly',
            'is louder then mezzo piano',
        ],
    },
    2: {
        name: 'Pianissimo',
        icon: '\uD834\uDD8F\uD834\uDD8F',
        iconType: 'icon',
        is: [
            'means play really soft',
            'is the opposite of fortissimo',
            'is pianissimo',
        ],
        isNot: ['means play loud', 'is piano', 'is mezzo piano'],
    },
    3: {
        name: 'Mezzo piano',
        icon: '\uD834\uDD90\uD834\uDD8F',
        iconType: 'icon',
        is: [
            'is mezzo-piano',
            'means moderately quiet',
            'is louder then piano',
            'is softer then mezzo-forte',
        ],
        isNot: [
            'is piano',
            'is mezzo-forte',
            'means moderately loud',
            'means play the note short',
            'is louder then mezzo-forte',
        ],
    },
    4: {
        name: 'Mezzo forte',
        icon: '\uD834\uDD90\uD834\uDD91',
        iconType: 'icon',
        is: [
            'means mezzo-forte',
            'means moderately loud',
            'is softer then forte',
            'is louder then mezzo-piano',
        ],
        isNot: [
            'is forte',
            'is mezzo-piano',
            'means moderately quiet',
            'means to play the note soft, then loud',
            'is softer then mezzo-piano',
        ],
    },
    5: {
        name: 'forte',
        icon: '\uD834\uDD91',
        iconType: 'icon',
        is: [
            'is forte',
            'means play the note loudly',
            'is the opposite of piano',
            'is softer then fortissimo',
        ],
        isNot: [
            'is piano',
            'means play the note short',
            'is louder then fortissimo',
            'means "with force"',
        ],
    },
    6: {
        name: 'fortissimo',
        icon: '\uD834\uDD91\uD834\uDD91',
        iconType: 'icon',
        is: [
            'is fortissimo',
            'is double forte',
            'means play very loud',
            'is opposite of pianissimo',
        ],
        isNot: [
            'means play very soft',
            'means play a note louder and louder',
            'is softer then forte',
            'is pianissimo',
        ],
    },
    7: {
        name: 'pianississimo',
        icon: '\uD834\uDD8F\uD834\uDD8F\uD834\uDD8F',
        iconType: 'icon',
        is: [
            'is pianississimo',
            'means play very very quiet',
            'means triple piano',
            'is the opposite of fortississimo',
        ],
        isNot: [
            'is pianissimo',
            'is fortississimo',
            'means to play the note long',
            'is piano',
        ],
    },
    8: {
        name: 'fortississimo',
        icon: '\uD834\uDD91\uD834\uDD91\uD834\uDD91',
        iconType: 'icon',
        is: [
            'is fortississimo',
            'means play very very loud',
            'is triple forte',
            'is the opposite of pianississimo',
        ],
        isNot: [
            'is fortissimo',
            'is pianississimo',
            'means play short notes',
            'is forte',
        ],
    },
    9: {
        name: 'test9',
        icon: 'arr.3',
        iconType: 'text',
        is: ['something1', 'something2', 'something3', 'something4'],
        isNot: ['nothing1', 'nothing2', 'nothing3', 'nothing4'],
    },
};

export default data;
