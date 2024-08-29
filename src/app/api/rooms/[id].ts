import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const room = await prisma.rooms.findUnique({
        where: { id: Number(id) }
      })
      if (room) {
        res.status(200).json(room)
      } else {
        res.status(404).json({ error: 'Room not found' })
      }
    } catch (e) {
      res.status(500).json({ error: 'Failed to fetch room details' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}