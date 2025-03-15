# CORS Configuration Guide

This guide provides instructions on how to configure CORS (Cross-Origin Resource Sharing) for your backend server.

## For Express.js

1. **Install CORS Middleware**:
   Run the following command to install the CORS package:
   ```bash
   npm install cors
   ```

2. **Update Your Server Code**:
   In your main server file (e.g., `server.js` or `app.js`), add the following code:
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   // Use CORS middleware
   app.use(cors());

   // Your routes here
   app.post('/', (req, res) => {
       res.json({ message: 'Hello from Express!' });
   });

   const PORT = process.env.PORT || 8000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

## For Flask

1. **Install Flask-CORS**:
   Run the following command to install the Flask-CORS package:
   ```bash
   pip install flask-cors
   ```

2. **Update Your Application Code**:
   In your main application file (e.g., `app.py`), add the following code:
   ```python
   from flask import Flask
   from flask_cors import CORS

   app = Flask(__name__)
   CORS(app)  # Enable CORS for all routes

   @app.route('/', methods=['POST'])
   def hello():
       return {'message': 'Hello from Flask!'}

   if __name__ == '__main__':
       app.run(port=8000)
   ```

## Testing

After making these changes, restart your backend server and test the frontend application again. The CORS error should be resolved, allowing your frontend to communicate with the backend.

If you have any specific backend code or files, please share them for more tailored assistance.
