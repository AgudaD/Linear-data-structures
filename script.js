
document.addEventListener("DOMContentLoaded", function() {

    // Select the color box and button
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Generate a random hexadecimal color
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215);
        return "#" + randomColor.toString(16).padStart(6, "0");
    }

    // Change the box color when the button is clicked
    changeColorBtn.addEventListener("click", function() {
        const newColor = getRandomColor();

        colorBox.style.backgroundColor = newColor;
    });

});
