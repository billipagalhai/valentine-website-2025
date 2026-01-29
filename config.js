// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Adarsh",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you think i am funny?",                                    // First interaction
            yesBtn: "yes very funny",                                             // Text for "Yes" button
            noBtn: "nahi tu pagal hai",                                               // Text for "No" button
            secretAnswer: "definitely, aap to comedian ho"  // Hidden message

           
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine babu 🌹", // The big question!
            yesBtn: "ha ofc ye bhi koi puchne ki baat hai kya",                                             // Text for "Yes" button
            noBtn: "YES"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "ab aap do gift wrna katti",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FFCDC9",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FDACAC",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#FD7979",     // Button color (should stand out against the background)
        buttonHover: "#FEEAC9",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#F875AA"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "1s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 15         // Size of heart explosion effect (1.2-2.0 recommended)
    },

   
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
