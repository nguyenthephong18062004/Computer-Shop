$("#login").click(async function (e) {
  e.preventDefault();
  try {
    const data = {
      email: $("#email").val(),
      password: $("#password").val(),
    };
    await $.ajax({
      url: "/api/v1/users/login",
      method: "post",
      data,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: (response) => {
        if (response.data && response.data.user && response.data.user.role == "admin") {
          showAlert("success", "Login successfully!");
          // Store token in localStorage as backup
          if (response.token) {
            localStorage.setItem("jwt", response.token);
          }
          window.setTimeout(() => {
            location.assign("/");
          }, 1500);
        } else {
          showAlert("error", "Tài khoản của bạn không có quyền truy cập!");
        }
      },
      error: (xhr, status, error) => {
        const errorMessage = xhr.responseJSON?.message || error || "Đăng nhập thất bại!";
        showAlert("error", errorMessage);
      }
    });
  } catch (error) {
    showAlert("error", error.message || "Có lỗi xảy ra khi đăng nhập!");
  }
});
$("#checkLogin").on("change", async function () {
  try {
    await $.ajax({
      url: "api/v1/users/googleLogin",
      method: "POST",
      data: { email: this.value },
      success: (data) => {
        location.assign("/");
      },
    });
  } catch (error) {
    showAlert("error", error.responseJSON.message);
  }
});
