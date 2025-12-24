import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DataBackupPolicyPage.css";

const DataBackupPolicyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="data-backup-policy-page">
      <div className="data-backup-policy-container">
        {/* Header */}
        <div className="data-backup-policy-header">
          <button
            onClick={() => navigate(-1)}
            className="data-backup-policy-back-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="data-backup-policy-back-icon"
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
          <h1 className="data-backup-policy-title">
            QUY ĐỊNH VỀ HỖ TRỢ SAO LƯU, CHUYỂN DỮ LIỆU CHO KHÁCH HÀNG
          </h1>
          <p className="data-backup-policy-subtitle">
            Hướng dẫn chi tiết về quy định hỗ trợ sao lưu và chuyển dữ liệu tại Computer Store
          </p>
        </div>

        {/* Content */}
        <div className="data-backup-policy-content">
          {/* Section I: Các trường hợp hướng dẫn */}
          <section className="data-backup-policy-section">
            <h2 className="data-backup-policy-section-title">
              I. CÁC TRƯỜNG HỢP HƯỚNG DẪN SAO LƯU DỮ LIỆU, CHUYỂN DỮ LIỆU
            </h2>
            <div className="data-backup-policy-section-content">
              <ul className="data-backup-policy-list">
                <li>
                  Khách hàng mua sản phẩm điện tử (Điện thoại, laptop, PC,...) tại Cửa hàng Computer Store có nhu cầu sao lưu dữ liệu, chuyển dữ liệu từ thiết bị cũ sang thiết bị mới mua.
                </li>
                <li>
                  Khách hàng mua các sản phẩm lưu trữ dữ liệu (Thẻ nhớ, USB, ổ cứng,...) tại Cửa hàng Computer Store có nhu cầu chuyển dữ liệu, sao lưu dữ liệu vào sản phẩm.
                </li>
              </ul>
            </div>
          </section>

          {/* Section II: Quy định thực hiện */}
          <section className="data-backup-policy-section data-backup-policy-section-border">
            <h2 className="data-backup-policy-section-title">
              II. QUY ĐỊNH THỰC HIỆN
            </h2>
            <div className="data-backup-policy-section-content">
              <p className="data-backup-policy-subheading">
                1. Khách hàng tự sao lưu, chuyển dữ liệu trên điện thoại, Laptop, PC, thiết bị ngoại vi (USB, thẻ nhớ, ổ cứng gắn ngoài).
              </p>

              <p className="data-backup-policy-subheading-smaller">
                1.1 Sao lưu dữ liệu
              </p>

              <div className="data-backup-policy-method-box data-backup-policy-method-blue">
                <p className="data-backup-policy-method-title">
                  a. iPhone
                </p>
                <p className="data-backup-policy-method-text">
                  Khách hàng tự sao lưu bằng các hình thức sau: Sao lưu dữ liệu lên iCloud, tạo bản sao lưu dữ liệu cá nhân trên các thiết bị Laptop, PC cá nhân của khách hàng bằng iTunes.
                </p>
              </div>

              <div className="data-backup-policy-method-box data-backup-policy-method-green">
                <p className="data-backup-policy-method-title">
                  b. Android, Laptop, PC, thiết bị ngoại vi (USB, thẻ nhớ, ổ cứng gắn ngoài)
                </p>
                <p className="data-backup-policy-method-text">
                  Khách hàng tự sao lưu dữ liệu vào các thiết bị lưu trữ cá nhân thuộc quyền sở hữu của khách hàng, không lưu trữ trên các thiết bị thuộc quyền sở hữu của Computer Store.
                </p>
              </div>

              <p className="data-backup-policy-subheading-smaller">
                1.2 Chuyển dữ liệu
              </p>

              <div className="data-backup-policy-method-box data-backup-policy-method-purple">
                <p className="data-backup-policy-method-title">
                  a. iPhone sang iPhone và Android sang Android
                </p>
                <p className="data-backup-policy-method-text">
                  Khách hàng tự chuyển dữ liệu trực tiếp từ máy sang máy bằng công cụ của hãng hỗ trợ. Trong trường hợp không thể chuyển trực tiếp từ máy sang máy thì khách hàng thông tin qua máy tính cá nhân của khách hàng hoặc đồng bộ iCloud.
                </p>
              </div>

              <div className="data-backup-policy-method-box data-backup-policy-method-orange">
                <p className="data-backup-policy-method-title">
                  b. Android sang iPhone và ngược lại
                </p>
                <p className="data-backup-policy-method-text">
                  Đối với việc chuyển dữ liệu từ Android sang iPhone và từ iPhone sang Android, khách hàng tự thực hiện chuyển dữ liệu.
                </p>
              </div>

              <p className="data-backup-policy-subheading">
                2. Sao lưu, chuyển dữ liệu trên laptop, PC, thiết bị ngoại vi (USB, thẻ nhớ, ổ cứng gắn ngoài)
              </p>

              <div className="data-backup-policy-info-box data-backup-policy-info-yellow">
                <p className="data-backup-policy-info-text">
                  Khách hàng tự sao lưu, chuyển dữ liệu. Nhân viên cửa hàng hỗ trợ tư vấn, giải thích những ảnh hưởng, rủi ro có thể phát sinh đối với dữ liệu như mất dữ liệu khi thực hiện cài đặt, sửa chữa, bảo hành và các dịch vụ hỗ trợ khác. Trong trường hợp khách hàng không thể tự sao lưu, chuyển dữ liệu và đồng ý cho nhân viên Computer Store thực hiện sao lưu, chuyển dữ liệu thì khách hàng phải ký tên vào Cam kết miễn trừ trách nhiệm (theo mẫu của Công ty) với mọi rủi ro xảy ra đối với dữ liệu chuyển. Sau khi khách hàng đã ký tên, nhân viên cửa hàng Computer Store được quyền thực hiện chuyển dữ liệu trên thiết bị khách hàng.
                </p>
              </div>

              <div className="data-backup-policy-method-box data-backup-policy-method-gray">
                <p className="data-backup-policy-method-title">
                  Đối với việc chuyển dữ liệu từ Android sang iPhone và từ iPhone sang Android:
                </p>
                <p className="data-backup-policy-method-text">
                  Trường hợp khách hàng không thể tự chuyển dữ liệu sau khi nhân viên cửa hàng đã hướng dẫn thì nhân viên cửa hàng chỉ hỗ trợ chuyển hình ảnh và danh bạ cho khách hàng, ưu tiên đồng bộ danh bạ vào Gmail khách hàng để chuyển qua thiết bị mới. Hình ảnh sẽ được sao lưu vào laptop, PC cá nhân của khách hàng để chuyển qua thiết bị mới.
                </p>
              </div>

              <div className="data-backup-policy-info-box data-backup-policy-info-red">
                <p className="data-backup-policy-info-title">
                  Trường hợp đặc biệt:
                </p>
                <p className="data-backup-policy-info-text">
                  Trong trường hợp dữ liệu của khách hàng phải chuyển vào ổ cứng lưu trữ dữ liệu của Computer Store thì nhân viên cửa hàng thông báo lại với khách hàng và chỉ được thực hiện chuyển dữ liệu vào ổ cứng lưu trữ dữ liệu của Computer Store sau khi khách hàng đồng ý và ký vào Cam kết miễn trừ trách nhiệm (theo mẫu của Công ty) với mọi rủi ro xảy ra đối với việc chuyển dữ liệu. Nhân viên cửa hàng xóa ngay lập tức dữ liệu của khách hàng được chuyển qua ổ cứng lưu trữ dữ liệu của Computer Store trước sự chứng kiến của khách hàng sau khi khách hàng xác nhận dữ liệu đã có đầy đủ trên thiết bị của khách hàng.
                </p>
              </div>
            </div>
          </section>

          {/* Section III: Cam kết miễn trừ trách nhiệm */}
          <section className="data-backup-policy-section data-backup-policy-section-border">
            <h2 className="data-backup-policy-section-title">
              III. CAM KẾT MIỄN TRỪ TRÁCH NHIỆM
            </h2>
            <div className="data-backup-policy-section-content">
              <p>
                Bằng việc yêu cầu Nhân viên cửa hàng hỗ trợ và giao thiết bị cho Nhân viên cửa hàng để thực hiện việc cài đặt, sửa chữa, bảo hành, sao lưu, chuyển dữ liệu và các dịch vụ hỗ trợ khác đối với thiết bị, Khách hàng xác nhận rằng:
              </p>

              <div className="data-backup-policy-info-box data-backup-policy-info-blue">
                <ul className="data-backup-policy-list data-backup-policy-list-nested">
                  <li>
                    Khách hàng đã được Computer Store thông báo tầm quan trọng của dữ liệu khách hàng, được hướng dẫn, tư vấn, giải thích những ảnh hưởng, rủi ro có thể phát sinh đối với dữ liệu như mất dữ liệu khi thực hiện cài đặt, sửa chữa, bảo hành, sao lưu, chuyển dữ liệu và các dịch vụ hỗ trợ khác đối với thiết bị.
                  </li>
                  <li>
                    Khách hàng đồng ý miễn trừ mọi trách nhiệm pháp lý; không khiếu nại và không yêu cầu bồi thường thiệt hại trong mọi trường hợp đối với Computer Store, các nhân viên, đối tác của Computer Store về những rủi ro có thể xảy ra đối với dữ liệu trong thiết bị trong quá trình sao lưu, chuyển dữ liệu, cài đặt, sửa chữa, bảo hành và thực hiện các dịch vụ hỗ trợ khác đối với thiết bị tại Computer Store.
                  </li>
                  <li>
                    Khách hàng hoàn toàn chịu mọi rủi ro phát sinh và không có bất kỳ khiếu nại, khiếu kiện liên quan.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="data-backup-policy-contact">
            <h3 className="data-backup-policy-contact-title">Cần hỗ trợ thêm?</h3>
            <p className="data-backup-policy-contact-text">Liên hệ với chúng tôi qua hotline hoặc email</p>
            <div className="data-backup-policy-contact-buttons">
              <a
                href="tel:18002097"
                className="data-backup-policy-contact-btn"
              >
                📞 1800.2097
              </a>
              <a
                href="mailto:cskh@computerstore.com"
                className="data-backup-policy-contact-btn"
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

export default DataBackupPolicyPage;

