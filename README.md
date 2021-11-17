
# Reddit Client

![Reddit Client](https://wordpress.saraace.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-16-at-6.15.50-PM.png)

##  🚀 Project Overview

The purpose of this assessment was to create an app to display the top Reddit posts within a specific subreddit thread using data delivered via an API. Displayed on the left is a sidebar containing an input used to control the subreddit; by default, the app defaults to /r/Damnthatsinteresting. Under the sidebar is a list of the top posts within the specified subreddit. Each post has a read status that is marked to read on click. Additionally, the user can dismiss individual posts by clicking on the dismiss button located in the bottom corner of each post. All posts can be dismissed by clicking "Dismiss All" under the text input.

Posts are loaded ten items at a time; when the user reaches the bottom of the sidebar another batch of items is fetched and appended to the list. Once there are no more items to fetch, a message at the bottom indicates that the user has loaded all available posts.

Additionally, when the user clicks on a post, the details of that post appear on the right-hand side with greater detail, such as a full-size image and post body. 

## 🛠 Installation

Please run the following on your local environment: 

    $ yarn install
    $ yarn dev

## 💻 Technologies Used

 - Typescript
 - React
 - Redux
 - Jest
 - Styled Components
 - Framer Motion

## 👩🏻‍💻 Note from the Author

Hi! I’m Sara Acevedo. I’m a software engineer, and I love working on visually appealing Front End Projects. I found this tech challenge enjoyable because it allowed me to be creative while showing off my skills. I decided to use Typescript on this project because of the complexity of the data returned from the API. As a lover of clean code, I knew this would be the perfect opportunity to utilize Typescript to keep my components clear and concise. Additionally, I set up a Redux store to manage the subreddit state. Redux allowed me to avoid passing massive objects from component to component when rendering the post items and dispatching actions to load more posts.

Please let me know of any feedback. I look forward to the next steps! *&mdash; Sara*
