
function DOMid(id) {
  let element = document.getElementById(id);
  return element;
}

let listEmployee = [];
function renderDSNV() {
  let contentHTML = "";
  for (let i = 0; i < listEmployee.length; i++) {
    let data = listEmployee[i];
    let trString = `<tr>
                         <td><input type="checkbox" class="checkbox"></td>
                         <td>${data.account}</td>
                         <td>${data.name}</td>
                         <td>${data.email}</td>
                         <td>${data.dateWork}</td>
                         <td>${data.pos}</td>
                         <td>${data.tinhLuong()}</td>
                         <td>${data.xepLoai()}</td>
                         <td> <a ><i class="fa fa-trash deleButton mr-2"></i></a> 
                         <a onclick="editEmployee('${
                           data.account
                         }')"> <i class="fa fa-pen updateButton"></i></a></td>
                   </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function addEmployee() {
  DOMid();

  let account = DOMid("tknv").value;
  let name = DOMid("name").value;
  let email = DOMid("email").value;
  let pass = DOMid("password").value;
  let dateWork = DOMid("datepicker").value;
  let base = +DOMid("luongCB").value;
  let pos = DOMid("chucvu").value;
  let hoursWork = +DOMid("gioLam").value;

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
    tinhLuong: function () {
      if (pos == "Giám đốc") {
        return base * 3;
      } else if (pos == "Trưởng phòng") {
        return base * 2;
      } else {
        return base;
      }
    },
    xepLoai: function () {
      if (hoursWork >= 192) {
        return "Xuất sắc";
      } else if (hoursWork >= 176) {
        return "Giỏi";
      } else if (hoursWork >= 160) {
        return "Khá";
      } else {
        return "Trung Bình";
      }
    },
  };
  console.log("Object nv", employee);

  listEmployee.push(employee);
  console.log("Dsnv", listEmployee);

  // render lại layout sau khi thêm thành công
  renderDSNV();

  // Lưu lại danh sách nhân viên vào localStorage
  saveToLocalStorage();
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

  // Lưu lại danh sách nhân viên vào localStorage
  saveToLocalStorage();
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

// *************Search Employee******************

function findEmployeesByLevel() {
  let searchLevel = document.getElementById("searchName").value;
  let result = [];
  for (let i = 0; i < listEmployee.length; i++) {
    if (listEmployee[i].xepLoai === searchLevel) {
      result.push(listEmployee[i]);
    }
  }
  return result;
}


