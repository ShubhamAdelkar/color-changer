const colors = [
    "#FF0000", "orangered", "#0000FF", "#FFFF00", "#FFC436",
    "#00FFFF", "#FF8000", "#8000FF", "#0080FF", "#FF0080",
    "#80FF00", "#008000", "#000080", "#800000", "#808000",
    "#800080", "#008080", "#FFA07A", "#FA8072", "#E9967A",
    "#F08080", "#FFD700", "#DAA520", "#FF69B4", "#FFC0CB",
    "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC",
    "#8B008B", "#800080", "#4B0082", "#6A5ACD", "#483D8B",
    "#7B68EE", "#ADFF2F", "#7FFF00", "#32CD32", "#00FF7F",
    "#7CFC00", "#00FF00", "#008000", "#228B22", "#008000",
    "#006400", "#98FB98", "#90EE90", "#00FA9A", "#00FF7F",
    "#3CB371", "#2E8B57", "#808000", "#556B2F", "#6B8E23",
    "#9ACD32", "#C0C000", "#FFFF00", "#808080", "#A9A9A9",
    "#D3D3D3", "#FFA07A", "#FF7F50", "#FF6347", "#FFD700",
    "#FF8C00", "#FF4500", "#FF6347", "#FF4500", "#FF0000",
    "#FF69B4", "#FF1493", "#DB7093", "#C71585", "#FFA07A",
    "#FF7F50", "#FF6347", "#FFD700", "#FF8C00", "#FF4500",
    "#FF6347", "#FF4500", "#FF0000", "#8B4513", "#A52A2A",
    "#CD5C5C", "#DC143C", "#B22222", "#8B0000", "#800000",
    "#BC8F8F", "#F08080", "#CD5C5C", "#DC143C", "#B22222",
    "#8B0000", "#FFFAFA", "#F0FFF0", "#F5FFFA", "#F0FFFF",
    "#F0F8FF", "#F8F8FF", "#FFF8DC", "#FFEBCD", "#FFE4C4",
    "#FFDEAD", "#FAEBD7", "#D2B48C", "#DEB887", "#FFE4B5",
    "#FFE4C4", "#FFEBCD", "#FAEBD7", "#F0E68C", "#DAA520",
    "#B8860B", "#F4A460", "#D2B48C", "#DEB887", "#DAA520",
    "#B8860B", "#FFD700", "#FF8C00", "#FF4500", "#FF6347",
    "#FF4500", "#FF0000", "#FF6347", "#FF4500", "#FF0000",
    "#FF69B4", "#FF1493", "#DB7093", "#C71585", "#FFA07A",
    "#FF7F50", "#FF6347", "#FFD700", "#FF8C00", "#FF4500",
    "#FF6347", "#FF4500", "#FF0000", "#8B4513", "#A52A2A",
    "#CD5C5C", "#DC143C", "#B22222", "#8B0000", "#800000",
    "#BC8F8F", "#F08080", "#CD5C5C", "#DC143C", "#B22222",
    "#8B0000", "#FFFAFA", "#F0FFF0", "#F5FFFA", "#F0FFFF",
    "#F0F8FF", "#F8F8FF", "#FFF8DC", "#FFEBCD", "#FFE4C4",
    "#FFDEAD", "#FAEBD7", "#D2B48C", "#DEB887", "#FFE4B5",
    "#FFE4C4", "#FFEBCD", "#FAEBD7", "#F0E68C", "#DAA520",
    "#B8860B", "#F4A460", "#D2B48C", "#DEB887", "#DAA520",
    "#B8860B", "#FFD700", "#FF8C00", "#FF4500", "#FF0000",
    "#FF6347", "#FF4500", "#FF0000", "#FF69B4", "#FF1493",
    "#DB7093", "#C71585", "#FFA07A", "#FF7F50", "#FF6347",
    "#FFD700", "#FF8C00", "#FF4500", "#FF0000", "#8B4513",
    "#A52A2A", "#CD5C5C", "#DC143C", "#B22222", "#8B0000",
    "#800000", "#BC8F8F", "#F08080", "#CD5C5C", "#DC143C",
    "#B22222", "#8B0000", "#FFFAFA"
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