# yt-ad-skip
Browser extension to skip YouTube Ads automatically.

## How does it work?
The script finds the video element of YouTube ads and sets the current time to the duration of the ad so that we immediately move to the end of the ad essentially skipping the ads.
Note: Disable Ad Blocker on YouTube for this to work

## Local Setup

- Clone git repo
```
git clone https://github.com/G0uth4m/yt-ad-skip
```

- In Firefox, go to `about:debugging#/runtime/this-firefox` page -> click `Load Temporary Add-on...` button -> select `manifest.json` file in the extension's directory.
- In Google Chrome, go to `chrome://extensions/` page -> check `Developer mode` -> Click `Load unpacked` and select the extension folder `yt-ad-skip`
