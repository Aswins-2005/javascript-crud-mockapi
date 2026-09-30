// const url = "https://6abbb41db2118ed7abb9386c.mockapi.io"

// 1 . GET /Users → Fetch all users

// async function user(){
//     const res = await fetch(`${url}/users`)
//     const data = await res.json()
//     console.log(data);
    
// }
// user()

// 2. GET /Users/:id → Fetch user by ID


// async function getuser(id) {
//     const res = await fetch(`${url}/users/${id}`)
//     const data = await res.json()
//     console.log(data)
// }

// getuser(2)

// 3. POST /Users → Create a new user

// async function createnewuser(user) {
//     const res = await fetch(`${url}/users` ,{
//         method : "POST",
//         headers:{
//         "Content-Type" : "application/json"
//         },
//         body: JSON.stringify(user)
//         });
        
//         const data = await res.json()
//         console.log(data);
        
    
// }

// const newuser ={
//     name : "aswin",
//     email : "as@gmail.com"
// }

// createnewuser(newuser);

// 4. PUT /Users/:id → Update user data


// async function updateduser(id,user){
//     const res = await fetch(`${url}/users/${id}`,{
//         method : "PUT",
//         headers:{
//             "Content-Type" : "application/json"

//         },
//         body : JSON.stringify(user)
//     });
//     const data = await res.json()
//     console.log(data);
    
// }

// const uduser = {
//     name : "aswin s",
//     email : "ase@gmail.com"
// }

// updateduser(2,uduser)

// 5. DELETE /Users/:id → Delete a user


// async function deleteuser(id){
//     const res = await fetch(`${url}/users/${id}`,{
//         method : "DELETE"
//     })
//     const data = await res.json()
//     console.log(data);
    

// }
// deleteuser(2)