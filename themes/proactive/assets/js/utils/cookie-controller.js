// Constant
var PAGEVIEW_COOKIE_NAME = "pageviews"
var TIME_BETWEEN_UPDATE = 15; // time in seconds

// Initialize variables
var time = 0;

// Get page information
var page = {
    url: window.location.href,
    date: new Date(),
    time: time
};

// Get relevant cookie
var pageviews= Cookies.getJSON(PAGEVIEW_COOKIE_NAME);
// console.log(pageviews);

// Initialize cookie if need be
if (!pageviews) {
    pageviews = [];
}

// Update cookie
pageIndex = pageviews.push(page) - 1;
Cookies.set(PAGEVIEW_COOKIE_NAME, pageviews);
// console.log(Cookies.getJSON(PAGEVIEW_COOKIE_NAME));

// Update cookie at a set time interval
function updateTime() {
    time = time + TIME_BETWEEN_UPDATE/60;
    pageviews[pageIndex].time = time;
    // console.log(pageviews, pageviews[pageIndex]);
    Cookies.set(PAGEVIEW_COOKIE_NAME, pageviews);
}
setInterval(updateTime, TIME_BETWEEN_UPDATE*1000)

/**
 * Functions used in other scripts
 */
 
function getPageViewCookies() {
    return Cookies.getJSON(PAGEVIEW_COOKIE_NAME);
}

function removePageViewCookies() {
    return Cookies.remove(PAGEVIEW_COOKIE_NAME);
}

function getGACookies() {
    return {
        ga: Cookies.get("_ga"),
        gid: Cookies.get("_gid")
    }
}

function getUserCookies() {
    return {
        ga: getGACookies(),
        pageviews: getPageViewCookies()
    }
}
