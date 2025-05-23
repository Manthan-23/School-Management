**I have used Node.js and Express.js to implement the School Management API.**

I have deployed the MySQL database on Aiven.

And to make POST and GET requests to see the actual working of the API, I have deployed it as a Web Service on Render.

Example of (POST) request - 

URL - https://school-management-lawq.onrender.com/addSchool

Body - 
{

  "name": "Delhi School",
  
  "address": "New Delhi",
  
  "latitude": 28.6139,
  
  "longitude": 77.2090
  
}

Example of (GET) request - 

URL - https://school-management-lawq.onrender.com/listSchools?lat=19.076&lng=72.877

*(You can change the (lat and long) parameters in the above URL to get the schools as per the proximity and sorting functionality)*
