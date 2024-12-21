import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
} // just that the server dont create a prisma client on every hot reload hence setting the prisma client to global this

export const db = globalThis.prisma || new PrismaClient(); // this db varibale will help in querying data from the database and manupulate it , this is the bridge between the server and the online hosted database.

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// this file is made to initialise prisma and setting up the prisma client for the database interactions.
