$(document).ready(function () {
  // Lắng nghe sự kiện click trên nút có class "deleButton"
  $(".deleButton").on("click", function () {
    // Mở modal xác nhận khi nút được click
    $("#confirmModal").modal("show");

    // Lấy giá trị của hàng (dòng) chứa nút được click
    var rowToDelete = $(this).closest("tr");

    // Lắng nghe sự kiện click trên nút xác nhận xoá
    $("#confirmDelete").on("click", function () {
      // Đóng modal xác nhận
      $("#confirmModal").modal("hide");

      // Xoá hàng (dòng) chứa nút được click
      rowToDelete.remove();
    });
  });
});
