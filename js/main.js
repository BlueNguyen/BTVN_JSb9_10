$(document).ready(function () {
  // Lắng nghe sự kiện click trên nút có class "DeleButton"
  $(".DeleButton").on("click", function () {
    // Mở modal xác nhận khi nút được click
    $("#deleRow").modal("show");

    // Lấy giá trị của hàng (dòng) chứa nút được click
    var rowToDelete = $(this).closest("tr");

    // Lắng nghe sự kiện click trên nút xác nhận xoá
    $("#confirmDelete").on("click", function () {
      // Đóng modal xác nhận
      $("#deleRow").modal("hide");

      // Xoá hàng (dòng) chứa nút được click
      rowToDelete.remove();
    });
  });
});
