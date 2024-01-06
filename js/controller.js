function renderDSNV() {
  let contentHTML = "";
  for (let i = 0; i < listEmployee.length; i++) {
    var data = listEmployee[i];
    let trString = `<tr>
                         <td><input type="checkbox" class="checkbox"></td>
                         <td>${data.account}</td>
                         <td>${data.name}</td>
                         <td>${data.email}</td>
                         <td>${data.dateWork}</td>
                         <td>${data.pos}</td>
                         <td>${data.tinhLuong()}</td>
                         <td>${data.xepLoai()}</td>
                         <td> <button class="btn btn-danger mr-2" onclick= "deleteTrash('${data.account}')"><i class="fa fa-trash"></i></button> 
                         <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="editEmployee('${data.account}')"> <i class="fa fa-pen editButton"></i></button></td>
                   </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function getDataFromForm() {
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
      let tongLuong = 0;
      if (employee.pos == "Giám đốc") {
        tongLuong = employee.base * 3;
      } else if (employee.pos == "Trưởng phòng") {
        tongLuong = employee.base * 2;
      } else {
        tongLuong = employee.base;
      }
      tongLuong = tongLuong.toLocaleString("en-US") + " đ";
      employee.tongLuong = tongLuong;
      return tongLuong;
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
  return employee;
}
