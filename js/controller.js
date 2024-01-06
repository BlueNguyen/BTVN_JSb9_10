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
                         <td> <button class="btn btn-danger mr-2" onclick= "deleteTrash('${
                           data.account
                         }')"><i class="fa fa-trash"></i></button> 
                         <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="editEmployee('${
                           data.account
                         }')"> <i class="fa fa-pen editButton"></i></button></td>
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
      switch (this.pos) {
        case "Giám đốc":
          tongLuong = (this.base * 3);
          break;
        case "Trưởng phòng":
          tongLuong = (this.base * 2);
          break;
        default:
          tongLuong = this.base;
          break;
      }
      tongLuong = tongLuong.toLocaleString("en-US") + " đ";
      return tongLuong;
    },
    xepLoai: function () {
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
    },
  };
  console.log("Object nv", employee);
  return employee;
}
