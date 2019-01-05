# yt-video-background
YouTube based video backgrounds like a pro

[See the demo](https://rawcdn.githack.com/marcoscgdev/yt-video-background/3dd0e385a9f7d4920907cabf5e4b851a8c4f487c/demo/index.html)

---

## Installation

### Step 1. Include jquery (insert into your page's head tag)
If your page already has jquery included then you can skip this step.

```html
<!-- Include jquery (required by this plugin) -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
```
		
### Step 2. Include the plugin javascript file
It has to be after the jquery plugin.

```html
<!-- Change path/to with your custom js path -->
<script type="text/javascript" src="path/to/yt-video-background.min.js"></script>
```
		
### Step 3. Include the plugin stylesheet file

```html
<!-- Change path/to with your custom css path -->
<link rel="stylesheet" href="path/to/yt-video-background.min.css">
```

## Configuration

### Step 1. Place an empty div where you want the background

```html
<div class="video-background"></div>
```

### Step 2. Configure the background

This plugin needs to be configured in order to use it. Configuration can be done by placing (and editing) the following code after the main javascript plugin insertion (see the step 2).
_$('.video-background')_ is a reference to the previous created div.

```html
<script type="text/javascript">
    $('.video-background').youtubeBackground({
        videoId: 'zofBinqC2F4', // Your desired YouTube video id
        backgroundColor: '#212121', // Overlay background color
        backgroundImage: 'https://i.ytimg.com/vi/ITpIv6Efz8Y/maxresdefault.jpg', // Background image for mobile devices because it does not support youtube video background
        opacity: 0.6 // Video opacity. Set to 1 if you do not want opacity
    });
</script>
```

---
>See the *demo page* to clarify any queries you may have.

---

## License

```
Copyright 2018 Marcos Calvo García

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
