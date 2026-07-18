let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function resetCount(){
 count = 0
 document.getElementById('countDisplay').innerHTML= count
 alert("The count has been rese")
}