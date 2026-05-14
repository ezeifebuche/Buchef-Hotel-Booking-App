import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import menuIcon from './menuIcon.svg'
import closeIcon from './closeIcon.svg'
import calendarIcon from './calendarIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import starIconFilled from './starIconFilled.svg'
import starIconHalfFilled from './starIconHalfFilled.svg'
import bookIcon from './bookIcon.svg'
import exclusiveOfferImg1 from './exclusiveOfferImg1.jpg'
import exclusiveOfferImg2 from './exclusiveOfferImg2.jpg'
import exclusiveOfferImg3 from './exclusiveOfferImg3.jpg'
import locationIcon from './locationIcon.svg'
import arrowIcon from './arrowIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import roomServiceIcon from './roomServiceIcon.png'
import wifiIcon from './wifiIcon.svg'
import freeBreakFastIcon from './freeBreakFastIcon.png'
import dashboardIcon from './dashboardIcon.svg'
import listIcon from './listIcon.svg'
import addIcon from './addIcon.svg'
import homeIcon from './homeIcon.svg'
import heartIcon from './heartIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import badgeIcon from './badgeIcon.svg'
import freeDinnerIcon from './freeDinnerIcon.svg'
import happyEndingIcon from './happyEndingIcon.svg'

export const assets = {
    logo,
    searchIcon,
    menuIcon,
    closeIcon,
    calendarIcon,
    starIconFilled,
    bookIcon,
    starIconHalfFilled,
    locationIcon,
    arrowIcon,
    mountainIcon,
    poolIcon,
    roomServiceIcon,
    freeBreakFastIcon,
    wifiIcon,
    dashboardIcon,
    addIcon,
    listIcon,
    homeIcon,
    heartIcon,
    badgeIcon,
    locationFilledIcon,
    happyEndingIcon,
    freeDinnerIcon,

}

export const cities = [
    "Port Harcourt",
    "Lagos",
    "Uyo",
    "Enugu"
    
];

export const exclusiveOffer = [
    {_id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", 
        priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferImg1},
    {_id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", 
        priceOff: 35, expiryDate: "Sep 20", image: exclusiveOfferImg2},
    {_id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties", 
        priceOff: 50, expiryDate: "Sep 25", image: exclusiveOfferImg3},
];

export const hotelDummyData = {
    "_id": "76789098r899002",
    "name": "Limburg Suites",
    "address": "Road 20, Rumuagholu, Port",
    "contact": "+2348107729161",
    "owner": "user_2ungdhrtyijkskkdg",
    "city": "Port Harcourt",
    "createdAt": "2026-04-22-10T006:22:11.633Z",
    "updatedAt": "2026-04-22-10T006:22:11.633Z",
    "_v": 0
};

export const roomsDummyData = [
    {   "_id": "778f8900aceh4445hh76",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 400,
        "amenities": ["Room Service", "Mountain View","Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2026-04-10T06:24:06.345Z",
        "updatedAt": "2026-04-10T06:24:06.345Z",
        "_v":0
    },
    {   "_id": "778f8900aceh4445hg98",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 350,
        "amenities": ["Room Service", "Free Wifi","Free Breakfast"],
        "images": [roomImg4, roomImg3, roomImg2, roomImg1],
        "isAvailable": true,
        "createdAt": "2026-04-10T06:21:10.222Z",
        "updatedAt": "2026-04-10T06:21:10.222Z",
        "_v":0
    },
    {   "_id": "778f8900aceh4445ht09",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 200,
        "amenities": ["Room Service", "Mountain View","Pool Access"],
        "images": [roomImg3, roomImg1, roomImg2, roomImg4],
        "isAvailable": true,
        "createdAt": "2026-04-10T06:23:06.653D",
        "updatedAt": "2026-04-10T06:23:06.653D",
        "_v":0
    },
    {   "_id": "778f8900aceh4445hh75",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 150,
        "amenities": ["Room Service", "Happy Ending","Free Dinner"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2026-04-10T06:24:06.613R",
        "updatedAt": "2026-04-10T06:24:06.613R",
        "_v":0
    },
];

export const testimonials = [
    {id: 1, name: "John Ademola", address: "Nike Lake Road, Enugu", image:"https://images.unsplash.com/photo-1723516138229-e9e9904d67ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlc3RpbW9uaWFsJTIwcGhvdG8lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D", rating: 5, 
    review: "I've used many booking platforms before, but none ccompare to the personalized experience and attention to detail that Buchef provides. their curated selections of hotels is unmatched."},
    
    {id: 2, name: "Emmanuel Eze", address: "Badagry, Lagos", image:"https://plus.unsplash.com/premium_photo-1752952037967-b8a1e1b13483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVzdGltb25pYWwlMjBwaG90byUyMGJsYWNrfGVufDB8fDB8fHww", 
    rating: 4, review: "Buchef exceeded my expectations. The booking process was seamless, and the Hotels were absolutely top notch. Highly recommended!"},

    {id: 3, name: "Winner .A.", address: "Limburg Suite, Port Harcourt", image:"https://plus.unsplash.com/premium_photo-1752952037967-b8a1e1b13483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVzdGltb25pYWwlMjBwaG90byUyMGJsYWNrfGVufDB8fDB8fHww", rating: 2, review: "Amazing service! I always find the best luxury recomendation through Buchef"}
];

export const facilityIcons = {
    "Free Wifi": assets.wifiIcon,
    "Free Breakfast": assets.freeBreakFastIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
     "Room Service": assets.roomServiceIcon,
     "Happy Ending": assets.happyEndingIcon,
     "Free Dinner": assets.freeDinnerIcon,
}

export const roomCommonData = [
    {icon: assets.homeIcon, title: "Clean & Safe Stay", description:
    "A well maintained and hygenic space just for you."},
    {icon: assets.badgeIcon, title: "Enhanced Cleaning", description:
    "This host follows starbnb's strict cleaning standards."}, 
    {icon: assets.locationFilledIcon, title: "Excellent Location", description:
    "90% of guest rated the location 5 stars."},
    {icon: assets.heartIcon, title: "Smooth Check-In", description:
    "100% of guests gave check-in a 5 star rating."},
];

export const userDummyData = {
    "_id": "user_2ungdhrtyijkskkdg",
    "username": "Ifebuche",
    "email": "emzzyeze8905216@gmail.com",
    "image": "",
    "role": "hotelOwner",
    "createdAt": "2026-03-234T09029:16.365G",
    "updatedAt": "2026-03-234T09029:16.365G",
    "_v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

export const userBookingsDummyData = [
    {
        "_id": "24rjrhrj565hfjf75ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2026-04-30T00:00:00.T223",
        "checkOutDate": "2026-04-30T00:00:00.T223",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2026-03-50T00:00:00.T243",
        "updatedAt": "2026-03-50T00:00:00.T213",
        "_v":0
    },
    {
        "_id": "24rjrhrj565reff75ce",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2026-03-70T00:00:00.T273",
        "checkOutDate": "2026-03-70T00:00:00.T273",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2026-03-10T00:00:00.T293",
        "updatedAt": "2026-03-10T00:00:00.T253",
        "_v":0
    },
    {
        "_id": "24rjrhrj565hdffr75ce",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2026-04-60T00:00:00.T225",
        "checkOutDate": "2026-04-60T00:00:00.T225",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": true,
        "createdAt": "2026-03-50T00:00:00.T244",
        "updatedAt": "2026-03-50T00:00:00.T214",
        "_v":0
    }
];

export const dashboardDummyData = [
    {
        "_id": "dash_001",
        "totalBookings": 3,
        "totalRevenue": 897,
        "occupancyRate": 75,
        "recentBookings": [
            {
                "_id": "24rjrhrj565hfjf75ce",
                "user": userDummyData,
                "room": roomsDummyData[1],
                "hotel": hotelDummyData,
                "checkInDate": "2026-04-30T00:00:00.000Z",
                "checkOutDate": "2026-05-02T00:00:00.000Z",
                "totalPrice": 299,
                "guests": 1,
                "status": "pending",
                "paymentMethod": "Stripe",
                "isPaid": true,
            },
            {
                "_id": "24rjrhrj565reff75ce",
                "user": userDummyData,
                "room": roomsDummyData[0],
                "hotel": hotelDummyData,
                "checkInDate": "2026-05-10T00:00:00.000Z",
                "checkOutDate": "2026-05-13T00:00:00.000Z",
                "totalPrice": 399,
                "guests": 2,
                "status": "confirmed",
                "paymentMethod": "Pay At Hotel",
                "isPaid": false,
            },
            {
                "_id": "24rjrhrj565hdffr75ce",
                "user": userDummyData,
                "room": roomsDummyData[3],
                "hotel": hotelDummyData,
                "checkInDate": "2026-05-20T00:00:00.000Z",
                "checkOutDate": "2026-05-22T00:00:00.000Z",
                "totalPrice": 199,
                "guests": 1,
                "status": "cancelled",
                "paymentMethod": "Pay At Hotel",
                "isPaid": true,
            },
        ],
        "roomStats": [
            {
                "roomType": "Double Bed",
                "totalRooms": 3,
                "bookedRooms": 2,
                "availableRooms": 1,
                "revenue": 698,
            },
            {
                "roomType": "Single Bed",
                "totalRooms": 1,
                "bookedRooms": 1,
                "availableRooms": 0,
                "revenue": 199,
            },
        ],
        "monthlyRevenue": [
            { "month": "Jan", "revenue": 0 },
            { "month": "Feb", "revenue": 0 },
            { "month": "Mar", "revenue": 598 },
            { "month": "Apr", "revenue": 897 },
            { "month": "May", "revenue": 0 },
            { "month": "Jun", "revenue": 0 },
            { "month": "Jul", "revenue": 0 },
            { "month": "Aug", "revenue": 0 },
            { "month": "Sep", "revenue": 0 },
            { "month": "Oct", "revenue": 0 },
            { "month": "Nov", "revenue": 0 },
            { "month": "Dec", "revenue": 0 },
        ],
    }
];