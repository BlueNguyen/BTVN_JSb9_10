// Kiểm tra Điều kiện Input

function validateAccount() {
  let accountInput = document.getElementById("tknv");
  let accountError = document.getElementById("tbTKNV");
  let accountValue = accountInput.value.trim();
  let accErr = "true";

  console.log(accountInput);

  // Kiểm tra độ dài của tài khoản
  if (accountValue.length === 0) {
    accountError.textContent = "Tài khoản không được để trống.";
    accErr = "false";
  } else if (accountValue.length < 4 || accountValue.length > 6) {
    accountError.textContent = "Tài khoản phải có độ dài từ 4 đến 6 ký tự.";
    accErr = "false";
  } else {
    // Nếu tài khoản hợp lệ, xóa thông báo lỗi
    accountError.textContent = "";
    accErr = "true";
  }
  console.log(accountError.textContent);
  console.log("accErr",accErr);
  return accErr;
}
