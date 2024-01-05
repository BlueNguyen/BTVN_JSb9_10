function DOMid(id) {
  let element = document.getElementById(id);
  return element;
}

let listEmployee = [];
// LẤY DATA TỪ LOCALSTORATE
var dataJson = localStorage.getItem("DSNV");
let arrayNV = JSON.parse(dataJson);
// tạo class object Nhân viên
function NhanVien(account, name, email, pass, dateWork, base, pos, hoursWork) {
  (this.account = account),
    (this.name = name),
    (this.email = email),
    (this.pass = pass),
    (this.dateWork = dateWork),
    (this.base = base),
    (this.pos = pos),
    (this.hoursWork = hoursWork),
    (this.tinhLuong = function () {
      if (pos == "Giám đốc") {
        return base * 3;
      } else if (pos == "Trưởng phòng") {
        return base * 2;
      } else {
        return base;
      }
    }),
    (this.xepLoai = function () {
      if (hoursWork >= 192) {
        return "Xuất sắc";
      } else if (hoursWork >= 176) {
        return "Giỏi";
      } else if (hoursWork >= 160) {
        return "Khá";
      } else {
        return "Trung Bình";
      }
    });
}
// Duyệt mảng => convert object => object từ class
for (let i = 0; i < arrayNV.length; i++) {
  var data = arrayNV[i];
  var employee = new NhanVien(
    arrayNV[i].account,
    arrayNV[i].name,
    arrayNV[i].email,
    arrayNV[i].pass,
    arrayNV[i].dateWork,
    arrayNV[i].base,
    arrayNV[i].pos,
    arrayNV[i].hoursWork
  );
  listEmployee.push(employee);
}
renderDSNV();

function addEmployee() {
  let employee = getDataFromForm();
  listEmployee.push(employee);
  console.log("Dsnv", listEmployee);

  // Kiểm tra Điều kiện
  validateAccount();
  validateName();
  validateEmail();
  validatePass();
  validateDateWork();
  validateBase();
  validatePos();
  validateHoursWork();

  // giữ data khi user load trang
  let dataJson = JSON.stringify(listEmployee);
  localStorage.setItem("DSNV", dataJson);

  // render lại layout sau khi thêm thành công
  renderDSNV();

  document.getElementById("tknv").value = "";
}

// *************DELETE***************
function deleteSelected() {
  // Lấy danh sách tất cả các checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Tạo một mảng chứa các hàng cần xoá
  const rowsToDelete = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      // Đi lên phần tử cha (hàng) của checkbox và thêm vào mảng
      const row = checkbox.closest("tr");
      if (row) {
        rowsToDelete.push(row);
        console.log("rowToDelete", rowsToDelete);
      }
    }
  });

  // Xoá các hàng trong mảng
  rowsToDelete.forEach((row) => {
    row.remove();
  });

  // Đóng modal sau khi xoá
  $("#deleteEmployeeModal").modal("hide");

  // giữ data khi user load trang
  let dataJson = JSON.stringify(listEmployee);
  localStorage.setItem("DSNV", dataJson);
}

function cancelDele() {
  // Đặt giá trị checked của các checkbox về false
  $('input[type="checkbox"]').prop("checked", false);
}

// function deleteTrash(id) {
//   let index;
//   // splice( vị trí xoá, số phần tử xoá)
//   // từ id tìm ra index
//   for (let i = 0; i < listEmployee.length; i++) {
//     if (listEmployee[i].account == id) {
//       index = i;
//     }
//   }
//   console.log("index", index);
//   listEmployee.splice(index, 1);
//   // render lại layout sau khi xoá thành công
//   renderDSNV();
// }
// ************Edit And Update Employee******************
function editEmployee(id) {
  let index;
  for (let i = 0; i < listEmployee.length; i++) {
    if (listEmployee[i].account == id) {
      index = i;
    }
  }
  // từ index lấy ra nhân viên được click
  let employee = listEmployee[index];
  // show thông tin lên form
  document.getElementById("tknv").value = employee.account;
  document.getElementById("name").value = employee.name;
  document.getElementById("email").value = employee.email;
  document.getElementById("password").value = employee.pass;
  document.getElementById("datepicker").value = employee.dateWork;
  document.getElementById("luongCB").value = employee.base;
  document.getElementById("chucvu").value = employee.pos;
  document.getElementById("gioLam").value = employee.hoursWork;
}

function updateEmployee() {
  let employee = getDataFromForm();
  console.log(employee);
  let index;
  for (let i = 0; i < listEmployee.length; i++) {
    if (listEmployee[i].account == employee.account) {
      index = i;
    }
  }
  // cập nhật data tại vị trí index
  listEmployee[index] = employee;
  renderDSNV();

  // Đóng modal sau khi cập nhật
  $("#myModal").modal("hide");

  // giữ data khi user load trang
  let dataJson = JSON.stringify(listEmployee);
  localStorage.setItem("DSNV", dataJson);
}

// *************Search Employee******************

function findEmployeesByLevel() {
  // Hàm xử lý tìm kiếm
  var selectedType = document.getElementById("searchName").value;
  var selectedRating = document.getElementById("employeeRating").value; // Lấy giá trị xếp loại
  var customRating = document.getElementById("customRating").value.trim(); // Lấy giá trị xếp loại từ input

  var resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  var foundEmployees = false;

  for (var i = 0; i < employees.length; i++) {
    // Kiểm tra loại và xếp loại nhân viên của từng nhân viên
    if (
      (employees[i].type === selectedType &&
        employees[i].rating === selectedRating) ||
      (customRating &&
        employees[i].rating.toLowerCase().includes(customRating.toLowerCase()))
    ) {
      var employeeInfo = document.createElement("p");
      employeeInfo.textContent =
        "Tên: " +
        employees[i].name +
        ", Loại: " +
        employees[i].type +
        ", Xếp loại: " +
        employees[i].rating;
      resultContainer.appendChild(employeeInfo);
      foundEmployees = true;
    }
  }

  if (!foundEmployees) {
    resultContainer.innerHTML = "Không có nhân viên nào được tìm thấy.";
  }

  // Lưu trạng thái tìm kiếm vào Local Storage
  localStorage.setItem("selectedType", selectedType);
  localStorage.setItem("selectedRating", selectedRating);
}
