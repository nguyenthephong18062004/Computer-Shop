import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./PaymentOnlinePage.css";

const PaymentOnlinePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="payment-online-page">
      <div className="payment-online-container">
        {/* Header */}
        <div className="payment-online-header">
          <button
            onClick={() => navigate(-1)}
            className="payment-online-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="payment-online-back-icon"
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
          <h1 className="payment-online-title">
            HƯỚNG DẪN MUA HÀNG TỪ XA
          </h1>
          <p className="payment-online-subtitle">
            Hướng dẫn chi tiết về quy trình mua hàng và thanh toán trực tuyến tại Computer Store
          </p>
        </div>

        {/* Content */}
        <div className="payment-online-content">
          {/* Section 1: TRA CỨU ĐƠN HÀNG ONLINE */}
          <section className="payment-online-section">
            <h2 className="payment-online-section-title">
              1. TRA CỨU ĐƠN HÀNG ONLINE
            </h2>
            <div className="payment-online-section-content">
              <p>
                Tính năng tra cứu đơn hàng bằng mã đơn hàng và số điện thoại đang tạm bảo trì. 
                Quý khách vui lòng đăng nhập và truy cập lịch sử mua hàng để xem chi tiết.
              </p>
              <Link 
                to="/account/orders"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="payment-online-link"
              >
                Quản lý đơn hàng
              </Link>
            </div>
          </section>

          {/* Section 2: THÔNG TIN THANH TOÁN VÀ GIAO HÀNG */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              2. THÔNG TIN THANH TOÁN VÀ GIAO HÀNG
            </h2>
            <div className="payment-online-section-content">
              <div className="payment-online-info-box payment-online-info-yellow">
                <p className="payment-online-info-item">
                  <strong>•</strong> Khách hàng từ Đà Nẵng ra phía Bắc áp dụng giá bán của Computer Store Miền Bắc.
                </p>
                <p className="payment-online-info-item">
                  <strong>•</strong> Khách hàng từ Quảng Nam vào phía Nam áp dụng giá bán của Computer Store Miền Nam.
                </p>
              </div>

              <div>
                <p className="payment-online-text">
                  <strong>•</strong> Mua hàng online bằng cách đặt hàng trên website hoặc các hình thức khác: 
                  Gọi tổng đài miễn phí <strong className="payment-online-highlight">1800.2097</strong>; 
                  chat trên Website; Facebook; Email,...
                </p>
              </div>

              <div>
                <h3 className="payment-online-subheading">Các cách thanh toán mua hàng:</h3>
                
                <div className="payment-online-payment-methods">
                  <div className="payment-online-method-box payment-online-method-blue">
                    <h4 className="payment-online-method-title">a. Giao hàng và thanh toán tại nhà:</h4>
                    <p className="payment-online-method-text">
                      Thanh toán bằng tiền mặt khi nhận hàng tại địa chỉ của bạn.
                    </p>
                  </div>

                  <div className="payment-online-method-box payment-online-method-green">
                    <h4 className="payment-online-method-title">
                      b. Chuyển khoản hoặc Thanh toán online trên website
                    </h4>
                    <p className="payment-online-method-text">
                      Miễn phí với các loại thẻ tín dụng, ATM, Internet Banking, 
                      <strong> ZaloPay, MoMo, VNPay, Kredivo, ShopeePay, Fundiin</strong>,...
                    </p>
                    <p className="payment-online-method-text-small">
                      • Khách hàng có thể thực hiện thanh toán chuyển khoản qua <strong>VietQR</strong> cực kỳ đơn giản, 
                      chỉ bằng một thao tác quét mã, tất cả mọi thứ sẽ được thực hiện tự động, 
                      không cần nhập thông tin số tài khoản, không cần nhập số tiền và nội dung chuyển khoản.
                    </p>
                  </div>

                  <div className="payment-online-method-box payment-online-method-purple">
                    <h4 className="payment-online-method-title">c. Mua hàng trả góp:</h4>
                    <div className="payment-online-installment-content">
                      <div>
                        <p className="payment-online-installment-item">
                          <strong>• Trả góp online:</strong> Hơn 20 loại thẻ tín dụng với lựa chọn mua trả góp thẻ tín dụng qua 
                          <strong> Alepay</strong> 
                          và hơn 24 thẻ tín dụng qua <strong>Onepay</strong>
                        </p>
                      </div>
                      <div>
                        <p className="payment-online-installment-item">
                          <strong>• Trả góp trực tiếp tại cửa hàng:</strong> Qua các ngân hàng trực tiếp: 
                          <strong> VP Bank, VIB, VCB, MSB, BIDV, Shinhan Bank, OCB, Home Credit, HSBC, 
                          Standard Chartered, ACB, Sacombank, Techcombank, Vietinbank</strong>
                        </p>
                        <p className="payment-online-installment-note">
                          (Miễn phí chuyển đổi lên đến kỳ hạn 12 tháng)
                        </p>
                      </div>
                      <div>
                        <p className="payment-online-installment-item">
                          <strong>• Trả góp qua công ty tài chính:</strong> Xét duyệt hồ sơ online - nhận sản phẩm tại cửa hàng.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="payment-online-method-box payment-online-method-orange">
                    <h4 className="payment-online-method-title">d. Mua hàng xuất hóa đơn VAT cho công ty:</h4>
                    <p className="payment-online-method-text-small">
                      Để đảm bảo hóa đơn VAT xuất cho tổ chức/công ty được hợp lệ theo quy định, 
                      với các đơn hàng từ <strong>5.000.000 đồng</strong> trở lên, quý khách vui lòng thanh toán bằng hình thức không dùng tiền mặt, cụ thể:
                    </p>
                    <ul className="payment-online-list">
                      <li>Chuyển khoản từ tài khoản ngân hàng mang tên tổ chức/công ty của quý khách</li>
                      <li>Hoặc thanh toán qua thẻ tín dụng/thẻ ghi nợ đứng tên công ty (qua POS hoặc cổng thanh toán online)</li>
                      <li>Hoặc thanh toán qua tài khoản công ty quý khách tại các cổng trung gian (Alepay, Onepay, VNPay…)</li>
                    </ul>
                    <p className="payment-online-method-text-small">
                      Quý khách được khuyến khích sử dụng mã QR chuyển khoản để đảm bảo thông tin chính xác và đối soát nhanh chóng.
                    </p>
                  </div>

                  <div className="payment-online-method-box payment-online-method-gray">
                    <h4 className="payment-online-method-title">e. Chi phí vận chuyển:</h4>
                    <ul className="payment-online-list">
                      <li>
                        <strong>Miễn phí vận chuyển</strong> mọi đơn hàng đối với thành viên Smem và SVip
                      </li>
                      <li>
                        Đối với các khách hàng còn lại:
                        <ul className="payment-online-list payment-online-list-nested">
                          <li>Đơn hàng dưới <strong>300.000đ</strong>: Phí giao hàng <strong>15.000đ</strong></li>
                          <li>Đơn hàng từ <strong>300.000đ</strong> trở lên: <strong>Miễn phí giao hàng</strong></li>
                        </ul>
                      </li>
                      <li>
                        Phụ thu phí cồng kềnh (nếu có), áp dụng đối với các đơn hàng vận chuyển bởi Computer Store và đối tác giao hàng
                      </li>
                    </ul>
                    <div className="payment-online-bulky-note">
                      <p className="payment-online-bulky-note-title">(***) Đơn hàng được xác định là cồng kềnh nếu rơi vào một trong các trường hợp sau:</p>
                      <ol className="payment-online-ordered-list">
                        <li>Khối lượng thực tế &gt; 8kg</li>
                        <li>Khối lượng quy đổi &gt; 10kg (DxRxC/5000)</li>
                        <li>Cả 3 chiều có kích thước lớn hơn 35cm</li>
                        <li>Cả 2 chiều có kích thước lớn hơn 45cm</li>
                        <li>Chỉ cần một chiều có kích thước lớn hơn 50cm</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: THỜI GIAN GIAO NHẬN HÀNG */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              3. THỜI GIAN GIAO NHẬN HÀNG
            </h2>
            <div className="payment-online-section-content">
              <div>
                <h3 className="payment-online-subheading">a. Phạm vi áp dụng</h3>
                <p className="payment-online-text">
                  Computer Store cung cấp dịch vụ giao hàng cho toàn bộ đơn hàng phát sinh từ hệ thống bán lẻ của Công ty, bao gồm:
                </p>
                <ul className="payment-online-list">
                  <li><strong>Giao hàng nội thành:</strong> TP.HCM, Hà Nội và các khu vực trung tâm.</li>
                  <li><strong>Giao hàng ngoại thành:</strong> Vùng ven, huyện thuộc HCM/HN và các tỉnh thành khác.</li>
                  <li><strong>Giao hàng liên tỉnh:</strong> Toàn quốc, thông qua đội ngũ giao nhận của Computer Store và đối tác 3PLs.</li>
                  <li><strong>Hàng điện máy / Cồng kềnh:</strong> Áp dụng giao hàng tận nơi; một số sản phẩm hỗ trợ lắp đặt tùy theo chính sách.</li>
                </ul>
              </div>

              <div>
                <h3 className="payment-online-subheading">b. Hình thức và dịch vụ giao hàng</h3>
                <ul className="payment-online-list payment-online-list-spaced">
                  <li>
                    <strong>Giao tiêu chuẩn:</strong> Giao tại địa chỉ khách hàng cung cấp.
                  </li>
                  <li>
                    <strong>Giao nhanh 2 giờ (tùy khu vực):</strong> Áp dụng tại một số quận nội thành.
                    <p className="payment-online-method-text-small">
                      Áp dụng đối với các sản phẩm: điện thoại, Laptop, Máy tính bảng, Phụ kiện, 
                      và các sản phẩm có kích thước vừa và nhỏ (* 1 trong 3 cạnh sản phẩm &lt;=50cm).
                    </p>
                  </li>
                  <li>
                    <strong>Giao & lắp đặt (đối với hàng cồng kềnh/điện máy):</strong>
                    <p className="payment-online-method-text-small">
                      Điều hòa, máy giặt, máy lạnh, tủ lạnh, TV, máy lọc không khí, các thiết bị cồng kềnh khác.
                      Thời gian giao/lắp đặt sẽ được liên hệ xác nhận trước.
                    </p>
                  </li>
                </ul>

                {/* Bảng thời gian giao hàng */}
                <div className="payment-online-table-wrapper">
                  <table className="payment-online-table">
                    <thead>
                      <tr className="payment-online-table-header">
                        <th className="payment-online-table-cell">KHU VỰC</th>
                        <th className="payment-online-table-cell">NỘI THÀNH</th>
                        <th className="payment-online-table-cell">NGOẠI THÀNH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="payment-online-table-cell payment-online-table-bold">Hồ Chí Minh</td>
                        <td className="payment-online-table-cell">
                          Giao nhanh từ 1 - 2 giờ (áp dụng cho khoảng cách tính từ siêu thị gần nhất có hàng đến nhà khách và có bán kính &lt;= 10km (ngoài trừ các Huyện Cần Giờ, Củ Chi, Nhà Bè)
                        </td>
                        <td className="payment-online-table-cell">
                          Trong vòng 24 - 48 giờ cho các khoảng cách xa hơn 10km
                        </td>
                      </tr>
                      <tr className="payment-online-table-row-alt">
                        <td className="payment-online-table-cell payment-online-table-bold">Hà Nội</td>
                        <td className="payment-online-table-cell">
                          Giao nhanh từ 1 - 2 giờ (áp dụng cho khoảng cách tính từ siêu thị gần nhất có hàng đến nhà khách và có bán kính &lt;= 10km, ngoại trừ các huyện Chương Mỹ, Đan Phượng, Đông Anh, Gia Lâm, Hoài Đức, Mê Linh, Mỹ Đức, Phú Xuyên, Phúc Thọ, Quốc Oai, Sóc Sơn, Thạch Thất, Thanh Oai, Thanh Trì, Thường Tín, Ứng Hòa, Sơn Tây, Mê Linh)
                        </td>
                        <td className="payment-online-table-cell">
                          Trong vòng 24 - 48 giờ cho các khoảng cách xa hơn 10km
                        </td>
                      </tr>
                      <tr>
                        <td className="payment-online-table-cell payment-online-table-bold">Khu vực các tỉnh có cửa hàng Computer Store (trừ Hồ Chí Minh và Hà Nội)</td>
                        <td className="payment-online-table-cell">
                          Trong vòng 24h (Khoảng cách &lt;=10km)
                        </td>
                        <td className="payment-online-table-cell">
                          Trong vòng 1 - 2 ngày (Khoảng cách &gt;10km)
                        </td>
                      </tr>
                      <tr className="payment-online-table-row-alt">
                        <td className="payment-online-table-cell payment-online-table-bold">Các khu vực còn lại (Nội tỉnh - liên tỉnh)</td>
                        <td className="payment-online-table-cell" colSpan="2">
                          Trong vòng 2 - 5 ngày
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="payment-online-info-box payment-online-info-yellow">
                  <h4 className="payment-online-info-title">Lưu ý:</h4>
                  <ul className="payment-online-list payment-online-list-small">
                    <li>Thời gian giao hàng trong ngày nội thành khu vực Hồ Chí Minh và Hà Nội từ: <strong>8:00 - 20:00</strong>. Riêng giao nội tỉnh - liên tỉnh qua đối tác vận chuyển sẽ được liên hệ trước khi giao hàng.</li>
                    <li>Thời gian giao nhận trên áp dụng với các đơn hàng xác nhận trước <strong>14h</strong>, các đơn hàng sau thời gian này sẽ được tính cho ngày kế tiếp.</li>
                    <li>Thời gian giao hàng ở khu vực quận ngoại thành và tỉnh thành khác không bao gồm chủ nhật và các ngày Lễ, Tết.</li>
                    <li>Vui lòng ghi chú đặt hàng nếu có nhu cầu xuất hóa đơn.</li>
                    <li>Vui lòng cung cấp đủ các thông tin sau: <strong>Tên người nhận, địa chỉ, số điện thoại</strong>.</li>
                  </ul>
                </div>

                <div className="payment-online-info-box payment-online-info-red">
                  <h4 className="payment-online-info-title">Các quy định khi giao nhận hàng:</h4>
                  <ul className="payment-online-list payment-online-list-small">
                    <li>Với các đơn hàng từ <strong>10 triệu đồng</strong> trở lên, Computer Store xin phép kiểm tra thẻ thanh toán và CCCD của chủ thẻ trước khi giao hàng, nhằm hạn chế rủi ro gian lận.</li>
                    <li>Quý khách sẽ nhận mã <strong>OTP</strong> xác nhận qua tin nhắn cho đơn hàng trả trước từ <strong>2 triệu</strong>. Vui lòng cấp mã cho nhân viên giao hàng để nhận hàng.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: THÔNG TIN VỀ HỦY ĐƠN HÀNG VÀ THỜI GIAN HOÀN TIỀN */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              4. THÔNG TIN VỀ HỦY ĐƠN HÀNG VÀ THỜI GIAN HOÀN TIỀN
            </h2>
            <div className="payment-online-section-content">
              <p className="payment-online-text">Đối với các trường hợp hủy đơn hàng, thời gian hoàn tiền:</p>
              <div className="payment-online-refund-list">
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">1.</span>
                  <p>Đối với giao dịch tiền mặt: <strong className="payment-online-refund-immediate">Hoàn ngay tại cửa hàng</strong>.</p>
                </div>
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">2.</span>
                  <p>Đối với giao dịch chuyển khoản: Trong vòng <strong>03 ngày làm việc</strong>.</p>
                </div>
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">3.</span>
                  <p>Đối với giao dịch thẻ ATM: Trong vòng <strong>7 - 10 ngày làm việc</strong>.</p>
                </div>
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">4.</span>
                  <p>Đối với giao dịch thẻ Visa/Master card/JCB: Trong vòng <strong>7 - 15 ngày làm việc</strong>.</p>
                </div>
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">5.</span>
                  <p>Đối với giao dịch thanh toán qua cổng MPOS/ALEPAY/ONEPAY: Trong vòng <strong>7 - 14 ngày làm việc</strong>.</p>
                </div>
                <div className="payment-online-refund-item">
                  <span className="payment-online-refund-number">6.</span>
                  <p>Đối với giao dịch thanh toán qua VNPAY/Kredivo/MoMo/ShopeePay/Zalopay/Fundiin: Trong vòng <strong>3 - 8 ngày làm việc</strong>.</p>
                </div>
              </div>
              <div className="payment-online-info-box payment-online-info-blue">
                <p className="payment-online-info-text-small">
                  <strong>• Hiệu lực áp dụng:</strong> Kể từ ngày 12/12/2022 đến khi có thông báo thay thế mới.
                </p>
                <p className="payment-online-info-text-small">
                  <strong>• Ngày làm việc</strong> được hiểu là các ngày trong tuần từ thứ 2 đến thứ 6, không bao gồm thứ 7, chủ nhật, ngày nghỉ Lễ, Tết theo quy định của pháp luật.
                </p>
                <p className="payment-online-info-text-small">
                  <strong>• Lưu ý:</strong> Computer Store sẽ hoàn lại giá trị sản phẩm mà khách hàng đã thanh toán, 
                  phí vận chuyển (với các sản phẩm không được miễn phí vận chuyển), phụ phí, phí chuyển đổi trả góp và các khuyến mãi cộng thêm sẽ không được hoàn lại.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: HÀNG HÓA ĐẢM BẢO */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              5. HÀNG HÓA ĐẢM BẢO
            </h2>
            <div className="payment-online-section-content">
              <ul className="payment-online-list">
                <li>Sản phẩm được quấn bọt khí trước khi bỏ vào hộp carton và đóng gói trước camera ghi hình.</li>
                <li>Đơn hàng &gt;1tr được dán tem vỡ logo Computer Store ngoài hộp carton.</li>
                <li>
                  Trường hợp khi giao đến hộp hàng không còn nguyên vẹn, ẩm ướt, móp, méo hoặc mất tem vỡ 
                  vui lòng <strong className="payment-online-highlight">từ chối nhận</strong> và liên hệ với cửa hàng xử lý đơn hàng của Quý khách.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: CHÍNH SÁCH ĐỔI MỚI */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              6. CHÍNH SÁCH ĐỔI MỚI
            </h2>
            <div className="payment-online-section-content">
              <ul className="payment-online-list">
                <li>Áp dụng chính sách đổi mới như khách mua tại cửa hàng.</li>
                <li>
                  Thời gian đổi mới tính từ ngày khách hàng nhận máy và không quá <strong>35 ngày</strong> kể từ ngày xuất bán.
                </li>
                <li>
                  Khách hàng gửi máy đổi mới vui lòng đóng gói hàng hoá cẩn thận, và liên hệ với cửa hàng xử lý đơn hàng của Quý khách.
                </li>
              </ul>
              <div className="payment-online-info-box payment-online-info-yellow">
                <p className="payment-online-info-text-small">
                  (Với các thất thoát, hư hỏng sản phẩm trong quá trình vận chuyển sẽ không được hưởng chế độ đổi trả và bảo hành máy).
                </p>
              </div>
              <p className="payment-online-text">
                • Computer Store hỗ trợ khách hàng chi phí vận chuyển với trường hợp sản phẩm phát sinh lỗi trong <strong>15 ngày</strong>.
              </p>
              <div className="payment-online-info-box payment-online-info-blue">
                <h4 className="payment-online-info-title">Chính sách đổi trả đối với công ty:</h4>
                <p className="payment-online-info-text-small">
                  Trường hợp đổi trả các sản phẩm xuất hoá đơn công ty, Quý khách vui lòng cung cấp Biên bản trả hàng và thu hồi hoá đơn 
                  hoặc Biên bản giảm hoá đơn GTGT đầy đủ mộc tròn công ty và chữ ký người đại diện Pháp luật công ty. 
                  Trường hợp Quý khách không cung cấp đầy đủ chứng từ trên, Computer Store xin phép thu <strong>8% hoặc 10%</strong> 
                  theo giá trị thuế suất sản phẩm đổi trả.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: YÊU CẦU THANH TOÁN TRƯỚC */}
          <section className="payment-online-section payment-online-section-border">
            <h2 className="payment-online-section-title">
              7. YÊU CẦU THANH TOÁN TRƯỚC VỚI CÁC TRƯỜNG HỢP
            </h2>
            <div className="payment-online-section-content">
              <div className="payment-online-info-box payment-online-info-red">
                <h4 className="payment-online-info-title">* Mua tặng hoặc không thanh toán tiền mặt:</h4>
                <p className="payment-online-text">
                  <strong>Thanh toán trước 100%</strong> giá trị đơn hàng
                </p>
                <p className="payment-online-text">
                  <strong>* Chuyển khoản 100%</strong> hoặc phần số dư của 30 triệu nếu đơn hàng có giá trị trên <strong>30 triệu</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Footer message */}
        <section className="installment-section installment-section-border">
            <div className="installment-footer-message">
              <p className="installment-footer-text">
                Cảm ơn Quý khách hàng đã lựa chọn Computer Store!
              </p>
            </div>
          </section>
        {/* Contact Section */}
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
  );
};

export default PaymentOnlinePage;
