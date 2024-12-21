const { PrismaClient } = require('@prisma/client');
const Database = new PrismaClient();

const main = async () => {
  try {
    await Database.category.createMany({
      data: [
        { name: 'Computer Science' },
        { name: 'Social Science' },
        { name: 'Fitness' },
        { name: 'Information Technology' },
        { name: 'Life and Habits' },
        { name: 'Movie Making' },
        { name: 'Web Development' },
        { name: 'Lifeskill' },
      ],
    });
    console.log('Success');
  } catch (error) {
    console.log('ERROR SEEDING THE DATABASE CATEGORY', error);
  } finally {
    await Database.$disconnect();
  }
};
main();
