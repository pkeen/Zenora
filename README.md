# Zenora

## About

The basic idea of Zenora is that it's an online space where people can make and take courses. Users can create their own courses on different topics and sell them if they want. Others can sign up for these courses to learn new skills or gain knowledge. To make it more engaging, we're adding a point system. If you make a course or help someone by answering their questions, you get Karma points. If you complete a course, you get Zen points. These points can be used to get discounts on other courses. So, it's a two-way street: you learn something new and you also help others learn.

## Tech Stack Used
* PERN Stack
* PostgreSQL
* Sequelize
* Express
* React
* Stripe (payments)

## Entity Relation Diagram
![Zenora ERD](/public/images/erd-diagram.png "Zenora ERD")

## Wireframes

### Course View Open
#### Desktop
![Course View](/public/images/course-view.png "Course view")
#### Mobile
![Course view mobile](/public/images/mobile-course-view.png "mobile course view")

### Course Detail 
![Course Detail](/public/images/course-detail.png "course details")


## MVP Goals
* Users can create a course with multiple lessons and publish it to the site for others to view
* Users can view other courses
* Users can 

## Potential Roadblocks
* Working out how courses and products interact (join table? can courses be products, other things be products)
* How Course > Module > Lessons models work, I would like lessons to be able to belong to many courses, but also they can be part of a course in top level or part of a module within a course

## Stretch Goals
* Points system for creating and completing courses
* Stripe payment integration
* Drag and drop re-order interface for course creation
* !! (Super Stretch) course creation tools - audio recording and slide editing..
