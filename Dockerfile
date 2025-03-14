# Sử dụng Node.js
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json trước khi cài đặt
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Biên dịch TypeScript
RUN npm run build

# Expose port
EXPOSE 5000

# Chạy ứng dụng
CMD ["npm", "run", "start"]
