
// // Lấy thẻ table
//   let employeeTable = document.getElementById('tableDanhSach');

//   // Gắn sự kiện click cho table
//   employeeTable.addEventListener('click', function(event) {
//     // Kiểm tra xem phần tử được click có class 'delete-icon' hay không
//     if (event.target.classList.contains("deleButton")) {
//       // Lấy giá trị từ cột ID (vị trí của hàng + 1)
//       let targetRowId = event.target.closest("tr").rowIndex;
//       // Lấy giá trị từ cột Tên
//       let targetRowName = event.target.closest("tr").cells[1].innerText;

//       // Hiển thị thông báo xác nhận
//       if (
//         confirm(
//           "Bạn có chắc chắn muốn xoá nhân viên " + targetRowName + " không?"
//         )
//       ) {
//         // Xoá hàng tương ứng
//         event.target.closest("tr").remove(targetRowId);
//         // giữ data khi user load trang
//         let dataJson = JSON.stringify(listEmployee);
//         localStorage.setItem("DSNV", dataJson);
//       }
//     }
    
//   });








