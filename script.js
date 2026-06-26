document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlife-video');
    const toggleButton = document.getElementById('toggle-btn');

    // Update button text to reflect current state accurately on startup
    toggleButton.textContent = "Play Video";

    toggleButton.addEventListener('click', () => {
        // Condition: If video is hidden OR currently paused, show it and play it
        if (video.style.display === 'none' || video.paused) {
            
            // Ensure video is visible if it was previously hidden
            if (video.style.display === 'none') {
                video.style.display = 'block';
            }
            
            // Play the media file
            video.play();
            toggleButton.textContent = "Hide Video";
            
        } else {
            // Condition: Video is currently playing, so hide it out of view
            video.pause();
            video.style.display = 'none';
            toggleButton.textContent = "Show & Play Video";
        }
    });
});
