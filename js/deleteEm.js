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
}

// Hàm ẩn modal xác nhận xoá
function cancelDele() {
  // Đặt giá trị checked của các checkbox về false
  $('input[type="checkbox"]').prop("checked", false);

  // Đóng modal
  $("#deleteEmployeeModal").modal("hide");
}

// // Hiển thị modal popup xác nhận xoá Dữ liệu
// function showConfirmation() {
//   const modal = document.getElementById("deleteEmployeeModal");
//   modal.style.display = "block";
// }

