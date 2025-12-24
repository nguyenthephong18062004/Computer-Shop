import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InvoicePolicyPage.css";

const InvoicePolicyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="invoice-policy-page">
      <div className="invoice-policy-container">
        {/* Header */}
        <div className="invoice-policy-header">
          <button
            onClick={() => navigate(-1)}
            className="invoice-policy-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="invoice-policy-back-icon"
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
          <h1 className="invoice-policy-title">
            THÔNG BÁO VỀ HOÁ ĐƠN KHI MUA HÀNG TẠI COMPUTER STORE
          </h1>
          <p className="invoice-policy-subtitle">
            Thông tin chi tiết về hoá đơn điện tử và quy định về việc cung cấp hoá đơn khi mua hàng
          </p>
        </div>

        {/* Content */}
        <div className="invoice-policy-content">
          {/* Introduction */}
          <section className="invoice-policy-section">
            <div className="invoice-policy-section-content">
              <p>
                Kính gửi Quý khách hàng,
              </p>
              <p>
                Computer Store áp dụng hình thức hoá đơn VAT điện tử cho 100% hàng hoá bán ra và lưu trữ 10 năm theo quy định của pháp luật.
              </p>
              <p>
                Khi quý khách hàng mua bất kì hàng hoá và dịch vụ nào tại các cửa hàng thuộc Computer Store, hoá đơn VAT (hoá đơn điện tử) sẽ được cung cấp ngay tại thời điểm quý khách mua hàng theo đúng quy định pháp luật. Trường hợp quý khách không nhận được hoá đơn, vui lòng liên hệ tổng đài <strong className="invoice-policy-highlight">1800.2063</strong> để Computer Store hỗ trợ xử lí kịp thời.
              </p>
              <p>
                Dưới đây là thông tin về các loại hoá đơn cũng như quy định về việc cung cấp hoá đơn khi mua hàng tại Computer Store:
              </p>
            </div>
          </section>

          {/* Section 1: Các loại hóa đơn */}
          <section className="invoice-policy-section invoice-policy-section-border">
            <h2 className="invoice-policy-section-title">
              1. CÁC LOẠI HÓA ĐƠN
            </h2>
            <div className="invoice-policy-section-content">
              <div className="invoice-policy-method-box invoice-policy-method-blue">
                <p className="invoice-policy-method-title">
                  Hoá đơn điện tử là gì?
                </p>
                <p className="invoice-policy-method-text">
                  Hóa đơn điện tử là chứng từ kế toán ghi nhận thông tin bán hàng hóa, cung cấp dịch vụ theo quy định của Luật kế toán được lưu trữ và quản lý trên nền tảng điện tử. Hoá đơn bán hàng tại Computer Store là hoá đơn điện tử
                </p>
              </div>

              <div className="invoice-policy-method-box invoice-policy-method-green">
                <p className="invoice-policy-method-title">
                  Bản thể hiện hoá đơn điện tử là gì?
                </p>
                <p className="invoice-policy-method-text">
                  Bản thể hiện của hóa đơn điện tử là hóa đơn giấy, được xem là bản sao của hóa đơn điện tử
                </p>
              </div>

              <div className="invoice-policy-method-box invoice-policy-method-purple">
                <p className="invoice-policy-method-title">
                  Hoá đơn chuyển đổi là gì?
                </p>
                <p className="invoice-policy-method-text">
                  Hoá đơn chuyển đổi là hoá đơn giấy được in từ hoá đơn điện tử để chứng minh nguồn gốc xuất xứ hàng hóa. Trên hóa đơn chuyển đổi phải có chữ ký đại diện theo pháp luật của người bán và đóng dấu công ty của người bán (theo Điều 29 Nghị định 119/2018/NĐ-CP).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Quy định về hóa đơn */}
          <section className="invoice-policy-section invoice-policy-section-border">
            <h2 className="invoice-policy-section-title">
              2. QUY ĐỊNH VỀ HÓA ĐƠN
            </h2>
            <div className="invoice-policy-section-content">
              <p className="invoice-policy-subheading">
                Thời gian nhận hóa đơn khi mua hàng
              </p>
              <p>
                Quý khách hàng nhận được hóa đơn bán lẻ và hóa đơn điện tử khi mua hàng tại Computer Store.
              </p>

              <div className="invoice-policy-method-box invoice-policy-method-blue">
                <p className="invoice-policy-method-title">
                  Cách 1: Scan Mã QR
                </p>
                <p className="invoice-policy-method-text">
                  Quý khách hàng có thể Scan Mã QR có chứa đường link dẫn tới Hoá đơn điện tử trên hoá đơn bán lẻ
                </p>
              </div>

              <div className="invoice-policy-method-box invoice-policy-method-green">
                <p className="invoice-policy-method-title">
                  Cách 2: Truy cập đường link tra cứu
                </p>
                <p className="invoice-policy-method-text">
                  Quý khách hàng có thể truy cập đường link: <strong className="invoice-policy-highlight">https://hddt.computerstore.com/tra-cuu-hoa-don</strong>, vui lòng điền các thông tin để hệ thống trả về hoá đơn điện tử cho quý khách hàng
                </p>
                <p className="invoice-policy-method-text-small">
                  Tại đây, bạn cần nhập <strong>Mã nhận hoá đơn</strong> và <strong>Mã kiểm tra</strong> để xem thông tin hoá đơn của mình. Mã nhận hoá đơn bạn có thể xem trên hoá đơn giấy được gửi khi mua hàng.
                </p>
              </div>

              <div className="invoice-policy-method-box invoice-policy-method-purple">
                <p className="invoice-policy-method-title">
                  Cách 3: Đăng nhập Smember
                </p>
                <p className="invoice-policy-method-text">
                  Trường hợp quý khách hàng không còn giữ hoá đơn bán lẻ, vui lòng đăng nhập Smember tại <strong className="invoice-policy-highlight">https://computerstore.com/smember/</strong> để tra cứu
                </p>
              </div>

              <div className="invoice-policy-info-box invoice-policy-info-yellow">
                <p className="invoice-policy-info-title">
                  Một số lưu ý:
                </p>
                <ul className="invoice-policy-list invoice-policy-list-nested">
                  <li>
                    <strong>Bỏ quy định hủy hóa đơn đã lập sai:</strong> (Áp dụng từ 01/06/2025)
                    <ul className="invoice-policy-list invoice-policy-list-nested">
                      <li>Bỏ quy định về việc HỦY BỎ/XÓA BỎ hóa đơn.</li>
                      <li>Trường hợp xuất hóa đơn điện tử bị sai sót (ngoài sai tên, địa chỉ người mua) sẽ không còn được hủy/ xóa bỏ hóa đơn mà phải thực hiện điều chỉnh hóa đơn bằng cách xuất hóa đơn điều chỉnh tăng/giảm.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Thay đổi về hóa đơn:</strong> (Áp dụng từ 30/05/2025)
                    <ul className="invoice-policy-list invoice-policy-list-nested">
                      <li>Thay đổi loại Hóa đơn GTGT: Thay đổi sang ký hiệu 1C25MDP</li>
                      <li>Bổ sung trường Số định danh/Số căn cước công dân:
                        <ul className="invoice-policy-list invoice-policy-list-nested">
                          <li>Nếu người mua là cá nhân kinh doanh, hộ kinh doanh: BẮT BUỘC phải ghi mã số thuế cá nhân/số căn cước công dân người mua.</li>
                          <li>Nếu người mua không phải là cá nhân kinh doanh, hộ kinh doanh: thì không bắt buộc phải cung cấp mã số thuế cá nhân/căn cước công dân người mua. Trường hợp khách hàng yêu cầu thì Computer Store sẽ xuất hóa đơn có mã số thuế cá nhân/CCCD cho khách.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <p className="invoice-policy-subheading">
                Cách tìm lại hóa đơn mua hàng
              </p>

              <div className="invoice-policy-refund-list">
                <div className="invoice-policy-refund-item">
                  <span className="invoice-policy-refund-number">1.</span>
                  <span>Quý khách hàng có thể Scan Mã QR có chứa đường link dẫn tới Hoá đơn điện tử trên hoá đơn bán lẻ</span>
                </div>
                <div className="invoice-policy-refund-item">
                  <span className="invoice-policy-refund-number">2.</span>
                  <span>Quý khách hàng có thể truy cập đường link: <strong className="invoice-policy-highlight">https://hddt.computerstore.com/tra-cuu-hoa-don</strong>, vui lòng điền các thông tin để hệ thống trả về hoá đơn điện tử cho quý khách hàng</span>
                </div>
                <div className="invoice-policy-refund-item">
                  <span className="invoice-policy-refund-number">3.</span>
                  <span>Trường hợp quý khách hàng không còn giữ hoá đơn bán lẻ, vui lòng đăng nhập Smember tại <strong className="invoice-policy-highlight">https://computerstore.com/smember/</strong> để tra cứu</span>
                </div>
                <div className="invoice-policy-refund-item">
                  <span className="invoice-policy-refund-number">4.</span>
                  <span>Liên hệ tổng đài CSKH miễn phí <strong className="invoice-policy-highlight">1800.2063</strong> để được hỗ trợ kịp thời</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="invoice-policy-contact">
            <h3 className="invoice-policy-contact-title">Cần hỗ trợ thêm?</h3>
            <p className="invoice-policy-contact-text">Liên hệ với chúng tôi qua hotline hoặc email</p>
            <div className="invoice-policy-contact-buttons">
              <a
                href="tel:18002063"
                className="invoice-policy-contact-btn"
              >
                📞 1800.2063
              </a>
              <a
                href="mailto:cskh@computerstore.com"
                className="invoice-policy-contact-btn"
              >
                ✉️ cskh@computerstore.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePolicyPage;

