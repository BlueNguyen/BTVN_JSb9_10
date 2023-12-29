function addEmployee() {
  function DOMid(id) {
    let element = document.getElementById(id);
    return element;
  }
  DOMid();

  let account = DOMid("tknv").value;
  let name = DOMid("name").value;
  let email = DOMid("email").value;
  let pass = DOMid("password").value;
  let dateWork = DOMid("datepicker").value;
  let base = +DOMid("luongCB").value;
  let pos = DOMid("chucvu").value;
  let hoursWork = +DOMid("gioLam").value;
  //   console.log({ account, name, email, pass, dateWork, base, pos, hoursWork });

  // Kiểm tra Điều kiện
  validateAccount();
  validateName();
  validateEmail();
  validatePass();
  validateDateWork();
  validateBase();
  validatePos();
  validateHoursWork();


  // Tạo object employee
  let employee = {
    account: account,
    name: name,
    email: email,
    pass: pass,
    dateWork: dateWork,
    base: base,
    pos: pos,
    hoursWork: hoursWork,
  };
  console.log(employee);

  // Tính lương tìm giá trị Tổng lương
  function tinhLuong() {
    let tongLuong = 0;
    if (employee.pos == "Giám đốc") {
      tongLuong = employee.base * 3;
    } else if (employee.pos == "Trưởng phòng") {
      tongLuong = employee.base * 2;
    } else {
      tongLuong = employee.base;
    }
    employee.tongLuong = tongLuong.toLocaleString("en-US") + " đ";
  }
  tinhLuong();

  // Xếp loại nhân viên
  function xepLoai() {
    let loai = "";
    if (employee.hoursWork >= 192) {
      loai = "Xuất sắc";
    } else if (employee.hoursWork >= 176) {
      loai = "Giỏi";
    } else if (employee.hoursWork >= 160) {
      loai = "Khá";
    } else {
      loai = "Trung Bình";
    }
    employee.xepLoai = loai;
  }
  xepLoai();


  function addEmployeeToTable(employee) {
    // Tạo một hàng mới cho nhân viên
    const newRow = document.createElement("tr");

    //   Tạo cột Tài khoản và thêm vào hàng
    const account = document.createElement("td");
    account.textContent = employee.account;
    newRow.appendChild(account);

    // Tạo cột Họ tên và thêm vào hàng
    const name = document.createElement("td");
    name.textContent = employee.name;
    newRow.appendChild(name);

    // Tạo cột email và thêm vào hàng
    const email = document.createElement("td");
    email.textContent = employee.email;
    newRow.appendChild(email);

    // Tạo cột ngày làm và thêm vào hàng
    const dateWork = document.createElement("td");
    dateWork.textContent = employee.dateWork;
    newRow.appendChild(dateWork);

    // Tạo cột Chức vụ và thêm vào hàng
    const pos = document.createElement("td");
    pos.textContent = employee.pos;
    newRow.appendChild(pos);

    // Tạo cột Tổng lương và thêm vào hàng
    const tongLuong = document.createElement("td");
    tongLuong.textContent = employee.tongLuong;
    newRow.appendChild(tongLuong);

    //   Tạo cột Xếp loại và thêm vào hàng
    const xepLoai = document.createElement("td");
    xepLoai.textContent = employee.xepLoai;
    newRow.appendChild(xepLoai);

    // Thêm hàng vào tbody
    const tbody = document.getElementById("tableDanhSach");
    tbody.appendChild(newRow);
  }
  addEmployeeToTable(employee);
}
