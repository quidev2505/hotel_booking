import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const booking = await prisma.bookings.delete({
      where: { id: Number(id) },
    })

    if (booking) {
      return new Response(JSON.stringify(booking), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'booking not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Failed to delete booking' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}



// export default async function DELETE(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query

//   console.log('id is', id)

//   if (req.method === 'DELETE') {
//     try {
//       await prisma.bookings.delete({
//         where: { id: Number(id) },
//       })
//       res.status(200).json({ message: 'Booking cancelled successfully' })
//     } catch (error) {
//       console.error('Error cancelling booking:', error)
//       res.status(500).json({ error: 'Failed to cancel booking' })
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }