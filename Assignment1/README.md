# Drawing on the Web Assignment 1 - HTML and CSS Drawing
## Designer: Joshua Chung

### Task
For this project, we were supposed to create an online drawing using basic HTML and CSS elements. A main part of the requirements were layers of imagery, time-based media, and background-music.

### Inspiration
I struggled for a long time with ideas for this project. I knew at the start that I wanted to create an interactive experience based on an experience you would have navigating the web.
I don't think I'm great at art, or very creative when it comes to coming up with shapes, images, drawings and so on, so my idea was to remix a stereotypical webpage.

In class, we talked about layers and how z-indexes controlled which elements were on top and overlapping other elements. This gave rise to my very first idea.
This was to make a page that spammed you with pop-ups to evoke the feeling one might have when you access a nasty page riddled with advertisements.
The user would have to find a way to get rid of all the pop-ups in order to play the video. This is an experience you might have had if you tried streaming anything illegally, such as sports matches or shows or movies.
This would definitely be a fun way to play with layering imagery. However, I struggled with the time-based media.
I wanted the end result to be a youtube video that you would click on to play or to stop, but was blocked by a whole bunch of pop-ups that spawned more if you clicked in the wrong order or spot.
However, I also wanted to make it an experience that worked no matter the size of your browser window, and the embedded youtube video was a massive problem in that regard.

In the end, I decided on another idea that spawned off of the youtube videos.
People say that the internet was designed for two things: pornography, and **cat videos**.
I decided to remix the youtube page to a site that focused on cat videos.

### Materials
First, the youtube background. I went onto a random youtube page, and, with the powers of inspect element, changed the title and description to cat-related blurbs, as well as fun little edits to metrics such as view count, like-dislike ratio etc.
I then took a screenshot of edited page, and removed all recommended videos and other features that I would not code, such as the search bar, profile page, settings buttons and so on.

Then for the fun part - finding the best, time-tested cat gifs that would be the meat of my site!

### Putting It Together
With the youtube page as my background and my canvas, I placed the various elements: a gif in the place of the usual video, and screen-caps of the various gifs in the place of the list of recommended videos.
Then came some Javascript that I used to switch the gif being played depending on which screen-cap was clicked.
The hardest part was making sure that all the elements stayed in roughly the same position when the browser window was being resized.
It was **painful**, before I finally found the solution on the internet. This involved making sure all the elements had a height value with "vh" in the back, which scaled the elements according to browser size.

I then added colored dots at the side that would apply a colored filter to the screen, inspired by programs like f.lux that apply an orange light filter to your computer.

### Conclusion
Throughout this project, from coming up with ideas down to the minute I submitted the project, I was having an internal debate with myself on what **drawing** was.
*Merriam Webster* gives the definition of a drawing as:
> The art or technique of representing an object or outlining a figure, plan, or sketch by means of lines.

I guess by technical definition, mine isn't a drawing. It's not representing an object, nor is it an outline of anything. It's a remix of a webpage, tailored to a specific vision.
It's the physical manifestation of my remixed imagination of the internet in earlier days.
It's a throwback to a time when youtube had no ads, when the related videos were **actually related to what you were watching** and not other videos the youtube algorithm wants you to watch.
To me, it's my piece of art. I guess that does count as a drawing.
