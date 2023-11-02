1) installation :

https://nodejs.org/en/download
npm install -g npm@latest

npx create-react-app rfid

2) the api it uses is from this repo : https://github.com/vivekmaru36/Crud_operations_with_web_api

3) to port html to react syntax use this : https://transform.tools/html-to-jsx

4) data acces using fetched reponses is done throuhg array indexes :

like this 

fetchedData.data =
[[{"id":"653faa077d5ecd5842c5351a","createdDate":"30-10-2023 06:35:11 PM","updatedDate":"","firstName":"Vivek","lastName":"Maru","age":19,"contact":"93265999644","salary":10000},{"id":"65421e16833e490b7678ee61","createdDate":"01-11-2023 03:14:54 PM","updatedDate":"","firstName":"dhiren","lastName":"maru","age":22,"contact":"930390390","salary":30000},{"id":"65421ffd0a711ebd83d33de6","createdDate":"01-11-2023 03:22:59 PM","updatedDate":"","firstName":"Suraj","lastName":"Kahar","age":20,"contact":"123456789","salary":20000},{"id":"65424587965eea320bae92d6","createdDate":"01-11-2023 06:03:11 PM","updatedDate":"","firstName":"akshat","lastName":"Parmar","age":23,"contact":"123456789","salary":40000}]]

so to just access the first name of the fetchedData.data use this :
--> fetchedData.data[0].firstName = 'Vivek'
format :
--> fetchedData.data[number_for_element].name_of_the_item = 'item'
