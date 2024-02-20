# Welcome to GetToWork!
_**A glorified to-do application**_

Your destination for interactive task management with analysis capabilities.

<br>

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Tech Stack](#tech-stack)
4. [Invitation to Contribute](#invitation-to-contribute)
5. [Future Work](#future-work)

<br>

# [Installation](#installation)

Clone the repository onto your system:
```
git clone todo-app
```
<br>

### Backend

Navigate to the `backend` directory from the root directory where you have to `todo-app` installed:
```bash
cd todo-app/backend
```

Install the required dependencies:
```
npm install
```

Create a `.env` file in the `backend` directory and add your MongoDB connection URI:
```
MONGOURI=<your-mongoDB-connection-URI>
```
<br>

### Frontend

Navigate to the `frontend` directory from the root directory where you have to `todo-app` installed:
```bash
cd todo-app/frontend
```

Install the required dependencies:
```
npm install
```


# [Usage](#usage)

Use two separate terminals to start the backend and the frontend servers - 

<br>

### Frontend

Navigate to the `frontend` directory from the root directory where you have to `todo-app` installed, and start the development server using the following command:
```bash
cd todo-app/frontend
npm run dev
```

### Backend

Navigate to the `backend` directory from the root directory where you have to `todo-app` installed, and start the server using the following command:
```bash
cd todo-app/backend
npx nodemon index.js
```
<br>

# [Tech Stack](#tech-stack)
This project uses a very beginner friendly blend of technologies - 
1. Node.js
2. React.js (Javascript)
3. MongoDB
4. Express.js
5. Tailwind CSS

<br>

# [Invitation to Contribute](#invitation-to-contribute)
This repository is open-sourced to allow developers to practice their skills and get a know-how of how open-source contributions work.
> I hereby invite developers to pick up a future work prospect from the section below and controbute to the project.
> This would not only hone your open-source contributions and skills, but also allow this app to grow

<br>

# [Future Work](#future-work)

## Bugs
- >**Empty To-do's**  <br>  
   Currently, the user is allowed to create an empty to-do. There should be a validation function (already in the code) that should be triggered whenever an empty to-do is being made. (Empty descriptions are acceptable).
   <br>
  

## Features
- >**Hashing of passwords** <br>  
   Currently, the passwords are stored as is, within the database. It's imperative to store the passwords in a hashed format to ensure data privacy.
   This would require a hash function while a user is signing up, and signing a token only if the hashed value of entered password is the same as that in the database, while the user is trying to sign in.
   <br>

- >**Editting To-do's**  <br>  
   On double-clicking a to-do's title or description, the user should be able to edit it.
   <br>
  
- >**Visualization Info Icon OnHover**  <br>  
   For all the visualizations, it would be beneficial if the user can see what the visualization is trying to track. So, a modal being displayed on hovering over the Info icon on each visualization, which would consist of information about that particular visualization would be helpful.
   <br>
  
