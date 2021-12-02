### CYPRESS-HILL

Proyecto de test E2E con Cypress sobre proyecto frontend React.
#### Proyecto 1: Gestión de hábitos y logros (frontend)

Instalación:  
  npm install

Start:  
  npm start 

Run cypress:  
  npx cypress open  

Archivos de tests:  
cypress / integration
  - accomplishment.spec.js  
  - habits.spec.js  
  - locators.spec.js  

Métodos
  - Get
  - Contains
  - Find
  - Should/And
  - Type
  - Click

Comandos
  - Add/Get
  
#### Proyecto 2: Gestión de logros y recompensas (frontend y backend node.js)

Instalación frontend y backend:  
  npm install

Start frontend:  
  npm start 

start backend:  
  node index.js

Run cypress:  
  npx cypress open  

Archivos de tests:  
client / cypress / integration
  - accomplishment.spec.js  
  - rewards.spec.js  

Métodos
  - Get
  - Intercept
  - Contains
  - Should
  - Type
  - Click

Fixtures
  - rewards.json
    [{id, reward, month}]
