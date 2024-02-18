const moviePlayerObserver = new MutationObserver(function (mutations, observer) {
    for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('ad-showing')) {
                var adVideo = document.getElementsByClassName('video-stream html5-main-video')[0];
                adVideo.currentTime = adVideo.duration;
                adSkipButton = document.getElementsByClassName('ytp-ad-skip-button-modern ytp-button')[0]
                if (adSkipButton !== undefined) {
                    adSkipButton.click();
                }
            }
        }
    }
});

const bodyObserver = new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.id === 'movie_player') {
                    const config = { attributes: true, attributeFilter: ['class'], subtree: true };
                    moviePlayerObserver.observe(node, config);
                }
            });
        }
    }
});

const config = { childList: true, subtree: true };
bodyObserver.observe(document.body, config);
