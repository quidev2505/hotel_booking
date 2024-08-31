import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const room = await prisma.rooms.findUnique({
      where: { id: Number(id) },
    });

    if (room) {
      return new Response(JSON.stringify(room), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Room not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch room details' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}