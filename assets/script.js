document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', function() {
            videos.forEach(v => v.play());
        });

        video.addEventListener('pause', function() {
            videos.forEach(v => v.pause());
        });

        video.addEventListener('seeked', function() {
            const currentTime = this.currentTime;
            videos.forEach(v => {
                v.currentTime = currentTime;
            });
        });
    });
});