# README

# Timbre

Timbre is a match-making app that helps musicians find other musicians nearby.  

## How to Install

Fork and clone from GitHub: 

https://github.com/mikahado/timbre-proj

From the root directory, run:  

~~~
npm install --prefix client
bundle install
~~~

Start the client:

~~~
npm start --prefix client
~~~

Start the server:

~~~
rails server 
~~~

## About 

Timbre, pronounced ‘TOM-ber’ or ‘TAM-ber’, means: “the quality of sound that is produced by a particular voice or musical instrument.”

Timbre is designed to promote networking and discovery among musicians, for beginners to professionals, students and teachers. 

Unlike any app of its kind, Timbre uses a model inspired by dating apps to connect creative musicians to other creative musicians. (But it is NOT a dating app)!

## Usage

To use Timbre, create a profile and add your musical preferences and skills. You can then search for other musicians nearby based on your location and musical interests. When you find someone you want to connect with, you can message them through CometChat to arrange a collaboration or jam session.

## Google Maps API 

To match nearby artists, Timbre uses Google Maps JavaScript API with geolocation. 

Follow the most recent install instructions from [Google API.](https://developers.google.com/maps/documentation/javascript/overview)

Install the pack, if not already installed: [npm package](https://www.npmjs.com/package/@react-google-maps/api)

## Chat Feature

Timbre utilizes CometChat for its chat functionality. 

Follow the most recent install instructions from CometChat:
[Cometchat React UI Kit](https://www.cometchat.com/docs/react-chat-ui-kit/overview)

   

## Technical Information

Timbre is built using React for the front-end and Ruby on Rails for the back-end. The Google Maps JavaScript API with geolocation is used to match nearby artists. CometChat is used for chat functionality.

Entity-Relationship Diagram

![Model](./phase-5-ERD.png)