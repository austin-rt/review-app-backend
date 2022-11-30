# Review App

<!-- ![](https://) -->

## Date: 08/19/2022

### By:

#### Alexander Ab [GitHub](https://github.com/Arkeda221) | [LinkedIn](https://www.linkedin.com/in/alexander-ab-831b01182/)

#### Deonte LaBorde [GitHub](https://github.com/deontelaborde) | [LinkedIn](https://www.linkedin.com/in/deonte-laborde/)

#### Russell Ochoa [Website](https://www.eg15m.com/) | [GitHub](https://github.com/russellgochoa) | [LinkedIn](https://www.linkedin.com/in/russell-ochoa-7a2a9516/)

#### Austin Taylor [Website](http://wwww.austinrt.io) | [GitHub](https://github.com/austin-rt) | [LinkedIn](https://www.linkedin.com/in/austinrt/)

---

### **_Links_**

[Frontend Repo](https://github.com/deontelaborde/review-app-frontend)

[Deployed Site](https://rated-our.vercel.app/)

---

### **_Description_**

'Opinions are like...' well, you know the rest. Everybody's got one. And who DOESN'T have an opinion about their favorite (or least favorite) movies?
<BLANK> is a full-stack PERN app that gives movie buffs a voice by creating an account to track and rate the movies they love, hate and everything in between.
So sign up, login and get your Roger Ebert on!
Let's go to the movies!

---

### API V1

Available routes are as follows:

- `/users`
  - `/register` - register new user
  - `login` - login user
  - `/:user_id` - get user by id
  - `/:user_id` - update user (protected)
  - `/:user_id` - delete user (protected)
  - `/session` - check session for token
- `/movies`
  - `/` - get all movies
  - `/:movie_id` - get movie by id
- `/reviews`
  - `/` - get all reviews
  - `/:movie_id/:user_id` - post review (protected)
  - `/:review_id` - update review (protected)
  - `/:review_id` - delete review (protected)

### **_Technologies Used_**

#### Pern Stack

- PostgreSQL + Sequelize
- Express.js
- Node.js
- JavaScript

#### **_Entity Relationship Diagram:_**

![Entity Relationship Diagram](https://i.imgur.com/DTgzf9p.jpg 'Entity Relationship Diagram')

### **_Planning_**

#### [Review App Trello Board](https://trello.com/b/d8YA7n90/project-3-group-project-full-stack-pern)

#### [Pitch Deck](https://docs.google.com/presentation/d/11M8HGzGrm8CSpOnwoeq4S8t1Yv0SOahvGrRx6fpsFOU/edit?usp=sharing)

### **_License_**

MIT License

###### Copyright &copy; 2022 Alexander Ab, Deonte LaBorde, Russell Ochoa, Austin Taylor
