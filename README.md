# Ứng dụng Đặt Phòng Khách Sạn

Đây là một ứng dụng đặt phòng khách sạn đơn giản được xây dựng bằng NextJS, TypeScript, và PostgreSQL.

## Tính năng chính

- Hiển thị danh sách phòng khách sạn
- Tìm kiếm phòng theo địa điểm và ngày
- Xem chi tiết phòng
- Đặt phòng
- Quản lý đặt phòng (xem, hủy) cho admin

## Công nghệ sử dụng

- Frontend: NextJS với TypeScript
- Backend: NextJS API Routes
- Database: PostgreSQL
- ORM: Prisma

## Thiết kế hệ thống

### Sơ đồ kiến trúc hệ thống
![image](https://github.com/user-attachments/assets/045459ac-512f-4c53-a1a0-fe7088092f24)

### Giải thích luồng dữ liệu

1. Client Browser: Người dùng tương tác với ứng dụng thông qua trình duyệt web.
2. NextJS Frontend: Xử lý giao diện người dùng và tương tác. Nó gửi yêu cầu API đến NextJS API Routes và nhận dữ liệu để hiển thị.
3. NextJS API Routes: Xử lý các yêu cầu API từ frontend. Nó sử dụng Prisma ORM để tương tác với cơ sở dữ liệu.
4. Prisma ORM: Cung cấp một lớp trừu tượng để tương tác với cơ sở dữ liệu PostgreSQL. Nó xử lý các truy vấn và thay đổi dữ liệu.
5. PostgreSQL Database: Lưu trữ tất cả dữ liệu của ứng dụng, bao gồm thông tin về phòng và đặt phòng.
6. NextJS Server: Xử lý server-side rendering cho các trang web động.
7. Admin Panel: Giao diện quản lý cho admin để xem và quản lý các đặt phòng.

### Mô tả luồng dữ liệu từ frontend đến backend và database

Luồng dữ liệu chính:

1. Khi người dùng truy cập trang web, NextJS Frontend sẽ gửi yêu cầu đến NextJS Server để render trang.
2. NextJS Server sẽ gọi các API cần thiết thông qua NextJS API Routes để lấy dữ liệu.
3. API Routes sử dụng Prisma ORM để truy vấn hoặc thay đổi dữ liệu trong PostgreSQL Database.
4. Dữ liệu được trả về cho NextJS Server, sau đó được sử dụng để render trang và gửi về cho Client Browser.
5. Đối với các tương tác động (như đặt phòng), Client Browser sẽ gửi yêu cầu trực tiếp đến NextJS API Routes, sau đó được xử lý và lưu vào database.
6. Admin Panel cũng tương tác với hệ thống thông qua NextJS API Routes để quản lý các đặt phòng.

## Cài đặt và chạy locally

1. Clone repository:

   ```
   git clone https://github.com/your-username/hotel-booking-app.git
   cd hotel-booking-app
   ```

2. Cài đặt dependencies:

   ```
   npm install
   ```

3. Tạo file `.env.local` và cấu hình các biến môi trường:

   ```
   DATABASE_URL=your_postgres_connection_string
   ```

4. Chạy migrations:

   ```
   npx prisma migrate dev
   ```

5. Chạy ứng dụng:

   ```
   npm run dev
   ```

6. Truy cập ứng dụng tại `http://localhost:3000`

## Cấu trúc project

```
.
├── prisma
│   └── schema.prisma
├── public
├── src
│   ├── app
│   │   ├── admin
│   │   │   └── manageBooking
│   │   │       └── [id]
│   │   │           └── page.tsx
│   │   ├── api
│   │   │   ├── bookings
│   │   │   │   └── [id]
│   │   │   │       └── route.ts
│   │   │   └── rooms
│   │   │       └── [id]
│   │   │           └── route.ts
│   │   ├── bookings
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   └── rooms
│   │       └── [id]
│   │           └── page.tsx
│   ├── components
│   ├── context
│   └── lib
├── favicon.ico
├── globals.css
├── layout.tsx
├── loading.tsx
└── page.tsx
```

## API Endpoints

- GET /api/rooms: Lấy danh sách phòng
- GET /api/rooms/:id: Lấy chi tiết phòng
- POST /api/bookings: Tạo booking mới
- GET /api/bookings: Lấy danh sách booking
- GET /api/bookings/:id: Lấy chi tiết Booking
- DELETE /api/bookings/:id: Hủy booking

## Deployed Version

Truy cập: [https://hotelroom.vercel.app/]

## Đóng góp

Nếu bạn muốn đóng góp cho dự án, vui lòng làm theo các bước sau:

1. Fork repository
2. Tạo một branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở một Pull Request

## Liên hệ

Phan Thành Quí - quidev2505@gmail.com

Project Link: https://github.com/quidev2505/hotel_booking
