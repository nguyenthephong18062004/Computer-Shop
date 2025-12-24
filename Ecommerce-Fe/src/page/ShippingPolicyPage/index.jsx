import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ShippingPolicyPage.css";

const ShippingPolicyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="shipping-policy-page">
      <div className="shipping-policy-container">
        {/* Header */}
        <div className="shipping-policy-header">
          <button
            onClick={() => navigate(-1)}
            className="shipping-policy-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shipping-policy-back-icon"
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
          <h1 className="shipping-policy-title">
            HƯỚNG DẪN MUA HÀNG TỪ XA
          </h1>
          <p className="shipping-policy-subtitle">
            Hướng dẫn chi tiết về quy trình mua hàng, thanh toán và giao hàng tại Computer Store
          </p>
        </div>

        {/* Content */}
        <div className="shipping-policy-content">
          {/* Section 1: TRA CỨU ĐƠN HÀNG ONLINE */}
          <section className="shipping-policy-section">
            <h2 className="shipping-policy-section-title">
              1. TRA CỨU ĐƠN HÀNG ONLINE
            </h2>
            <div className="shipping-policy-section-content">
              <p>
                Tính năng tra cứu đơn hàng bằng mã đơn hàng và số điện thoại đang tạm bảo trì. Quý khách vui lòng đăng nhập và truy cập lịch sử mua hàng để xem chi tiết. Xem đơn hàng trong Smember
              </p>
            </div>
          </section>

          {/* Section 2: THÔNG TIN THANH TOÁN VÀ GIAO HÀNG */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              2. THÔNG TIN THANH TOÁN VÀ GIAO HÀNG
            </h2>
            <div className="shipping-policy-section-content">
              <ul className="shipping-policy-list">
                <li>
                  Khách hàng từ Đà Nẵng ra phía Bắc áp dụng giá bán của Computer Store Miền Bắc.
                </li>
                <li>
                  Khách hàng từ Quảng Nam vào phía Nam áp dụng giá bán của Computer Store Miền Nam.
                </li>
                <li>
                  Mua hàng online bằng cách đặt hàng trên website hoặc các hình thức khác: Gọi tổng đài miễn phí 18002097; chat trên Website; Facebook; Email,...
                </li>
              </ul>

              <p className="shipping-policy-subheading">
                Các cách thanh toán mua hàng:
              </p>

              <div className="shipping-policy-method-box shipping-policy-method-blue">
                <p className="shipping-policy-method-title">
                  a. Giao hàng và thanh toán tại nhà:
                </p>
                <p className="shipping-policy-method-text">
                  Thanh toán khi nhận hàng (COD) - Áp dụng cho các đơn hàng trong phạm vi giao hàng của Computer Store.
                </p>
              </div>

              <div className="shipping-policy-method-box shipping-policy-method-green">
                <p className="shipping-policy-method-title">
                  b. Chuyển khoản hoặc Thanh toán online trên website:
                </p>
                <p className="shipping-policy-method-text">
                  Miễn phí với các loại thẻ tín dụng, ATM, Internet Banking, ZaloPay, MoMo, VNPay, Kredivo, ShopeePay, Fundiin,...
                </p>
                <p className="shipping-policy-method-text">
                  Khách hàng có thể thực hiện thanh toán chuyển khoản qua VietQR cực kỳ đơn giản, chỉ bằng một thao tác quét mã, tất cả mọi thứ sẽ được thực hiện tự động, không cần nhập thông tin số tài khoản, không cần nhập số tiền và nội dung chuyển khoản. (Xem hướng dẫn thanh toán qua Viet-QR tại đây)
                </p>
              </div>

              <div className="shipping-policy-method-box shipping-policy-method-purple">
                <p className="shipping-policy-method-title">
                  c. Mua hàng trả góp:
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>
                    Trả góp online hơn 20 loại thẻ tín dụng với lựa chọn mua trả góp thẻ tín dụng qua Alepay (xem thêm thanh toán trả góp trực tuyến Alepay) và hơn 24 thẻ tín dụng qua Onepay (xem thêm thanh toán trả góp trực tuyến Onepay)
                  </li>
                  <li>
                    Trả góp trực tiếp tại cửa hàng qua các ngân hàng trực tiếp: VP Bank, VIB, VCB, MSB, BIDV, Shinhan Bank, OCB, Home Credit, HSBC, Standard Chartered, ACB, Sacombank, Techcombank, Vietinbank (Miễn phí chuyển đổi lên đến kỳ hạn 12 tháng - Xem thêm ưu đãi chương trình)
                  </li>
                  <li>
                    Trả góp qua công ty tài chính: xét duyệt hồ sơ online - nhận sản phẩm tại cửa hàng.
                  </li>
                </ul>
              </div>

              <div className="shipping-policy-method-box shipping-policy-method-orange">
                <p className="shipping-policy-method-title">
                  d. Mua hàng xuất hóa đơn VAT cho công ty:
                </p>
                <p className="shipping-policy-method-text">
                  Để đảm bảo hóa đơn VAT xuất cho tổ chức/công ty được hợp lệ theo quy định, với các đơn hàng từ 5.000.000 đồng trở lên, quý khách vui lòng thanh toán bằng hình thức không dùng tiền mặt, cụ thể:
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>Chuyển khoản từ tài khoản ngân hàng mang tên tổ chức/công ty của quý khách</li>
                  <li>Hoặc thanh toán qua thẻ tín dụng/thẻ ghi nợ đứng tên công ty (qua POS hoặc cổng thanh toán online)</li>
                  <li>Hoặc thanh toán qua tài khoản công ty quý khách tại các cổng trung gian (Alepay, Onepay, VNPay…)</li>
                </ul>
                <p className="shipping-policy-method-text-small">
                  Quý khách được khuyến khích sử dụng mã QR chuyển khoản để đảm bảo thông tin chính xác và đối soát nhanh chóng. (Xem hướng dẫn chi tiết)
                </p>
              </div>

              <div className="shipping-policy-method-box shipping-policy-method-gray">
                <p className="shipping-policy-method-title">
                  e. Chi phí vận chuyển:
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>
                    Miễn phí vận chuyển mọi đơn hàng đối với thành viên Smem và SVip
                  </li>
                  <li>
                    Đối với các khách hàng còn lại:
                    <ul className="shipping-policy-list shipping-policy-list-nested">
                      <li>Đơn hàng dưới 300.000đ: Phí giao hàng 15.000đ</li>
                      <li>Đơn hàng từ 300.000đ trở lên: Miễn phí giao hàng</li>
                    </ul>
                  </li>
                  <li>
                    Phụ thu phí cồng kềnh (nếu có), áp dụng đối với các đơn hàng vận chuyển bởi Computer Store và đối tác giao hàng
                  </li>
                </ul>
                <div className="shipping-policy-info-box shipping-policy-info-yellow">
                  <p className="shipping-policy-info-title">
                    (***) Đơn hàng được xác định là cồng kềnh nếu rơi vào một trong các trường hợp sau:
                  </p>
                  <ol className="shipping-policy-ordered-list">
                    <li>Khối lượng thực tế &gt; 8kg</li>
                    <li>Khối lượng quy đổi &gt; 10kg (DxRxC/5000)</li>
                    <li>Cả 3 chiều có kích thước lớn hơn 35cm</li>
                    <li>Cả 2 chiều có kích thước lớn hơn 45cm</li>
                    <li>Chỉ cần một chiều có kích thước lớn hơn 50cm</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: THỜI GIAN GIAO NHẬN HÀNG */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              3. THỜI GIAN GIAO NHẬN HÀNG
            </h2>
            <div className="shipping-policy-section-content">
              <p className="shipping-policy-subheading">
                a. Phạm vi áp dụng
              </p>
              <p>
                Computer Store cung cấp dịch vụ giao hàng cho toàn bộ đơn hàng phát sinh từ hệ thống bán lẻ của Công ty, bao gồm:
              </p>
              <ul className="shipping-policy-list">
                <li>Giao hàng nội thành: TP.HCM, Hà Nội và các khu vực trung tâm.</li>
                <li>Giao hàng ngoại thành: Vùng ven, huyện thuộc HCM/HN và các tỉnh thành khác.</li>
                <li>Giao hàng liên tỉnh: Toàn quốc, thông qua đội ngũ giao nhận của Computer Store và đối tác 3PLs.</li>
                <li>Hàng điện máy / Cồng kềnh: Áp dụng giao hàng tận nơi; một số sản phẩm hỗ trợ lắp đặt tùy theo chính sách.</li>
              </ul>

              <p className="shipping-policy-subheading">
                b. Hình thức và dịch vụ giao hàng
              </p>
              <ul className="shipping-policy-list">
                <li>
                  <strong>Giao tiêu chuẩn:</strong> Giao tại địa chỉ khách hàng cung cấp.
                </li>
                <li>
                  <strong>Giao nhanh 2 giờ (tùy khu vực):</strong> Áp dụng tại một số quận nội thành.
                </li>
                <li>
                  Áp dụng đối với các sản phẩm: điện thoại, Laptop, Máy tính bảng, Phụ kiện, và các sản phẩm có kích thước vừa và nhỏ (* 1 trong 3 cạnh sản phẩm &lt;=50cm).
                </li>
              </ul>

              {/* Delivery Time Table */}
              <div className="shipping-policy-table-wrapper">
                <table className="shipping-policy-table">
                  <thead className="shipping-policy-table-header">
                    <tr>
                      <th className="shipping-policy-table-cell shipping-policy-table-bold">KHU VỰC</th>
                      <th className="shipping-policy-table-cell shipping-policy-table-bold">NỘI THÀNH</th>
                      <th className="shipping-policy-table-cell shipping-policy-table-bold">NGOẠI THÀNH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shipping-policy-table-cell shipping-policy-table-bold">Hồ Chí Minh</td>
                      <td className="shipping-policy-table-cell">
                        Giao nhanh từ 1 - 2 giờ (áp dụng cho Khoảng cách tính từ siêu thị gần nhất có hàng đến nhà khách và có bán kính &lt;= 10km (ngoài trừ các Huyện Cần Giờ, Củ Chi, Nhà Bè)
                      </td>
                      <td className="shipping-policy-table-cell">
                        Trong vòng 24 - 48 giờ cho các khoảng cách xa hơn 10km
                      </td>
                    </tr>
                    <tr className="shipping-policy-table-row-alt">
                      <td className="shipping-policy-table-cell shipping-policy-table-bold">Hà Nội</td>
                      <td className="shipping-policy-table-cell">
                        Giao nhanh từ 1 - 2 giờ (áp dụng cho Khoảng cách tính từ siêu thị gần nhất có hàng đến nhà khách và có bán kính &lt;= 10km, ngoại trừ các huyện Chương Mỹ, Đan Phượng, Đông Anh, Gia Lâm, Hoài Đức, Mê Linh, Mỹ Đức, Phú Xuyên, Phúc Thọ, Quốc Oai, Sóc Sơn, Thạch Thất, Thanh Oai, Thanh Trì, Thường Tín, Ứng Hòa, Sơn Tây, Mê Linh)
                      </td>
                      <td className="shipping-policy-table-cell">
                        Trong vòng 24 - 48 giờ cho các khoảng cách xa hơn 10km
                      </td>
                    </tr>
                    <tr>
                      <td className="shipping-policy-table-cell shipping-policy-table-bold">
                        Khu vực các tỉnh có cửa hàng Computer Store (trừ Hồ Chí Minh và Hà Nội)
                      </td>
                      <td className="shipping-policy-table-cell">
                        Trong vòng 24h (Khoảng cách &lt;=10km)
                      </td>
                      <td className="shipping-policy-table-cell">
                        Trong vòng 1 - 2 ngày (Khoảng cách &gt;10km)
                      </td>
                    </tr>
                    <tr className="shipping-policy-table-row-alt">
                      <td className="shipping-policy-table-cell shipping-policy-table-bold">
                        Các khu vực còn lại (Nội tỉnh - liên tỉnh)
                      </td>
                      <td className="shipping-policy-table-cell" colSpan="2">
                        Trong vòng 2 - 5 ngày
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="shipping-policy-method-box shipping-policy-method-blue">
                <p className="shipping-policy-method-title">
                  Giao &amp; lắp đặt (đối với hàng cồng kềnh/điện máy):
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>Điều hòa, máy giặt, máy lạnh, tủ lạnh, TV, máy lọc không khí, các thiết bị cồng kềnh khác.</li>
                  <li>Thời gian giao/lắp đặt sẽ được liên hệ xác nhận trước.</li>
                </ul>
              </div>

              <div className="shipping-policy-info-box shipping-policy-info-yellow">
                <p className="shipping-policy-info-title">
                  Lưu ý:
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>Thời gian giao hàng trong ngày nội thành khu vực Hồ Chí Minh và Hà Nội từ: 8:00 - 20:00. Riêng giao nội tỉnh - liên tỉnh qua đối tác vận chuyển sẽ được liên hệ trước khi giao hàng.</li>
                  <li>Thời gian giao nhận trên áp dụng với các đơn hàng xác nhận trước 14h, các đơn hàng sau thời gian này sẽ được tính cho ngày kế tiếp.</li>
                  <li>Thời gian giao hàng ở khu vực quận ngoại thành và tỉnh thành khác không bao gồm chủ nhật và các ngày Lễ, Tết.</li>
                  <li>Vui lòng ghi chú đặt hàng nếu có nhu cầu xuất hóa đơn.</li>
                  <li>Vui lòng cung cấp đủ các thông tin sau: Tên người nhận, địa chỉ, số điện thoại.</li>
                </ul>
              </div>

              <div className="shipping-policy-info-box shipping-policy-info-red">
                <p className="shipping-policy-info-title">
                  Các quy định khi giao nhận hàng:
                </p>
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>Với các đơn hàng từ 10 triệu đồng trở lên, Computer Store xin phép kiểm tra thẻ thanh toán và CCCD của chủ thẻ trước khi giao hàng, nhằm hạn chế rủi ro gian lận.</li>
                  <li>Quý khách sẽ nhận mã OTP xác nhận qua tin nhắn cho đơn hàng trả trước từ 2 triệu. Vui lòng cấp mã cho nhân viên giao hàng để nhận hàng.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: THÔNG TIN VỀ HUỶ ĐƠN HÀNG VÀ THỜI GIAN HOÀN TIỀN */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              4. THÔNG TIN VỀ HUỶ ĐƠN HÀNG VÀ THỜI GIAN HOÀN TIỀN
            </h2>
            <div className="shipping-policy-section-content">
              <p>
                Đối với các trường hợp huỷ đơn hàng, thời gian hoàn tiền:
              </p>
              <div className="shipping-policy-refund-list">
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">1.</span>
                  <span>Đối với giao dịch tiền mặt: Hoàn ngay tại cửa hàng.</span>
                </div>
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">2.</span>
                  <span>Đối với giao dịch chuyển khoản: Trong vòng 03 ngày làm việc.</span>
                </div>
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">3.</span>
                  <span>Đối với giao dịch thẻ ATM: Trong vòng 7 - 10 ngày làm việc.</span>
                </div>
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">4.</span>
                  <span>Đối với giao dịch thẻ Visa/Master card/JCB: Trong vòng 7 - 15 ngày làm việc.</span>
                </div>
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">5.</span>
                  <span>Đối với giao dịch thanh toán qua cổng MPOS/ALEPAY/ONEPAY: Trong vòng 7 - 14 ngày làm việc.</span>
                </div>
                <div className="shipping-policy-refund-item">
                  <span className="shipping-policy-refund-number">6.</span>
                  <span>Đối với giao dịch thanh toán qua VNPAY/Kredivo/MoMo/ShopeePay/Zalopay/Fundiin: Trong vòng 3 - 8 ngày làm việc.</span>
                </div>
              </div>
              <div className="shipping-policy-info-box shipping-policy-info-yellow">
                <ul className="shipping-policy-list shipping-policy-list-nested">
                  <li>
                    <strong>Hiệu lực áp dụng:</strong> Kể từ ngày 12/12/2022 đến khi có thông báo thay thế mới.
                  </li>
                  <li>
                    <strong>Ngày làm việc</strong> được hiểu là các ngày trong tuần từ thứ 2 đến thứ 6, không bao gồm thứ 7, chủ nhật, ngày nghỉ Lễ, Tết theo quy định của pháp luật.
                  </li>
                  <li>
                    <strong className="shipping-policy-highlight">Lưu ý:</strong> Computer Store sẽ hoàn lại giá trị sản phẩm mà khách hàng đã thanh toán, phí vận chuyển (với các sản phẩm không được miễn phí vận chuyển), phụ phí, phí chuyển đổi trả góp và các khuyến mãi cộng thêm sẽ không được hoàn lại.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: HÀNG HÓA ĐẢM BẢO */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              5. HÀNG HÓA ĐẢM BẢO
            </h2>
            <div className="shipping-policy-section-content">
              <ul className="shipping-policy-list">
                <li>Sản phẩm được quấn bọt khí trước khi bỏ vào hộp carton và đóng gói trước camera ghi hình.</li>
                <li>Đơn hàng &gt;1tr được dán tem vỡ logo Computer Store ngoài hộp carton.</li>
                <li>Trường hợp khi giao đến hộp hàng không còn nguyên vẹn, ẩm ướt, móp, méo hoặc mất tem vỡ vui lòng từ chối nhận và liên hệ với cửa hàng xử lý đơn hàng của Quý khách.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: CHÍNH SÁCH ĐỔI MỚI */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              6. CHÍNH SÁCH ĐỔI MỚI
            </h2>
            <div className="shipping-policy-section-content">
              <ul className="shipping-policy-list">
                <li>Áp dụng chính sách đổi mới như khách mua tại cửa hàng.</li>
                <li>Thời gian đổi mới tính từ ngày khách hàng nhận máy và không quá 35 ngày kể từ ngày xuất bán.</li>
                <li>Khách hàng gửi máy đổi mới vui lòng đóng gói hàng hoá cẩn thận, và liên hệ với cửa hàng xử lý đơn hàng của Quý khách.</li>
              </ul>
              <div className="shipping-policy-info-box shipping-policy-info-yellow">
                <p className="shipping-policy-info-text-small">
                  (Với các thất thoát, hư hỏng sản phẩm trong quá trình vận chuyển sẽ không được hưởng chế độ đổi trả và bảo hành máy).
                </p>
              </div>
              <p>
                Computer Store hỗ trợ khách hàng chi phí vận chuyển với trường hợp sản phẩm phát sinh lỗi trong 15 ngày.
              </p>
              <div className="shipping-policy-method-box shipping-policy-method-orange">
                <p className="shipping-policy-method-title">
                  Chính sách đổi trả đối với công ty:
                </p>
                <p className="shipping-policy-method-text">
                  Trường hợp đổi trả các sản phẩm xuất hoá đơn công ty, Quý khách vui lòng cung cấp Biên bản trả hàng và thu hồi hoá đơn hoặc Biên bản giảm hoá đơn GTGT đầy đủ mộc tròn công ty và chữ ký người đại diện Pháp luật công ty. Trường hợp Quý khách không cung cấp đầy đủ chứng từ trên, Computer Store xin phép thu 8% hoặc 10% theo giá trị thuế suất sản phẩm đổi trả.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: YÊU CẦU THANH TOÁN TRƯỚC */}
          <section className="shipping-policy-section shipping-policy-section-border">
            <h2 className="shipping-policy-section-title">
              7. YÊU CẦU THANH TOÁN TRƯỚC VỚI CÁC TRƯỜNG HỢP
            </h2>
            <div className="shipping-policy-section-content">
              <div className="shipping-policy-method-box shipping-policy-method-red">
                <p className="shipping-policy-method-title">
                  Mua tặng hoặc không thanh toán tiền mặt.
                </p>
                <p className="shipping-policy-method-text">
                  Thanh toán trước 100% giá trị đơn hàng
                </p>
              </div>
              <div className="shipping-policy-method-box shipping-policy-method-blue">
                <p className="shipping-policy-method-title">
                  Chuyển khoản 100% hoặc phần số dư của 30 triệu nếu đơn hàng có giá trị trên 30 triệu
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="shipping-policy-contact">
            <h3 className="shipping-policy-contact-title">Cần hỗ trợ thêm?</h3>
            <p className="shipping-policy-contact-text">Liên hệ với chúng tôi qua hotline hoặc email</p>
            <div className="shipping-policy-contact-buttons">
              <a
                href="tel:18002097"
                className="shipping-policy-contact-btn"
              >
                📞 1800.2097
              </a>
              <a
                href="mailto:support@computerstore.com"
                className="shipping-policy-contact-btn"
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

export default ShippingPolicyPage;


