
// Lấy thẻ table
  let employeeTable = document.getElementById('tableDanhSach');

  // Gắn sự kiện click cho table
  employeeTable.addEventListener('click', function(event) {
    // Kiểm tra xem phần tử được click có class 'delete-icon' hay không
    if (event.target.classList.contains('deleButton')) {
      // Lấy giá trị từ cột ID (vị trí của hàng + 1)
      let targetRowId = event.target.closest('tr').rowIndex;
      // Lấy giá trị từ cột Tên
      let targetRowName = event.target.closest('tr').cells[1].innerText;

      // Hiển thị thông báo xác nhận
      if (confirm("Bạn có chắc chắn muốn xoá nhân viên " + targetRowName + " không?")) {
        // Xoá hàng tương ứng
        event.target.closest("tr").remove(targetRowId);
      }
    }
  });

  

// // Lấy danh sách nhân viên từ localStorage khi trang web được load lại
// window.addEventListener("load", function () {
//   const storedEmployeeList = localStorage.getItem("employeeList");

//   if (storedEmployeeList) {
//     listEmployee = JSON.parse(storedEmployeeList);
//     renderDSNV();
//   }
// });

// function saveToLocalStorage() {
//   // Lưu danh sách nhân viên vào localStorage
//   localStorage.setItem("employeeList", JSON.stringify(listEmployee));
// }



// // Hàm lưu thông tin đã sửa
// function saveEmployeeEdit(employee) {
//   // Kiểm tra xem có nhân viên được sửa hay không
//   if (employee) {
//     // Cập nhật thông tin của nhân viên đang được sửa
//     employee.name = editNameInput.value;
//     employee.age = editAgeInput.value;

//     // Cập nhật danh sách nhân viên trên trang web
//     updateEmployeeList();

//     // Đóng popup
//     closeEditPopup();
//   }
// }


