1. Clone the Repository
First, clone the project from GitHub to your local machine:
bash
git clone https://github.com/your-username/user-address-app.git
cd user-address-app

2. Install Dependencies
Install the required dependencies:
bash
npm install

3. Start the Server
Make sure you are in the project directory and run:
bash
node index.js

4. Access the Frontend
Open your web browser and visit:
text
http://localhost:3000

Submit the Form
Fill out the form with your name and address, then click Submit. The data will be sent to the backend and saved in the SQLite database.
Test the API
You can also test the API directly by sending a POST request to http://localhost:3000/register with a JSON body:
json
{
    "name": "Raj",
    "street": "123 Main",
    "city": "Bangalore",
    "state": "KA",
    "postalCode": "62701"
}
