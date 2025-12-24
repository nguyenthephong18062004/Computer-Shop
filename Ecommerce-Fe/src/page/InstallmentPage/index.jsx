import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./InstallmentPage.css";

const InstallmentPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="installment-page">
      <div className="installment-container">
        {/* Header */}
        <div className="installment-header">
          <button
            onClick={() => navigate(-1)}
            className="installment-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="installment-back-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Quay lại
          </button>
          <h1 className="installment-title">
            HƯỚNG DẪN MUA HÀNG TRẢ GÓP ONLINE
          </h1>
          <p className="installment-subtitle">
            Hướng dẫn chi tiết về các hình thức mua trả góp tại Computer Store
          </p>
        </div>

        {/* Content */}
        <div className="installment-content">
          {/* Giới thiệu */}
          <section className="installment-section">
            <div className="installment-section-content">
              <p>
                Để thuận tiện và dễ dàng hơn cho khách hàng khi mua hàng online, Computer Store tích hợp hình thức mua trả góp với sự đa dạng về cổng thanh toán, kỳ hạn, lãi suất ưu đãi đi kèm với nhiều chương trình hấp dẫn.
              </p>
              <p>
                Theo đó, hiện tại trên website đã có chính thức <strong className="installment-highlight">4 cổng trả góp</strong>, được chia thành hình thức chính:
              </p>
            </div>
          </section>

          {/* Section 1: Trả góp qua công ty tài chính */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              1. TRẢ GÓP QUA CÔNG TY TÀI CHÍNH
            </h2>
            <div className="installment-section-content">
              <div className="installment-info-box installment-info-blue">
                <ul className="installment-list">
                  <li>
                    <strong> Home Credit</strong> - Áp dụng cho sản phẩm có giá niêm yết từ <strong className="installment-highlight">3 triệu</strong> trở lên
                  </li>
                  <li>
                    <strong> FE Credit</strong> - Áp dụng cho sản phẩm có giá niêm yết từ <strong className="installment-highlight">3 triệu</strong> trở lên
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Trả góp qua thẻ tín dụng */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              2. TRẢ GÓP QUA THẺ TÍN DỤNG
            </h2>
            <div className="installment-section-content">
              <p>
                Bao gồm <strong className="installment-highlight">3 cổng thanh toán</strong>:
              </p>
              <div className="installment-info-box installment-info-green">
                <ul className="installment-list installment-list-spaced">
                  <li>
                    <strong>• OnePay</strong> - Áp dụng cho sản phẩm có giá bán từ <strong className="installment-highlight">3 triệu</strong> trở lên
                  </li>
                  <li>
                    <strong>• Kredivo</strong> - Áp dụng cho sản phẩm có giá bán dưới <strong className="installment-highlight">25 triệu</strong>
                  </li>
                  <li>
                    <strong>• Alepay</strong> - Áp dụng cho sản phẩm có giá bán từ <strong className="installment-highlight">3 triệu</strong> trở lên
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Trả góp qua thẻ tín dụng là gì */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              3. TRẢ GÓP QUA THẺ TÍN DỤNG LÀ GÌ?
            </h2>
            <div className="installment-section-content">
              <p>
                Đây là hình thức mua trả góp laptop, máy tính bảng, điện thoại,... mà số tiền trả trước, tiền trả góp hàng tháng, tiền lãi suất... sẽ được thanh toán trên thẻ tín dụng. Các giao dịch này an toàn, bảo mật và nhanh chóng thông qua cổng thanh toán Alepay, OnePay và Kredivo.
              </p>
            </div>
          </section>

          {/* Section 4: Lưu ý khi mua trả góp */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              4. NHỮNG LƯU Ý KHI MUA TRẢ GÓP QUA THẺ TÍN DỤNG
            </h2>
            <div className="installment-section-content">
              <div className="installment-info-box installment-info-yellow">
                <ul className="installment-list installment-list-spaced">
                  <li>
                    <strong>•</strong> Khách hàng cần đọc kỹ thể lệ Chương trình trả góp của Ngân hàng bằng cách nhấp vào logo các Ngân hàng đối tác của Computer Store trước khi đăng ký tham gia chương trình.
                  </li>
                  <li>
                    <strong>•</strong> Mỗi giỏ hàng chỉ được có duy nhất <strong>01 sản phẩm</strong>.
                  </li>
                  <li>
                    <strong>•</strong> Mỗi Khách hàng được tham gia Chương trình nhiều lần miễn sao tổng giá trị các đơn hàng không vượt quá hạn mức thẻ tín dụng của Khách hàng.
                  </li>
                  <li>
                    <strong>•</strong> Khách hàng không được hủy đơn hàng sau khi đã chuyển đổi giao dịch sang phương thức trả góp.
                  </li>
                  <li>
                    <strong>•</strong> Đơn hàng tham gia chương trình trả góp sẽ không được đổi trả (trừ sản phẩm lỗi do phía Computer Store).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Các bước thực hiện */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              5. MUA HÀNG TRẢ GÓP ONLINE BẰNG THẺ TÍN DỤNG: CÁC BƯỚC THỰC HIỆN
            </h2>
            <div className="installment-steps">
              <div className="installment-step-box">
                <h3 className="installment-step-title">
                  Bước 1: Chọn sản phẩm và phương thức thanh toán
                </h3>
                <p>
                  Chọn sản phẩm cần thanh toán = Nhấn vào nút <strong className="installment-highlight">"Trả góp qua thẻ"</strong>
                </p>
              </div>

              <div className="installment-step-box">
                <h3 className="installment-step-title">
                  Bước 2: Nhập thông tin cá nhân
                </h3>
                <p>
                  Nhập đầy đủ thông tin cá nhân, sau đó nhấn <strong className="installment-highlight">"Tiếp tục"</strong>
                </p>
              </div>

              <div className="installment-step-box">
                <h3 className="installment-step-title">
                  Bước 3: Xác nhận thông tin đặt hàng
                </h3>
                <p>
                  Xác nhận thông tin đặt hàng và nhấn <strong className="installment-highlight">"Tiếp tục"</strong>
                </p>
              </div>

              <div className="installment-step-box">
                <h3 className="installment-step-title">
                  Bước 4: Chọn phương thức trả góp
                </h3>
                <p>
                  Chọn phương thức trả góp muốn thanh toán và nhấn <strong className="installment-highlight">"Tiếp tục"</strong>
                </p>
              </div>

              <div className="installment-step-box">
                <h3 className="installment-step-title">
                  Bước 5: Xác nhận và thanh toán
                </h3>
                <p>
                  Xác nhận các thông tin về kỳ hạn, số tiền trả trước và tiến hành thanh toán.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Thông tin về hủy đơn hàng */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              6. THÔNG TIN VỀ HỦY ĐƠN HÀNG VÀ THỜI GIAN HOÀN TIỀN
            </h2>
            <div className="installment-section-content">
              <p>
                Đối với các trường hợp hủy đơn hàng, hoàn tiền, Computer Store sẽ tiến hành hủy giao dịch và tiền sẽ được hoàn vào thẻ, thời gian hoàn tiền:
              </p>
              <div className="installment-info-box installment-info-red">
                <ul className="installment-list">
                  <li>
                    <strong>• ALEPAY:</strong> 9 - 17 ngày làm việc
                  </li>
                  <li>
                    <strong>• ONEPAY:</strong> 7 - 14 ngày làm việc
                  </li>
                  <li>
                    <strong>• KREDIVO:</strong> 5 - 10 ngày làm việc
                  </li>
                </ul>
              </div>
              <div className="installment-info-box installment-info-yellow">
                <p className="installment-info-text-small">
                  <strong className="installment-highlight">* Lưu ý:</strong> Computer Store sẽ hoàn lại giá trị sản phẩm mà khách hàng đã thanh toán, phí vận chuyển (với các sản phẩm không được miễn phí vận chuyển), phụ phí, phí chuyển đổi trả góp và các khuyến mãi cộng thêm sẽ không được hoàn lại.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Liên hệ hỗ trợ */}
          <section className="installment-section installment-section-border">
            <h2 className="installment-section-title">
              7. LIÊN HỆ HỖ TRỢ
            </h2>
            <div className="installment-section-content">
              <p>
                Khi cần được hỗ trợ, vui lòng liên hệ với tổng đài:
              </p>
              <div className="installment-info-box installment-info-blue">
                <p className="installment-contact-phone">
                  <strong className="installment-highlight">1800.2097</strong> (Miền Nam)
                </p>
                <p className="installment-contact-time">
                  Thời gian làm việc: 7h30 - 22h00 (Tất cả các ngày trong tuần)
                </p>
              </div>
            </div>
          </section>

          {/* Footer message */}
          <section className="installment-section installment-section-border">
            <div className="installment-footer-message">
              <p className="installment-footer-text">
                Cảm ơn Quý khách hàng đã lựa chọn Computer Store!
              </p>
            </div>
          </section>

          {/* Link to order management */}
          <div className="payment-online-contact">
          <h3 className="payment-online-contact-title">Cần hỗ trợ thêm?</h3>
          <p className="payment-online-contact-text">Liên hệ với chúng tôi qua hotline hoặc email</p>
          <div className="payment-online-contact-buttons">
            <a
              href="tel:18002097"
              className="payment-online-contact-btn"
            >
              📞 1800.2097
            </a>
            <a
              href="mailto:support@computerstore.com"
              className="payment-online-contact-btn"
            >
              ✉️ support@computerstore.com
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InstallmentPage;

