var container = document.querySelector('.container');
var contentContainer = document.getElementById('content_container');

container.addEventListener('scroll', function() {
    // Adjust the scroll speed for the content container
    var contentScrollSpeed = 0.5; // You can adjust this value as needed
    
    // Get the scroll position
    var scrollPos = container.scrollTop;
    
    // Apply the scroll speed to the content container
    contentContainer.style.transform = 'translateY(' + scrollPos * contentScrollSpeed + 'px)';
});
