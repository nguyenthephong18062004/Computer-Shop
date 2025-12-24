import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReturnPolicyPage.css";

const ReturnPolicyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="return-policy-page">
      <div className="return-policy-container">
        {/* Header */}
        <div className="return-policy-header">
          <button
            onClick={() => navigate(-1)}
            className="return-policy-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="return-policy-back-icon"
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
          <h1 className="return-policy-title">
            CHÍNH SÁCH HUỶ GIAO DỊCH, ĐỔI TRẢ HÀNG
          </h1>
          <p className="return-policy-subtitle">
            Hướng dẫn chi tiết về chính sách hủy giao dịch và đổi trả hàng tại Computer Store
          </p>
        </div>

        {/* Content */}
        <div className="return-policy-content">
          {/* Section 1: Chính sách hủy giao dịch */}
          <section className="return-policy-section">
            <h2 className="return-policy-section-title">
              1. CHÍNH SÁCH HỦY GIAO DỊCH
            </h2>
            <div className="return-policy-section-content">
              <p className="return-policy-subheading">
                1.1. Điều kiện hủy giao dịch:
              </p>
              <p>
                Khách hàng có thể hủy giao dịch kể từ lúc bấm nút "Đặt hàng" đến trước thời điểm nhận hàng thành công
              </p>

              <p className="return-policy-subheading">
                1.2. Phương thức hủy giao dịch:
              </p>
              <p>
                Sau khi đặt hàng thành công, khi muốn huỷ giao dịch, quý khách hàng vui lòng:
              </p>
              <ul className="return-policy-list">
                <li>
                  Gọi điện thoại lên tổng đài <strong className="return-policy-highlight">1800.2097</strong> (Miền Nam) hoặc <strong className="return-policy-highlight">1800.2044</strong> (Miền Bắc) hoặc email đến <strong className="return-policy-highlight">cskh@computerstore.com</strong> hoặc nhắn tin trên fanpage: Computer Store - Hệ thống bán lẻ di động toàn quốc để báo hủy giao dịch
                </li>
                <li>
                  Từ chối nhận hàng và xác nhận hủy mua sản phẩm khi bên vận chuyển giao hàng
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Chính sách đổi, trả hàng */}
          <section className="return-policy-section return-policy-section-border">
            <h2 className="return-policy-section-title">
              2. CHÍNH SÁCH ĐỔI, TRẢ HÀNG
            </h2>
            <div className="return-policy-section-content">
              <p className="return-policy-subheading">
                2.1. Thời gian đổi trả:
              </p>

              {/* Exchange Return Time Table */}
              <div className="return-policy-table-wrapper">
                <table className="return-policy-table">
                  <thead className="return-policy-table-header">
                    <tr>
                      <th className="return-policy-table-cell return-policy-table-bold" rowSpan="2">Loại sản phẩm</th>
                      <th className="return-policy-table-cell return-policy-table-bold" colSpan="2">Thời gian đổi mới tiêu chuẩn</th>
                      <th className="return-policy-table-cell return-policy-table-bold" colSpan="2">Trong thời gian tiêu chuẩn</th>
                      <th className="return-policy-table-cell return-policy-table-bold" colSpan="2">Ngoài thời gian tiêu chuẩn</th>
                    </tr>
                    <tr>
                      <th className="return-policy-table-cell return-policy-table-bold">Mới</th>
                      <th className="return-policy-table-cell return-policy-table-bold">Cũ</th>
                      <th className="return-policy-table-cell return-policy-table-bold">Mới</th>
                      <th className="return-policy-table-cell return-policy-table-bold">Cũ</th>
                      <th className="return-policy-table-cell return-policy-table-bold">Mới</th>
                      <th className="return-policy-table-cell return-policy-table-bold">Cũ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="return-policy-table-cell return-policy-table-bold">Điện thoại/ Máy tính bảng/ Macbook</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">20%</td>
                      <td className="return-policy-table-cell">15%</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                    </tr>
                    <tr className="return-policy-table-row-alt">
                      <td className="return-policy-table-cell return-policy-table-bold">Apple watch</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">20%</td>
                      <td className="return-policy-table-cell">20%</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                    </tr>
                    <tr>
                      <td className="return-policy-table-cell return-policy-table-bold">Samsung watch</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">30%</td>
                      <td className="return-policy-table-cell">30%</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                      <td className="return-policy-table-cell">Thoả thuận</td>
                    </tr>
                    <tr className="return-policy-table-row-alt">
                      <td className="return-policy-table-cell return-policy-table-bold">Laptop</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">20%</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                    </tr>
                    <tr>
                      <td className="return-policy-table-cell return-policy-table-bold">Phụ kiện &lt; 1 triệu</td>
                      <td className="return-policy-table-cell">1 năm</td>
                      <td className="return-policy-table-cell">30 ngày</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                    </tr>
                    <tr className="return-policy-table-row-alt">
                      <td className="return-policy-table-cell return-policy-table-bold">Phụ kiện &gt; 1 triệu</td>
                      <td className="return-policy-table-cell">15 ngày</td>
                      <td className="return-policy-table-cell">15 ngày</td>
                      <td className="return-policy-table-cell">Không áp dụng (*)</td>
                      <td className="return-policy-table-cell">Không áp dụng (*)</td>
                      <td className="return-policy-table-cell">Không áp dụng (**)</td>
                      <td className="return-policy-table-cell">Không áp dụng (**)</td>
                    </tr>
                    <tr>
                      <td className="return-policy-table-cell return-policy-table-bold">Bảo hành mở rộng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng (***)</td>
                      <td className="return-policy-table-cell">Không áp dụng (***)</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                      <td className="return-policy-table-cell">Không áp dụng</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="return-policy-info-box return-policy-info-yellow">
                <ul className="return-policy-list return-policy-list-nested">
                  <li>(*) Airpod nhập trả trừ 20%.</li>
                  <li>(**) Airpod nhập theo giá thỏa thuận.</li>
                  <li>(***) BHMR nhập trả lại trong vòng 7 ngày đầu và trừ phí 50%</li>
                </ul>
              </div>

              <p>
                Đối với các đơn hàng giao online, thời gian được tính từ ngày nhận hàng: thời gian T (ngày), tuy nhiên không quá T+5 (ngày) so với ngày trên hoá đơn.
              </p>
              <p>
                Ngoài thời gian trên sản phẩm được bảo hành theo chính sách.
              </p>

              <p className="return-policy-subheading">
                2.2. Điều kiện đổi trả:
              </p>
              <ul className="return-policy-list">
                <li>
                  <strong>Máy như mới:</strong> Không xước xát, không dán decal, hình trang trí
                </li>
                <li>
                  <strong>Máy cũ:</strong> Có tình trạng sản phẩm như lúc mới mua
                </li>
                <li>
                  <strong>Hộp:</strong> Như mới, không móp méo, rách, vỡ, bị viết, vẽ, quấn băng dính, keo; có Serial/IMEI trên hộp trùng với thân máy.
                </li>
                <li>
                  <strong>Phụ kiện và quà tặng:</strong> Còn đầy đủ tem bảo hành của Computer Store (không yêu cầu với miếng dán màn hình), sản phẩm không đứt, gãy, móp, méo hoặc biến dạng ngoại hình
                </li>
                <li>
                  <strong>Tài khoản:</strong> Máy đã đã được đăng xuất khỏi tất cả các tài khoản như: iCloud, Google Account, Mi Account…
                </li>
              </ul>

              <p className="return-policy-subheading">
                2.3. Hướng dẫn gửi trả lại sản phẩm:
              </p>

              <div className="return-policy-method-box return-policy-method-blue">
                <p className="return-policy-method-title">
                  a. Kiểm tra điều kiện đổi trả hàng:
                </p>
                <p className="return-policy-method-text">
                  Vui lòng chắc chắn rằng sản phẩm quý khách yêu cầu đổi (trả) thỏa mãn điều kiện đổi trả hàng của Computer Store (mục 2.2.)
                </p>
              </div>

              <div className="return-policy-method-box return-policy-method-green">
                <p className="return-policy-method-title">
                  b. Các bước thực hiện đổi - trả:
                </p>
                <p className="return-policy-method-text">
                  <strong>(i). Đổi trả trực tiếp tại cửa hàng:</strong> Quý khách có thể mang sản phẩm qua các cửa hàng Computer Store gần nhất để thực hiện đổi trả: Địa chỉ Hệ thống cửa hàng Computer Store trên toàn quốc
                </p>
                <p className="return-policy-method-text">
                  <strong>(ii). Đổi trả qua công ty vận chuyển:</strong>
                </p>
                <ul className="return-policy-list return-policy-list-nested">
                  <li>Khách hàng tự mang đến các đơn vị có trung tâm chuyển phát : VNPost / Viettel…</li>
                  <li>Computer Store tạo gói cước trả hàng để đơn vị vận chuyển thu hồi hàng hóa lại từ khách (áp dụng với khách hàng tại nội thành HN / HCM)</li>
                </ul>
                <div className="return-policy-info-box return-policy-info-yellow">
                  <ul className="return-policy-list return-policy-list-nested">
                    <li>Computer Store không chịu trách nhiệm nếu hàng hóa gửi lại bị hỏng hóc do lỗi của bên vận chuyển.</li>
                    <li>Computer Store chỉ chịu cước đối với các sản phẩm nằm trong điều kiện đổi hoặc trả lại do lỗi của nhà sản xuất.</li>
                  </ul>
                </div>
              </div>

              <div className="return-policy-method-box return-policy-method-orange">
                <p className="return-policy-method-title">
                  Chính sách đổi trả đối với công ty:
                </p>
                <p className="return-policy-method-text">
                  Trường hợp đổi trả các sản phẩm xuất hoá đơn công ty, Quý khách vui lòng cung cấp Biên bản trả hàng và thu hồi hoá đơn hoặc Biên bản giảm hoá đơn GTGT đầy đủ mộc tròn công ty và chữ ký người đại diện Pháp luật công ty. Trường hợp Quý khách không cung cấp đầy đủ chứng từ trên, Computer Store xin phép thu 8% hoặc 10% theo giá trị thuế suất sản phẩm đổi trả.
                </p>
              </div>

              <div className="return-policy-method-box return-policy-method-purple">
                <p className="return-policy-method-title">
                  (iii). Hoàn tiền:
                </p>
                <p className="return-policy-method-text">
                  Đối với các trường hợp huỷ đơn hàng, thời gian hoàn tiền:
                </p>
                <div className="return-policy-refund-list">
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">1.</span>
                    <span>Đối với giao dịch tiền mặt: Hoàn ngay tại cửa hàng.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">2.</span>
                    <span>Đối với giao dịch chuyển khoản: Trong vòng 02 ngày làm việc.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">3.</span>
                    <span>Đối với giao dịch thẻ ATM: Trong vòng 7 - 10 ngày làm việc.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">4.</span>
                    <span>Đối với giao dịch thẻ Visa/Master card/JCB: Trong vòng 7 - 15 ngày làm việc.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">5.</span>
                    <span>Đối với giao dịch thanh toán qua cổng MPOS/ALEPAY: Trong vòng 7 - 14 ngày làm việc.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">6.</span>
                    <span>Đối với giao dịch thanh toán qua VNPAY: Trong vòng 3 - 8 ngày làm việc.</span>
                  </div>
                  <div className="return-policy-refund-item">
                    <span className="return-policy-refund-number">7.</span>
                    <span>Đối với giao dịch thanh toán qua ví MOCA: Trong vòng 3 - 5 ngày làm việc.</span>
                  </div>
                </div>
                <div className="return-policy-info-box return-policy-info-yellow">
                  <ul className="return-policy-list return-policy-list-nested">
                    <li>
                      <strong>Hiệu lực áp dụng:</strong> Kể từ ngày 10/03/2022 đến khi có thông báo thay thế mới.
                    </li>
                    <li>
                      <strong>Ngày làm việc</strong> được hiểu là các ngày trong tuần từ thứ 2 đến thứ 6, không bao gồm thứ 7, chủ nhật, ngày nghỉ Lễ, Tết theo quy định của pháp luật.
                    </li>
                    <li>
                      <strong className="return-policy-highlight">Lưu ý:</strong> Computer Store sẽ hoàn lại giá trị sản phẩm mà khách hàng đã thanh toán, phí vận chuyển (với các sản phẩm không được miễn phí vận chuyển), phụ phí, phí chuyển đổi trả góp và các khuyến mãi cộng thêm sẽ không được hoàn lại.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="return-policy-contact">
            <h3 className="return-policy-contact-title">Cần hỗ trợ thêm?</h3>
            <p className="return-policy-contact-text">Liên hệ với chúng tôi qua hotline hoặc email</p>
            <div className="return-policy-contact-buttons">
              <a
                href="tel:18002097"
                className="return-policy-contact-btn"
              >
                📞 1800.2097
              </a>

              <a
                href="mailto:cskh@computerstore.com"
                className="return-policy-contact-btn"
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

export default ReturnPolicyPage;

