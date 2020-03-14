Hey, Thanks for taking the time to look at this.

I spent just over 3 and a half hours on this. There is still more tidying up I could do, especially on the css organisation and an improved design.
Hopefully this communicates the important bits.

What would I have done if I spent a little more time on it?
*Have tabs to switch between most popular and latest stories on the mobile view.
*Could scrape an image from the sites that are linked to and use alongside the story headlines.
*Loading: PromiseAll waits for the whole batch to load, this could be optimised if
every time an individual promise was fulfilled it added it to state whilst maintaining the story
order.
*Could periodically poll the latest stories to update in real time, either by polling or by using firebase
change notifications by the looks of it from the HackerNews API.
*Make the loading spinner animated
*Get new stories on scroll down to bottom of page instead of the more button.
*add some on hover effects
*Change visited links visually in some way


-----



`npm ci`

`npm run dev`

