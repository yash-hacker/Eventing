# Eventing 
A simple implementation of the Event module in Node.js. Can bw used to register, trigger and remove events. The events are time logged locally in the `app.log` file and on the cloud on a MongoDB Altlas Collection.


Step 1: Clone the repo and install the dependencies.

```bash
git clone https://github.com/yash-hacker/Eventing.git
cd Eventing
```

```bash
npm install
```


Step 2: Create a .env file which looks like: 


```bash
MONGODB_URI= <YOUR MONGODB CONNECTION STRING>
```



Step 3: To start the node server run: 


```bash
npm run start
```

Create your own custom events experiment, just update the server.js file and save, `nodemon` will take care of the rest ;). 
