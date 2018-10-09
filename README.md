# react-native_login_listview_fetch
This project contains Simple login form, when It login it redirect to Home Page and Hit's the Api, After that It collects All the data from API and populate it into List View.  

API used for Login and fetching the data from API are as Follows:-

# Login API request.
```
URL : https://jsonplaceholder.typicode.com/posts/1/comments
Method: POST
Accept : application/json
Content-Type: application/x-www-form-urlencoded
Body:
{
email:<EmailId>
}
```
# Fetching Data from API and populate on ListView.
```
URL : http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1
Response:
{
 "book_array": [
  {
   "book_title": "The Silence of the Lambs", 
   "image": "http://i.imgur.com/mEa8Hhs.png", 
   "author": "Thomas Harris"
  }, 
  {
   "book_title": "The Girl with the Dragon Tattoo", 
   "image": "http://i.imgur.com/KMhDOCS.jpg", 
   "author": "Stieg Larsson"
  }, 
  {
   "book_title": "Kiss the Girls", 
   "image": "http://i.imgur.com/1Mi4eCI.jpg", 
   "author": "James Patterson"
  }, 
  {
   "book_title": "In Cold Blood", 
   "image": "http://i.imgur.com/nF8D6lo.jpg", 
   "author": "Truman Capote"
  }, 
  {
   "book_title": "The Da Vinci Code", 
   "image": "http://i.imgur.com/IUopb8k.jpg", 
   "author": "Dan Brown"
  }, 
  {
   "book_title": "The Shining", 
   "image": "http://i.imgur.com/Ofz8Fzz.jpg", 
   "author": "Stephen King"
  }, 
  {
   "book_title": "And Then There Were None", 
   "image": "https://lh3.googleusercontent.com/-SJwTH0r43Fg/VSEh1dBH3iI/AAAAAAAABIw/eCbMBuwno9w/h120/51o0UB-9YwL._SY344_BO1%2C204%2C203%2C200_.jpg", 
   "author": "Agatha Christie"
  }, 
  {
   "book_title": "The Hunt tor Red October", 
   "image": "http://i.imgur.com/94BpAYI.jpg", 
   "author": "Tom Clancy"
  }, 
  {
   "book_title": "The Hound of the Baskervilles", 
   "image": "http://i.imgur.com/be0zLx0.jpg", 
   "author": "Sir Athur Conan Doyle"
  }, 
  {
   "book_title": "Dracula", 
   "image": "http://i.imgur.com/1zczIsH.jpg", 
   "author": "Bram Stoker"
  }, 
  {
   "book_title": "The Stand", 
   "image": "http://i.imgur.com/94WDykQ.jpg", 
   "author": "Stephen King"
  }, 
  {
   "book_title": "The Bone Collector", 
   "image": "http://i.imgur.com/zwCLZKX.jpg", 
   "author": "Jeffery Deaver"
  }, 
  {
   "book_title": "Jurassic Park", 
   "image": "https://lh3.googleusercontent.com/-G-eCeJSghbw/VSEh1Yrz2vI/AAAAAAAABI0/Z6-vbKIhNEU/h120/51tn4xOHDqL.jpg", 
   "author": "Michael Crichton"
  }
 ]
}
```
Note*:- API's used in this Project are for Demo purpose, you can replace it with any of your valid API that satisfy the rules.
