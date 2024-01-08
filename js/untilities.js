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
      switch (this.pos) {
        case "Giám đốc":
          tongLuong = this.base * 3;
          break;
        case "Trưởng phòng":
          tongLuong = this.base * 2;
          break;
        default:
          tongLuong = this.base;
          break;
      }
      tongLuong = tongLuong.toLocaleString("en-US") + " đ";
      return tongLuong;
    }),
    (this.xepLoai = function () {
      if (hoursWork >= 192) {
        return "Xuất sắc";
      } else if (hoursWork >= 176) {
        return "Giỏi";
      } else if (hoursWork >= 160) {
        return "Khá";
      } else if (hoursWork < 160 && hoursWork !== 0) {
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
  // validateAccount();
  // validateName();
  // validateEmail();
  // validatePass();
  // validateDateWork();
  // validateBase();
  // validatePos();
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
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  // Kiểm tra xem có nhân viên để xoá không
  if (checkboxes.length === 0) {
    alert("Vui lòng chọn ít nhất một nhân viên để xoá.");
    // Đóng modal
    $("#deleteEmployeeModal").modal("hide");
    return;
  }

  checkboxes.forEach((checkbox) => {
    const row = checkbox.closest("tr");
    const employeeAccount = row.dataset.employeeid;

    // Xoá các hàng trong DOM
    row.remove();

    // XOÁ NHÂN VIÊN Ở LOACAL STORAGE
    // Lấy danh sách nhân viên từ LocalStorage
    let listEmployee = localStorage.getItem("DSNV")
      ? JSON.parse(localStorage.getItem("DSNV"))
      : [];

    // Lọc ra nhân viên cần xoá từ danh sách
    listEmployee = listEmployee.filter(
      (employee) => employee.account !== employeeAccount
    );

    // Lưu danh sách nhân viên đã được cập nhật vào LocalStorage
    localStorage.setItem("DSNV", JSON.stringify(listEmployee));

    // // Xoá nhân viên từ localStorage
    // if (localStorage.getItem("DSNV")) {
    //   localStorage.removeItem(employeeAccount);
    //   console.log(`Nhân viên có tài khoản ${employeeAccount} đã được xoá.`);
    // } else {
    //   console.log(`Không tìm thấy nhân viên có tài khoản ${employeeAccount}.`);
    // }
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
    confirm(
      "Bạn có chắc chắn muốn xoá nhân viên " +
        listEmployee[index].account +
        " có tên " +
        listEmployee[index].name +
        " không?"
    )
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

function findEmployeesByType() {
  // Hàm xử lý tìm kiếm
  let selectedType = document.getElementById("searchName").value;
  console.log(selectedType);

  // Kiểm tra giá trị selectedType
  if (!selectedType) {
    alert("Vui lòng chọn một loại nhân viên.");
    return;
  }

  let listTypeEmployee = [];
  for (let i = 0; i < listEmployee.length; i++) {
    if (listEmployee[i].xepLoai() === selectedType) {
      listTypeEmployee.push(listEmployee[i]);
    }

    console.log(listTypeEmployee);
  }

  updateFoundEmployee(listTypeEmployee);
  renderDSNV();
}

function updateFoundEmployee(listTypeEmployee) {
  let tableContent = "";

  if (listTypeEmployee.length > 0) {
    listTypeEmployee.forEach((employee) => {
      tableContent += `<tr>
                         <td>${employee.account}</td>
                         <td>${employee.name}</td>
                         <td>${employee.email}</td>
                         <td>${employee.dateWork}</td>
                         <td>${employee.pos}</td>
                         <td>${employee.tinhLuong()}</td>
                         <td>${employee.xepLoai()}</td>
                         </tr>`;
    });
  } else {
    tableContent =
      "<tr><td colspan='2'>Không có nhân viên nào phù hợp.</td></tr>";
  }

  document.getElementById("employeeTable").innerHTML =
    `<tr class="text-primary">
                    <th>Tài khoản</th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Ngày làm</th>
                    <th>Chức vụ</th>
                    <th>Tổng lương</th>
                    <th>Xếp loại</th>
                                         </tr>` + tableContent;
}
