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


export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const bookingDetail = await prisma.detailBooking.findFirstOrThrow({
      where: { bookingsId: Number(id) },
    });

    if (bookingDetail) {
      return new Response(JSON.stringify(bookingDetail), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Booking detail not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Failed to fetch booking details' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
