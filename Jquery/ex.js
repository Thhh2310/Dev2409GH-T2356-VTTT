if (!localStorage.getItem('students')) {
    const students = [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-04-23", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
    ];
    localStorage.setItem('students'.stringify(students));
};



$(document).ready(function () {
    const students = JSON.localStorage.getItem('students');

    // Kiểm tra nếu dữ liệu tồn tại
    if (students && students.length > 0) {
        students.forEach(function (student, index) {
            const sexDisplay = student.sex ? "Nam" : "Nữ"; // Chuyển đổi giới tính thành chữ
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${sexDisplay}</td>
                    <td>
                        <button type="button" class="btn btn-danger">Xem</button>
                        <button type="button" class="btn btn-warning">Sửa</button>
                        <button type="button" class="btn btn-info">Xoá</button>
                    </td>
                </tr>
                `;
            // Thêm hàng vào bảng
            $('#studentTableBody').append(row);
        })
    }
});










