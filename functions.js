// copy any text to the clipboard
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// Scroll to Page Top
const goToTop = () => window.scrollTo(0, 0);

// Find the number of gap days between two dates
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366

// Generate Random Hex
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Check if the provided day is a weekday
const isWeekday = (date) => date.getDay() % 6 !== 0;

console.log(isWeekday(new Date(2021, 0, 11)));
// Result: true (Monday)
console.log(isWeekday(new Date(2021, 0, 10)));
// Result: false (Sunday)

// Check if the provided day is a weekend
const isWeekend = (date) => date.getDay() % 6 === 0;

// Check if the user is on an Apple device
const isAppleDevice = () => /iPhone|iPad|iPod/.test(navigator.userAgent);

console.log(isAppleDevice);

// Strip HTML From Text
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

stripHtml('<h1>Hello <strong>World</strong>!!!</h1>');
// Result: Hello World!!!

// Toggle (show/hide) of an Element
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");

// Shuffle an Array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const shuffleArray1 = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]

// Detect Dark Mode
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode) // Result: True or False

// Get Query Params from URL
const getQueryParams = (url) => {
    const queryString = url.split('?')[1];
    const params = {};
    queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
}
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');

getParameters("https://www.google.de/search?q=cars&start=40");
// Result: { q: 'cars', start: '40' }

// Remove Duplicates in an Array
const removeDuplicates = (arr) => [...new Set(arr)];

// Check if Date is Valid
const isDateValid1 = (date) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
}
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");
// Result: true

// Check If the User has Scrolled to the Bottom of the Page
const scrolledToBottom = () => window.scrollY + window.innerHeight >= document.body.offsetHeight;

// escape key
const escapeKey = (e) => {
  if (e.keyCode === 27) {
    console.log('Escape key pressed');
  }
}