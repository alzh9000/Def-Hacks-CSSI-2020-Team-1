# Tender: Find your match!
Tinder for food - the fastest, most convenient way to find the perfect recipe _match_ for you! 
Check us out at 10der.tech! 

![Tender](https://github.com/alzh9000/Def-Hacks-CSSI-2020-Team-1/blob/master/assets/tender-details.png


## Inspiration
Many people love to cook, but when they go online to search for a dish or recipe, the vast options that appear can be overwhelming. In addition, what if you don’t have the equipment for a specific recipe, or you need to find a gluten-free or vegetarian recipe? A simple internet search presents people with the paradox of choice _and_ lacks the customization necessary for people with specific preferences. To better enable people to be able to find the right recipes for them, we created Tender. 

## What it does
You can set up your Tender profile with awesome customizations that you can’t get using a usual Google search, including for home appliances you have in your kitchen, dietary/allergy restrictions, cuisine, time, calories, etc. Tender also uses Google’s Cloud Vision AI to allow you to upload a picture of your pantry or manually input the ingredients you want to include. After you input your preferences, Tender works its magic to match you up with recipes one at a time just like Tinder, solving the paradox of choice. Swipe left if you aren’t a fan, and swipe right if it’s a perfect match for you!

## How we built it
Beginning with our vision for a tool to create a better, more simple, and more customizable recipe app, we designed a wireframe mockup of Tender’s flow and its look and feel. On the front end, we used HTML & CSS to style the site and extensive Javascript to implement the functionality of generating and presenting the recipes for the user to choose. We also incorporated the Google Vision AI API to recognize users’ available ingredients from an image and the Spoonacular recipe API to obtain the relevant recipes perfectly suited for a users’ preferences. Additionally, we used the Bootstrap framework to enhance our styling and improve the user experience on our app. 
 
## Challenges we ran into
Challenge 1 - One of the major challenges we faced was implementing the Google Vision and Spoonacular API requests using only the frontend native Javascript fetch() api, which required some creativity to set up and format our requests. Luckily, with the help of Postman and fancy Javascript promise/await/async syntax, we got it up and running! 

Challenge 2 - We spent a chunk of time trying to figure out the swiping motions for our tinder-like picker file. It initially seemed like an extremely daunting and messy task, but with the help of pre-existing libraries and articles, as well as through working intense collaborations with our teammates, we were able to create a clean and modern interface.

Challenge 3 - Because of our diverse set of skills, it was initially difficult for us to divvy up the tasks we needed to accomplish in order to build Tender. However, by working together and playing to each others’ strengths, we were able to work on the areas that we were the most well suited for, and thus succeed as a team. 

Challenge 4 - As a group of high school seniors relatively new to coding and hackathons, we worked hard to get past merging issues on Github, navigating real-time partner coding software, and varying time zones. Still, even though we have never met, we managed to create something beautiful together. 

## Accomplishments that we’re proud of
We are exceptionally proud of how our project can better help people cook food that they love. Our awesome web designer created a fantastic web mockup that we translated into real-life. Then we took it even farther and added beautiful micro-interactions. Subtle CSS transitions were added to most elements, and we altered much of the Bootstrap used to better fit the look and feel of our app. If there was a user interface award in this hackathon, we are confident that we’d be strong contenders. 
 
## What we learned
To incorporate the Google Vision and Spoonacular APIs, we learned about Javascript HTTP requests and asynchronous code execution. We learned about modern front-end technologies like Bootstrap that allowed us to enhance the design of the website. We also learned more about using HTML, JS, and CSS to create dynamic features like swiping and rendering of elements. 

More importantly, we learned how to cook! And we learned that there are so many delicious and wonderful recipes out there, in every cuisine, that we can’t wait to try out. :D 
 
## What's next for Tender?
What if a user doesn't know what his/her “type” is? That's okay! In the next update, we plan on creating a program where the user is exposed to a wide variety of flavors. We also hope to incorporate text-to-speech technology for inputting text to make the user experience more convenient.
