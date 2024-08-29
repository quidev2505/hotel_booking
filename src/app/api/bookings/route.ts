import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user_name } = req.query
    const bookings = await prisma.bookings.findMany({
    })
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


export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { room_id, user_name, check_in_date, check_out_date } = req.body
      const newBooking = await prisma.bookings.create({
        data: {
          room_id: Number(room_id),
          user_name,
          check_in_date: new Date(check_in_date),
          check_out_date: new Date(check_out_date),
          status: 'confirmed'
        }
      })
      res.status(201).json(newBooking)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' })
    }
  }
}