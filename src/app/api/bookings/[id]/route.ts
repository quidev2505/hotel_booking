import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.bookings.delete({
        where: { id: Number(id) },
      })
      res.status(200).json({ message: 'Booking cancelled successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to cancel booking' })
    }
  } else {
    res.setHeader('Allow', ['DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}