function showMessage(idErr, message) {
  document.getElementById(idErr).innerText = message;
}

function testSame(value, arr, idErr) {
  let index = arr.findIndex(function (item) {
    return item.account == value;
  });
  if (index != -1) {
    showMessage(idErr, "Nội dung không được trùng");
    return false;
  }
  showMessage(idErr, "");
  return true;
}

// Kiểm tra Điều kiện Input

function validateAccount() {
  let accountInput = document.getElementById("tknv");
  let accountError = document.getElementById("tbTKNV");
  let accountValue = accountInput.value.trim();

  console.log(accountInput);

  // Kiểm tra độ dài của tài khoản
  if (accountValue.length === 0) {
    accountError.textContent = "Tài khoản không được để trống";
    return false;
  } else if (accountValue.length < 4 || accountValue.length > 6) {
    accountError.textContent = "Tài khoản phải có độ dài từ 4 đến 6 ký tự";
    return false;
  } else {
    // Nếu tài khoản hợp lệ, xóa thông báo lỗi
    accountError.textContent = "";
    return true;
  }
}

function validateName() {
  let nameInput = document.getElementById("name");
  let nameError = document.getElementById("tbTen");
  let nameValue = nameInput.value.trim();
  console.log(nameInput);

  if (nameValue.length === 0) {
    nameError.textContent = "Tên không được để trống";
    return false;
  } else if (!/^[a-z A-Z]+$/.test(nameValue)) {
    nameError.textContent = "Tên phải là chữ";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("tbEmail");
  let emailValue = emailInput.value.trim();

  if (emailValue.length === 0) {
    emailError.textContent = "Email không được để trống";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.textContent = "Email phải đúng định dạng";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePass() {
  let passInput = document.getElementById("password");
  let passError = document.getElementById("tbMatKhau");
  let passValue = passInput.value.trim();

  if (passValue.length === 0) {
    passError.textContent = "Mật khẩu không được để trống";
    return false;
  } else if (passValue.length < 6 || passValue.length > 10) {
    passError.textContent = "Mật khẩu phải dài từ 6 đến 10 kí tự";
    return false;
  } else if (
    !/\d/.test(passValue) ||
    !/[A-Z]/.test(passValue) ||
    !/[!@#$%^&*]/.test(passValue)
  ) {
    passError.textContent =
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    console.log(passError.textContent);
    return false;
    
  } else {
    passError.textContent = "";
    return true;
  }
}

function validateDateWork() {
  let dateInput = document.getElementById("datepicker");
  let dateError = document.getElementById("tbNgay");
  let dateValue = dateInput.value.trim();

  if (dateValue.length === 0) {
    dateError.textContent = "Ngày làm không được để trống";
    return false;
  } else {
    dateError.textContent = "";
    return true;
  }
}

function validateBase() {
  let baseInput = document.getElementById("luongCB");
  let baseError = document.getElementById("tbLuongCB");
  let baseValue = baseInput.value.trim();

  if (baseValue.length === 0) {
    baseError.textContent = "Lương cơ bản không được để trống";
    return false;
  } else if (baseValue < 1000000 || baseValue > 20000000) {
    baseError.textContent = "Lương cơ bản phải từ 1 000 000 đến 20 000 000";
    return false;
  } else {
    baseError.textContent = "";
    return true;
  }
}

function validatePos() {
  let posInput = document.getElementById("chucvu");
  let posError = document.getElementById("tbChucVu");
  let posValue = posInput.value.trim();

  if (posValue == "Chọn chức vụ") {
    posError.textContent = "Phải chọn chức vụ hợp lệ";
    return false;
  } else {
    posError.textContent = "";
    return true;
  }
}

function validateHoursWork() {
  let hoursInput = document.getElementById("gioLam");
  let hoursError = document.getElementById("tbGiolam");
  let hoursValue = hoursInput.value.trim();

  if (hoursValue.length === 0) {
    hoursError.textContent = "Số giờ làm trong tháng không được bỏ trống";
    return false;
  } else if (hoursValue < 80 || hoursValue > 200) {
    hoursError.textContent = "Số giờ làm phải từ 80 đến 200";
    return false;
  } else {
    hoursError.textContent = "";
    return true;
  }
}
