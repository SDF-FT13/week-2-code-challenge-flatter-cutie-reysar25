// Your code here
function displayRamens() {
    const imagesDiv = document.getElementById("images");
    imagesDiv.innerHTML = ""; 


img.addEventListener("click", () => {
    console.log(`Clicked on: ${ramen.name}`);
    displayRamenDetails(ramen);
});


Document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', function() {
        const gifUrl = this.getAttribute('data-gif');
        const gifDisplay = document.getElementById('gif-display');
        gifDisplay.src = gifUrl;
        gifDisplay.style.display = 'block';
    });
});
