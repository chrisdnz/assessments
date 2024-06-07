import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET request handler
export async function GET(request, { params }) {
  try {
    const tests = await prisma.test.findMany();
    return new Response(JSON.stringify(tests), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// POST request handler
export async function POST(request) {
  try {
    const data = await request.json();
    const createdTest = await prisma.test.create({
      data,
    });
    return new Response(JSON.stringify(createdTest), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
