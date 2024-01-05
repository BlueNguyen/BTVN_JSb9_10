// Kiểm tra Điều kiện Input

function validateAccount(event) {
  let accountInput = document.getElementById("tknv");
  let accountError = document.getElementById("tbTKNV");
  let accountValue = accountInput.value.trim();

  console.log(accountInput);

  // Kiểm tra độ dài của tài khoản
  if (accountValue.length === 0) {
    accountError.textContent = "Tài khoản không được để trống";
    event.preventDefault();
  } else if (accountValue.length < 4 || accountValue.length > 6) {
    accountError.textContent = "Tài khoản phải có độ dài từ 4 đến 6 ký tự";
    event.preventDefault();
  } else {
    // Nếu tài khoản hợp lệ, xóa thông báo lỗi
    accountError.textContent = "";
  }
}

function validateName(event) {
  let nameInput = document.getElementById("name");
  let nameError = document.getElementById("tbTen");
  let nameValue = nameInput.value.trim();
  console.log(nameInput);

  if (nameValue.length === 0) {
    nameError.textContent = "Tên không được để trống";
    event.preventDefault();
  } else if (!/^[a-z A-Z]+$/.test(nameValue)) {
    nameError.textContent = "Tên phải là chữ";
    event.preventDefault();
  } else {
    nameError.textContent = "";
  }
}

function validateEmail(event) {
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("tbEmail");
  let emailValue = emailInput.value.trim();

  if (emailValue.length === 0) {
    emailError.textContent = "Email không được để trống";
    event.preventDefault();
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.textContent = "Email phải đúng định dạng";
    event.preventDefault();
  } else {
    emailError.textContent = "";
  }
}

function validatePass(event) {
  let passInput = document.getElementById("password");
  let passError = document.getElementById("tbMatKhau");
  let passValue = passInput.value.trim();

  if (passValue.length === 0) {
    passError.textContent = "Mật khẩu không được để trống";
    event.preventDefault();
  } else if (passValue.length < 6 || passValue.length > 10) {
    passError.textContent = "Mật khẩu phải dài từ 6 đến 10 kí tự";
    event.preventDefault();
  } else if (
    !/\d/.test(passValue) ||
    !/[A-Z]/.test(passValue) ||
    !/[!@#$%^&*]/.test(passValue)
  ) {
    passError.textContent =
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    console.log(passError.textContent);
    // event.preventDefault();
  } else {
    passError.textContent = "";
  }
}

function validateDateWork(event) {
  let dateInput = document.getElementById("datepicker");
  let dateError = document.getElementById("tbNgay");
  let dateValue = dateInput.value.trim();

  if (dateValue.length === 0) {
    dateError.textContent = "Ngày làm không được để trống";
    event.preventDefault();
  } else {
    dateError.textContent = "";
  }
}

function validateBase(event) {
  let baseInput = document.getElementById("luongCB");
  let baseError = document.getElementById("tbLuongCB");
  let baseValue = baseInput.value.trim();

  if (baseValue.length === 0) {
    baseError.textContent = "Lương cơ bản không được để trống";
    event.preventDefault();
  } else if (baseValue < 1000000 || baseValue > 20000000) {
    baseError.textContent = "Lương cơ bản phải từ 1 000 000 đến 20 000 000";
    event.preventDefault();
  } else {
    baseError.textContent = "";
  }
}

function validatePos(event) {
  let posInput = document.getElementById("chucvu");
  let posError = document.getElementById("tbChucVu");
  let posValue = posInput.value.trim();

  if ((posValue == "Chọn chức vụ")) {
    posError.textContent = "Phải chọn chức vụ hợp lệ";
    event.preventDefault();
  } else {
    posError.textContent = "";
  }
}

function validateHoursWork(event) {
  let hoursInput = document.getElementById("gioLam");
  let hoursError = document.getElementById("tbGiolam");
  let hoursValue = hoursInput.value.trim();

  if (hoursValue.length === 0) {
    hoursError.textContent = "Số giờ làm trong tháng không được bỏ trống";
    event.preventDefault();
  } else if (hoursValue < 80 || hoursValue > 200) {
    hoursError.textContent = "Số giờ làm phải từ 80 đến 200";
    event.preventDefault();
  } else {
    hoursError.textContent = "";
  }
}
