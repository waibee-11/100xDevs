import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const response = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  });
  console.log(response);
};

interface updateParams {
    firstname: string,
    lastname: string,
};

async function updateUser(username: string, params: updateParams){
    const response = await prisma.user.update({
        where: {username},
        data: {
            firstName: params.firstname,
            lastName: params.lastname,
        }
    });
    console.log(response);
}

async function deleteUser(username: string){
    const response = await prisma.user.delete({
        where: {username}
    });
    console.log(response);
};

// insertUser("vhbarve", "mypassword2", "Ved", "Barve");
// insertUser("nasa", "assume", "Nats", "Sawant");
updateUser("nasa", {firstname: "Nathan", lastname: "Sawant"});
deleteUser("nasa");