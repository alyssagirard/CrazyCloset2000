// Make carousel not move by itself
$('.carousel').carousel({
    interval: false,
  });




// Lists of Clothes


// Lower buttons functionality
const laundryButton = document.getElementById('laundry-button');
laundryButton.addEventListener('click', function() {
    window.location.href = 'laundry.html';
});

const favsButton = document.getElementById('favorites-button');
favsButton.addEventListener('click', function() {
    window.location.href = 'favorites.html';
});
