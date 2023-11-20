const colors = [
    "Red", "Lime", "Blue", "Yellow", "Fuchsia",
    "Aqua", "DarkOrange", "DarkOrchid", "Navy", "Magenta",
    "LimeGreen", "Green", "Navy", "Maroon", "Olive",
    "Purple", "Teal", "Silver", "White", "orangered",
    "LightSalmon", "Salmon", "DarkSalmon", "LightCoral", "Gold",
    "GoldenRod", "HotPink", "Pink", "MediumOrchid", "MediumPurple",
    "BlueViolet", "DarkMagenta", "MediumSlateBlue", "DarkViolet", "Purple",
    "Indigo", "SlateBlue", "DarkSlateBlue", "MediumPurple", "Chartreuse",
    "LawnGreen", "LimeGreen", "SpringGreen", "LawnGreen", "Green",
    "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab",
    "DarkOliveGreen", "DarkSeaGreen", "SeaGreen", "MediumSeaGreen", "DarkCyan",
    "Aqua", "LightGray", "DarkGray", "Silver", "White",
    "Gold", "Orange", "DarkOrange", "Coral", "Tomato",
    "Red", "FireBrick", "IndianRed", "DarkRed", "Chocolate",
    "SaddleBrown", "Sienna", "RosyBrown", "Peru", "BurlyWood",
    "Tan", "Yellow", "DarkKhaki", "GoldenRod", "DarkGoldenRod",
    "DarkOliveGreen", "Olive", "Yellow", "LightYellow", "PaleGoldenRod",
    "Khaki", "Beige", "LemonChiffon", "BlanchedAlmond", "NavajoWhite",
    "PeachPuff", "Moccasin", "PapayaWhip", "Cornsilk", "WhiteSmoke",
    "Gainsboro", "LightGray", "Silver", "White", "MistyRose",
    "PeachPuff", "LightGoldenRodYellow", "LavenderBlush", "Linen", "OldLace",
    "Bisque", "MediumSeaGreen", "Wheat", "BlanchedAlmond", "BurlyWood",
    "Tan", "Yellow", "DarkKhaki", "GoldenRod", "DarkGoldenRod",
    "DarkOliveGreen", "Olive", "Yellow", "LightYellow", "PaleGoldenRod",
    "Khaki", "Beige", "LemonChiffon", "BlanchedAlmond", "NavajoWhite",
    "PeachPuff", "Moccasin", "PapayaWhip", "Cornsilk", "WhiteSmoke",
    "Gainsboro", "LightGray", "Silver", "White", "MistyRose",
    // ... and so on, you can continue the list as needed
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// Add copy functionality
const copyButton = document.getElementById("copyButton");

copyButton.addEventListener('click', function () {

    const textarea = document.createElement('textarea');
    textarea.value = color.textContent;

    document.body.appendChild(textarea);

    // Select the content of the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(textarea);

    copyButton.textContent = 'Copied';
    setTimeout(function () {
        copyButton.textContent = 'Copy';
    }, 2000);
});