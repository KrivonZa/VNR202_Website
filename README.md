# 🌟 Ứng Dụng Học Tập: Những Khó Khăn Của Việt Nam Sau Năm 1945

Một ứng dụng web tương tác được xây dựng bằng **Next.js** giúp người học tìm hiểu sinh động về **tình hình Việt Nam sau Cách mạng Tháng Tám năm 1945** — giai đoạn đất nước đứng trước muôn vàn thử thách “**ngàn cân treo sợi tóc**”.

---

## 📚 Giới Thiệu

Ứng dụng này được thiết kế nhằm cung cấp trải nghiệm học tập toàn diện về **những khó khăn của Việt Nam sau năm 1945**, bao gồm các lĩnh vực **chính trị, kinh tế, xã hội, văn hóa, quân sự và ngoại giao**, thông qua:

- **Giao diện trực quan, sinh động** với animations và hiệu ứng hiện đại  
- **Nội dung lịch sử chi tiết** được trình bày ngắn gọn, dễ hiểu  
- **Trải nghiệm học tập cá nhân hóa** theo tiến độ của từng người  
- **Bài kiểm tra tương tác** giúp củng cố và đánh giá kiến thức  

---

## 🚀 Công Nghệ Sử Dụng

- **Framework**: Next.js 15.5.3 (React 19.1.0 + TypeScript)  
- **Styling**: Tailwind CSS 4.0  
- **Animations**: Framer Motion 12.23.13  
- **Icons**: Lucide React + React Icons  
- **Build Tool**: Turbopack (Next.js)

---

## 📖 Các Phần Học Tập

### 1. 🌍 Bối Cảnh Trong Nước Và Quốc Tế  
Giới thiệu bối cảnh thế giới sau Chiến tranh thế giới thứ II và tình hình Việt Nam khi vừa giành được độc lập.

### 2. ⚖️ Tình Thế “Ngàn Cân Treo Sợi Tóc”  
Phân tích vì sao đất nước sau năm 1945 được ví như đang ở bờ vực sụp đổ — thù trong, giặc ngoài, chính quyền non trẻ.

### 3. 🏛️ Khó Khăn Về Chính Trị  
Chính quyền Việt Nam Dân chủ Cộng hòa vừa ra đời, chưa có quốc hội, hiến pháp, bộ máy hành chính, hay sự công nhận quốc tế.

### 4. 💣 Khó Khăn Về Quân Sự  
Lực lượng vũ trang yếu, chưa chính quy, trong khi các thế lực quân sự nước ngoài (Pháp, Anh, Tưởng, Nhật) cùng hiện diện.

### 5. 💰 Khó Khăn Về Kinh Tế  
Nạn đói, ngân khố trống rỗng, sản xuất đình trệ, đồng tiền mất giá — nền kinh tế kiệt quệ sau chiến tranh.

### 6. 📚 Khó Khăn Về Văn Hóa – Xã Hội  
Hơn 90% dân số mù chữ, tệ nạn xã hội lan tràn, đời sống nhân dân khổ cực, tàn dư phong kiến nặng nề.

### 7. 🧭 Biện Pháp Vượt Qua Thử Thách  
Tìm hiểu các chủ trương, chính sách của Chính phủ như “Tuần lễ vàng”, “Ngày đồng tâm”, chống giặc đói, giặc dốt, giặc ngoại xâm.

### 8. 🧠 Kiểm Tra Kiến Thức  
Làm bài quiz tương tác để củng cố hiểu biết về tình hình Việt Nam sau năm 1945.

---

## 🛠️ Tính Năng Nổi Bật

- **🎨 Giao diện hiện đại**: Hiệu ứng chuyển cảnh mượt mà, phong cách lịch sử kết hợp hiện đại  
- **⚡ Animations sống động**: Framer Motion tạo cảm giác cuốn hút khi học  
- **📱 Responsive Design**: Tối ưu cho mọi thiết bị từ mobile đến desktop  
- **🎮 Tương tác cao**: Hiệu ứng click, hover, và câu hỏi trắc nghiệm trực quan  
- **📊 Dashboard học tập**: Theo dõi tiến độ và kết quả quiz  
- **🔄 Auto-scroll & Smooth Navigation**: Cuộn mượt, chuyển giữa các phần liền mạch  

---

## 🔧 Cài Đặt và Chạy Dự Án

### Yêu cầu hệ thống
- Node.js 18.0 trở lên  
- npm hoặc yarn  

### Các bước cài đặt

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd Vietnam1945-learning-app

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Hoặc build cho production
npm run build
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

---

## 📁 Cấu Trúc Dự Án

```
src/
├── app/
│   └── page.tsx              # Trang chính và logic routing
├── components/
│   ├── LandingPage.tsx       # Trang chào mừng
│   ├── DashboardSection.tsx  # Bảng điều khiển học tập
│   ├── ContextSection.tsx    # Bối cảnh trong nước & quốc tế
│   ├── CrisisSection.tsx     # Tình thế “ngàn cân treo sợi tóc”
│   ├── PoliticalSection.tsx  # Khó khăn về chính trị
│   ├── MilitarySection.tsx   # Khó khăn về quân sự
│   ├── EconomicSection.tsx   # Khó khăn về kinh tế
│   ├── SocialSection.tsx     # Khó khăn về văn hóa – xã hội
│   ├── SolutionsSection.tsx  # Biện pháp vượt khó
│   ├── QuizPage.tsx          # Kiểm tra kiến thức
│   └── SummarySection.tsx    # Tổng kết và cảm nhận
public/
└── images/                   # Hình ảnh minh họa lịch sử
```

---

## 👥 Đội Ngũ Phát Triển

**Nhóm 3 - VNR202**

| Thành viên | Mã số sinh viên |
|------------|----------------|
| Trương Tấn Dũng | SE183087 |
| Trần Giang Khánh | SE182983 |
| Nguyễn Hoàng An | HE176690 |
| Nguyễn Hoàng Phát | SE170421 |

---

## 🎯 Mục Tiêu Học Tập

Ứng dụng giúp sinh viên:

- **Hiểu rõ** những khó khăn của Việt Nam sau năm 1945  
- **Phân tích được** tình thế chính trị – xã hội “ngàn cân treo sợi tóc”  
- **Nhận biết** vai trò lãnh đạo của Đảng và Chính phủ trong giai đoạn đầu độc lập  
- **Phát triển** kỹ năng tư duy phản biện và tổng hợp thông tin lịch sử  
- **Bồi dưỡng** lòng yêu nước và tinh thần tự hào dân tộc  

---

## 📝 Ghi Chú

- Nội dung được tổng hợp từ bài giảng VNR202 và tài liệu chính thống về lịch sử Việt Nam  
- Ứng dụng sử dụng **Turbopack** để tăng tốc độ build và dev  
- Giao diện được tối ưu hóa cho học tập trực quan và sinh động  

---

## 📞 Liên Hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào về dự án, vui lòng liên hệ với đội ngũ phát triển qua các kênh chính thức của trường.

---

*Dự án được phát triển với ❤️ bởi sinh viên FPT University – Môn VNR202*
