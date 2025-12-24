import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", { email, phone });
  };

  // Helper function to scroll to top when clicking links
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-black bg-white mt-5 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cột 1: Tổng đài, Thanh toán, Đăng ký nhận tin */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Tổng đài hỗ trợ miễn phí</h3>
            <div className="mb-4">
              <p className="text-sm mb-2">
                <span className="font-semibold">Mua hàng - bảo hành:</span>{" "}
                <span className="text-red-600 font-bold">1800.2097</span> (7h30 - 22h00)
              </p>
              <p className="text-sm">
                <span className="font-semibold">Khiếu nại:</span>{" "}
                <span className="text-red-600 font-bold">1800.2063</span> (8h00 - 21h30)
              </p>
            </div>

            

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2 text-red-600">
                ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Nhận ngay voucher 10%
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
              </p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  required
                />
                <label className="flex items-start text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 mr-2"
                    required
                  />
                  <span>
                    Tôi đồng ý với điều khoản của Computer Store
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded text-sm font-semibold hover:bg-red-700"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </form>
            </div>
          </div>

          {/* Cột 2: Thông tin về chính sách */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Thông tin về chính sách</h3>
            <div className="flex flex-col space-y-2">
                <Link 
                to="/policy/payment-online" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Mua hàng và thanh toán Online
              </Link>
              <Link 
                to="/policy/installment" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Mua hàng trả góp Online
              </Link>
              
              <Link 
                to="/policy/shipping" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Chính sách giao hàng
              </Link>
              <Link 
                to="/policy/return" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Chính sách đổi trả
              </Link>
              <Link 
                to="/policy/data-backup" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Quy định về sao lưu dữ liệu
              </Link>
              <Link 
                to="/policy/invoice" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Thông tin hoá đơn mua hàng
              </Link>
              
              
            </div>
          </div>

          {/* Cột 3: Dịch vụ và thông tin khác */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Dịch vụ và thông tin khác</h3>
            <div className="flex flex-col space-y-2 mb-6">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Ưu đãi thanh toán
              </Link>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Quy chế hoạt động
              </Link>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Chính sách bảo mật thông tin cá nhân
              </Link>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Chính sách Bảo hành
              </Link>
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                Liên hệ hợp tác kinh doanh
              </Link>
            </div>
          </div>

          {/* Cột 4: Kết nối và Website thành viên */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Kết nối với Computer Store</h3>
            <div className="flex space-x-3 mb-6">
              {/* Facebook */}
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              
              {/* Instagram */}
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              
              {/* YouTube */}
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              
              {/* TikTok */}
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
              
              {/* Zalo */}
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                aria-label="Zalo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 5.58 2 10c0 2.54 1.19 4.81 3.05 6.27L4 22l6.5-1.05C11.33 21.38 11.66 21.5 12 21.5c5.52 0 10-3.58 10-8S17.52 2 12 2zm0 14c-.33 0-.66-.12-.94-.34l-1.78-1.35-2.21.36.57-2.1-1.52-1.46c-.7-.67-1.06-1.58-1.06-2.55 0-3.03 3.58-5.5 8-5.5s8 2.47 8 5.5-3.58 5.5-8 5.5z"/>
                </svg>
              </Link>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Website thành viên</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính
                  </p>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="text-red-600 font-semibold text-sm"
                  >
                    dienthoaivui
                  </Link>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Trung tâm bảo hành uỷ quyền Apple
                  </p>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="text-blue-600 font-semibold text-sm"
                  >
                    care S
                  </Link>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Kênh thông tin giải trí công nghệ cho giới trẻ
                  </p>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="text-red-600 font-semibold text-sm"
                  >
                    SChannel
                  </Link>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Trang thông tin công nghệ mới nhất
                  </p>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="text-red-600 font-semibold text-sm"
                  >
                    Sforum.vn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© 2024 Computer Store. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
