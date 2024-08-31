import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
  try {
    const bookings = await prisma.bookings.findMany();
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch rooms' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}


export async function POST(req: Request) {
  try {
    const { room_id, user_name, check_in_date, check_out_date } = await req.json();

    const newBooking = await prisma.bookings.create({
      data: {
        room_id: Number(room_id),
        user_name,
        check_in_date: new Date(check_in_date),
        check_out_date: new Date(check_out_date),
        status: 'success'
      }
    });

    return NextResponse.json(newBooking, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to post bookings' }, { status: 500 });
  }
}