const dotenv = require("dotenv");       
dotenv.config();                        

const {PrismaClient} = require("@prisma/client");        
const prisma = new PrismaClient();                       

const createUser = async(name, email) => {
    const user = await prisma.user.create({               
        data: {name, email},
    });                                                
    console.log("Created record:", user);                 // Log the created user to the console
}


const getUsers = async() =>
{
    const users = await prisma.users.findMany();          // Use the Prisma client to retrieve all user records from the database
    console.log("All users:", users);                     // Log the retrieved users to the console
}

const updateUsers = async(id, name) =>                    // Define an asynchronous function to update a user's name in the database based on their ID
{
    const user = await prisma.users.update({              // Use the Prisma client to update a user record in the database
        where: {id},
        data: {name},
    });
    console.log("Updated record:", user);                 // Log the updated user to the console
}

const deleteUser = async(id) =>
{
    const user = await prisma.users.delete({
        where: {id},
    });
    console.log("Deleted record:", user);                 // Log the deleted user to the console
}

async function main()
{
    await createUser("Adarsh", "adarshk1412@gmail.com");     // Call the createUser function to create a new user in the database
    // await getUsers();                                          // Call the getUsers function to retrieve and log all users from the database
    // await updateUsers();                                       // Call the updateUsers function to update a user's name in the database based on their ID
    // await deleteUser();                                        // Call the deleteUser function to delete a user from the database based on their ID
}

main()
.catch(console.error)
.finally(() =>
{
    prisma.$disconnect()
});



