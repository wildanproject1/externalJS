/*==================== Tracknih ====================*/
// tracking.js

// Function to save data to localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to load data from localStorage
function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to store visitor data
function storeVisitorData() {
    const visitorData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
    };
    saveToLocalStorage('visitorData', visitorData);
}

// Function to record visitor behavior
function recordVisitorBehavior(event) {
    const behaviorData = loadFromLocalStorage('behaviorData') || [];
    behaviorData.push({
        eventType: event.type,
        timestamp: new Date().toISOString(),
        target: event.target.tagName,
        additionalData: event.target.outerHTML,
    });
    saveToLocalStorage('behaviorData', behaviorData);
}

// Function to save website data to browser and device
function saveWebsiteData(data) {
    saveToLocalStorage('websiteData', data);
}

// Initialize visitor tracking
function initVisitorTracking() {
    // Store initial visitor data
    storeVisitorData();

    // Record various user interactions
    document.addEventListener('click', recordVisitorBehavior);
    document.addEventListener('input', recordVisitorBehavior);
    document.addEventListener('change', recordVisitorBehavior);

    // Save some example website data (you can customize this)
    const exampleWebsiteData = {
        pageContent: document.body.innerHTML,
        pageTitle: document.title,
    };
    saveWebsiteData(exampleWebsiteData);
}

// Initialize tracking when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initVisitorTracking);
/*==================== Tracknih ====================*/