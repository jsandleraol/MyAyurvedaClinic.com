import AldoImage from '../resources/AldoOva.png'
import WendyImage from '../resources/WendySanchez.png'
import LauraImage from '../resources/LauraZampedri.png'
import AlejandraLopez from '../resources/AlejandraLopez.png'
import Carmen from '../resources/CarmenClavelArcas.png'
import CindyLeon from '../resources/CindyLeonCasab2.png'
import Fran from '../resources/FranciscoOttoni.png'
import Hector from '../resources/HectorBarbosa.png'
import Indy from '../resources/IndyMena.png'
import Julieta from '../resources/JulietaSakti.png'
import MariaJose from '../resources/MariaJosePreisler.png'
import Flor from '../resources/Mendozaflor.png'
import Virginia from '../resources/VirginiaAlvarez.png'


export const testimonials = [
    {
        id: 0,
        name: 'Aldo Ova',
        country: 'Mexico',
        review: 'Thank you for this profound, restorative and revitalizing experience. I felt so comfortable and careful. You guys are the best!.',
        image: AldoImage,
    },
    {
        id: 1,
        name: 'Wendy Sanchez',
        country: 'USA',
        review: 'I had several opportunities to receive excellent service from the technicians of this website. I liked how professional they are. You see and feel how much they know and I love the passion in which they perform their work. My health condition has improved. I give my highest recommendation. ',
        image: WendyImage,
    },
    {
        id: 2,
        name: 'Laura Zampedri',
        country: 'Argentina',
        review: 'Excellent service! I recommend every massage!! I enjoy every time and I will go for more!!',
        image: LauraImage,
    },
    {
        id: 3,
        name: 'Carme Clavel Arcas',
        country: 'Nicaragua',
        review: 'The massage I received was very relaxing, giving me time for myself and feeling pampered by the massage. Thanks a lot, Ill be back.',
        image: Carmen,
    },
    {
        id: 4,
        name: 'Cindy Leon Casab',
        country: 'Mexico',
        review: 'The ayurveda massages are of an impressive depth and healing. Not everyone knows how to give them! I loved the experience.',
        image: CindyLeon,
    },
    {
        id: 5,
        name: 'Francisco Ottoni',
        country: 'Brazil',
        review: 'Ayurveda the most complete health system I know! I recommend it to everyone!.',
        image: Fran,
    },
    {
        id: 6,
        name: 'Julieta Sakti',
        country: 'Mexico',
        review: 'An excellent massage widely recommended.',
        image: Julieta,
    },
    {
        id: 7,
        name: 'Virginia Alvarez,',
        country: 'Mexico',
        review: 'You must come to visit this place, you will feel revitalized. The best medicinal massages.',
        image: Virginia,
    },
    {
        id: 8,
        name: 'Hector Barbosa',
        country: 'Mexico',
        review: 'Excellent massages and detoxification techniques! The attention is personalized, they offer you the appropriate therapy for each case. It is something you can not miss.',
        image: Hector,
    },
    {
        id: 9,
        name: 'Flor Mendoza',
        country: 'Flor',
        review: 'Namaste. The hands of my therapist were divine with great softness that makes the body feel pampered and cared for. For me it has been one of my greatest experiences with a specialized and also loving massage. From the first time I lay down on the stretcher I felt move to paradise .. Blessings. I hope others achieve this wonderful experience.',
        image: Flor,
    },
    {
        id: 10,
        name: 'Maria Jose Preisler,',
        country: 'Argentina',
        review: 'Massages of excellence, with the attention of so beautiful beings! I recommend it with my eyes closed!.',
        image: MariaJose,
    },
    {
        id: 11,
        name: 'Indy Mena',
        country: 'Nicaragua',
        review: 'The personal interest, warm customer service, comprehensive knowledge and professionalism made this experience so beneficial and enriching for me. The practical suggestions to improve health and well-being creates awareness in one to respect the body and live in the best way. Thank you guys for all your attention.',
        image: Indy,
    },
    {
        id: 12,
        name: 'Alejandra Lopez',
        country: 'Mexico',
        review: 'I have found the best therapists here, always concerned about our well-being and willing to help us, just like Dr. Preeti Patel. For me, knowing them changed my life.',
        image: AlejandraLopez,
    },
];

export const searchOptions = [
    {
        name: 'Jonathan',
        country: 'Mexico',
    },
    {
        name: 'Aldo Ova',
        country: 'Mexico',
    },
    {
        name: 'Susana',
        country: 'Mexico',
    },
    {
        name: 'Diabetes',
        country: 'Mexico',
    },
]


export const filters = [
    {
        name: 'price',
        options: [
            'Lowest first',
            'Highest first'
        ]
    },
    {
        name: 'availabilty',
        options: [
            'Today',
            'Next 3 Days'
        ]
    },
    {
        name: 'gender',
        options: [
            'Female',
            'Male'
        ]
    },
    {
        name: 'languages',
        options: [
            'English',
            'Mandarin',
            'Spanish',
            'Italian',
            'Hindi',
            'German'
        ]
    },
]


export const doctors = [
    {
        id: 5,
        name: {
            firstName: 'Aldo',
            lastName: 'Ova'
        },
        country: 'Mexico',
        price: 80,
        address: {
            street: '877 West Fremont Avenue',
            appartment: {
                appType: 'Suite',
                appNum: 'l-3',
            },
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94087',
        },
        review: 'Thank you for this profound, restorative and revitalizing experience. I felt so comfortable and careful. You guys are the best!.',
        image: AldoImage,
        rating: 4.5,
        language: [
            'Spanish',
            'English',
        ],
        gender: 'Male',
        slots: {
            '11/20/2020': ['13:00'],
            '11/21/2020': null,
            '11/22/2020': null,
            '11/23/2020': ['06:30', '07:30', '15:00'],
            '11/24/2020': ['07:00', '11:30', '15:00', '16:00'],
            '11/25/2020': ['07:00', '11:30', '15:00', '16:00'],
            '11/26/2020': null,
            '11/27/2020': ['10:00', '12:00'],
            '11/28/2020': ['09:00', '09:30', '13:00', '16:00'],
            '11/29/2020': ['09:00', '11:30', '12:30', '16:00', '16:30', '18:30', '19:15'],
            '12/1/2020': ['08:00', '10:00'],
            '12/2/2020': ['06:30', '07:30', '15:00'],
            '12/9/2020': ['07:00', '11:30', '15:00', '16:00'],
            '12/23/2020': ['10:00'],
        },
        isActive: true,
    },

    {
        id: 1,
        name: {
            firstName: 'Wendy',
            lastName: 'Sanchez'
        },
        country: 'United States',
        price: 108,
        address: {
            street: '877 West Fremont Avenue',
            appartment: {
                appType: null,
                appNum: null,
            },
            city: 'Sunnyvale',
            state: 'CA',
            zipcode: '94087',
        },
        review: 'I had several opportunities to receive excellent service from the technicians of this website. I liked how professional they are. You see and feel how much they know and I love the passion in which they perform their work. My health condition has improved. I give my highest recommendation. ',
        image: WendyImage,
        rating: 5,
        language: [
            'French',
            'Hindi',
        ],
        gender: 'Female',
        slots: {
            '11/20/2020': ['09:00', '11:30', '12:30', '16:00', '16:30', '18:30', '19:15'],
            '11/21/2020': ['16:00', '16:30', '18:30', '19:15'],
            '11/22/2020': ['15:00'],
            '11/23/2020': null,
            '11/24/2020': null,
            '11/25/2020': ['07:00', '11:30', '15:00', '16:00'],
        },
        isActive: true,
    },

    {
        id: 10,
        name: {
            firstName: 'Alejandra',
            lastName: 'Lopez'
        },
        country: 'India',
        price: 185,
        address: {
            street: '877 West Fremont Avenue',
            appartment: {
                appType: 'office',
                appNum: 'A-2',
            },
            city: 'City of Texas',
            state: 'CO',
            zipcode: '943445',
        },
        review: 'I have found the best therapists here, always concerned about our well-being and willing to help us, just like Dr. Preeti Patel. For me, knowing them changed my life.',
        image: AlejandraLopez,
        rating: 4,
        language: [
            'English',
            'German',
        ],
        gender: 'Female',
        slots: {
            '11/20/2020': ['19:15'],
            '11/21/2020': ['08:00', '10:00'],
            '11/22/2020': ['06:30', '07:30', '15:00'],
            '11/23/2020': ['07:00', '11:30','16:00'],
        },
        isActive: false,
    },
];