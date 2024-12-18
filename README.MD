## Install 
`npm install` or `npm i`

## Run
`npx ts-node src/server.ts`

## Photos
### Get limited number of photos 

*count number is mandatory

*GET* request: `http://localhost:3000/api/photos/[count]`
- Example: `http://localhost:3000/api/photos/7`

### [Optional] Get Photos By Category
- Example: `http://localhost:3000/api/photos/10/puppies`

## Get User Details

*GET* request: `http://localhost:3000/api/users/[username]`
- Example:`http://localhost:3000/api/users/ronal`

## Create An Order

*POST* request: `http://localhost:3000/api/orders`<br>
- With body (this is just an example):
  >`{
	"email": "rona@titan.com",
  "fullName": "Rona Lankry",
  "fullAddress": "unknown yet",
  "imageUrls": ["https://pixabay.com/get/gde558fa8959327fb75233984c493d479cbfcda7273b190e56371a4415ce9d61ae545d742eee48fc00561bef7a629e93fe3e46fafd7928123737bfde44ad73a0f_1280.jpg", "https://pixabay.com/get/g57c7a2015d3c4faca2cf780887a9b345a21ed221ba934a8badf7b6ded53eea046a4a831d1b327c2357f211d6a101414ddb99ed5e78c54c0608f5826c0fbddda1_1280.jpg"],
  "frameColor": "blue",
  "userName": "ronal"
}`

## Database
- You can watch the DB following this link from [neondb-postgres](https://console.neon.tech/app/projects/royal-king-86899612/branches/br-yellow-star-a5yzpdqt/tables?database=neondb)