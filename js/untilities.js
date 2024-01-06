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
    this.tinhLuong = function () {
      switch (this.pos) {
    case "Giám đốc":
      tongLuong = (this.base * 3).toLocaleString("en-US") + " đ";
      break;
    case "Trưởng phòng":
      tongLuong = (this.base * 2).toLocaleString("en-US") + " đ";
      break;
    default:
      tongLuong = this.base.toLocaleString("en-US") + " đ";;
      break;
  }
return tongLuong;
},
    (this.xepLoai = function () {
      if (hoursWork >= 192) {
        return "Xuất sắc";
      } else if (hoursWork >= 176) {
        return "Giỏi";
      } else if (hoursWork >= 160) {
        return "Khá";
      } else if (hoursWork < 160 && hoursWork!==0) {
        return "Trung Bình";
      } else {
        return "";
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
  // validateName();
  // validateEmail();
  // validatePass();
  // validateDateWork();
  // validateBase();
  validatePos();
  // validateHoursWork();

  // giữ data khi user load trang
  let dataJson = JSON.stringify(listEmployee);
  localStorage.setItem("DSNV", dataJson);

  // render lại layout sau khi thêm thành công
  renderDSNV();

  // document.getElementById("tknv").value = "";
}

// *************DELETE***************
function deleteSelected() {
  // Lấy danh sách tất cả các checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // Kiểm tra xem có nhân viên để xoá không
  if (checkboxes.length === 0) {
    alert("Vui lòng chọn ít nhất một nhân viên để xoá.");
    // Đóng modal
    $("#deleteEmployeeModal").modal("hide");
    return;
  }

  // Tạo một mảng chứa các nhân viên cần xoá
  checkboxes.forEach((checkbox) => {
    const row = checkbox.parentNode.parentNode; // sử dụng parentNode thay cho closest("tr")
    const employeeAccount = row.dataset.employeeId;
    // Xoá các hàng trong DOM
    row.remove();

    // Xoá nhân viên từ localStorage
    const storedEmployees = JSON.parse(localStorage.getItem("DSNV")) || [];

    // Lọc ra những nhân viên có tài khoản khác với tài khoản cần xoá
    const updatedEmployees = storedEmployees.filter(employee => employee.id !== employee.account);

    // Cập nhật dữ liệu trong localStorage
    localStorage.setItem("DSNV", JSON.stringify(updatedEmployees));

    console.log(updatedEmployees.length !== storedEmployees.length
      ? `Nhân viên có tài khoản ${employee.account} đã được xoá.`
      : `Không tìm thấy nhân viên có tài khoản ${employee.account}.`);
  });

  // Đóng modal sau khi xoá
  $("#deleteEmployeeModal").modal("hide");

}
function cancelDele() {
  // Đặt giá trị checked của các checkbox về false
  $('input[type="checkbox"]').prop("checked", false);
}

function deleteTrash(id) {
  let index;
  // splice( vị trí xoá, số phần tử xoá)
  // từ id tìm ra index
  for (let i = 0; i < listEmployee.length; i++) {
    if (listEmployee[i].account == id) {
      index = i;
    }
  }
  console.log("index", index);

  // Hiển thị thông báo xác nhận
  if (
    confirm("Bạn có chắc chắn muốn xoá nhân viên " + listEmployee[index].account + " có tên "+ listEmployee[index].name + " không?")
  ) {
    // Xoá hàng tương ứng
    listEmployee.splice(index, 1);
    // giữ data khi user load trang
    let dataJson = JSON.stringify(listEmployee);
    localStorage.setItem("DSNV", dataJson);
  }
  
  // render lại layout sau khi xoá thành công
  renderDSNV();
}
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

// function findEmployeesByLevel() {
//   // Hàm xử lý tìm kiếm
//   var selectedType = document.getElementById("searchName").value;
  
//   // Lưu trạng thái tìm kiếm vào Local Storage
//   localStorage.setItem("selectedType", selectedType);
//   localStorage.setItem("selectedRating", selectedRating);
// }