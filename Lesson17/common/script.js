$(document).ready(function(){
    let isEditing=false;
    let editingIndex=null;

    if(!localStorage.getItem('student')){
        const itinialStudents = [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-04-23", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
        ];
        localStorage.setItem('student',JSON.stringify(itinialStudents));
    }
    function getStudents(){
        return JSON.parse(localStorage.getItem('students')) || [];
    }
    function saveStudents(students){
        localStorage.setItem('students',JSON.stringify(students));
    }
    function refreshTable(){
        const students = getStudents();
        $('#studentTable').html('');
        students.forEach((student, index)=>{
            $('#studentTable').append(`
                <tr>
                    <td>${index+1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                    <td>
                        <button class="btn btn-info action-btn viewBtn" data-index=${index}>Xem</button>
                        <button class="btn btn-warning action-btn editBtn" data-index=${index}>Sửa</button>
                        <button class="btn btn-danger action-btn deleteBtn" data-index=${index}>Xoá</button>
                    </td>
                </tr>
            `)
        })
    }
    $('#saveStudentForm').submit(function(e){
        e.preventDefaults();
        const students = getStudents();
        const student ={
            studentId: $('#studentID').val(),
            studentName: $('#studentname').val(),
            age: $('#studentAge').val(),
            sex: $('#studentGender').val(),
            birthDate: $('#studentBirthDate').val(),
            birthPlace: $('#studentBirthPlace').val(),
            add: $('#studentID').val(),
        };
    })
    if(isEditing){
        students[editingIndex] = student;
        isEditing=false;
        editingIndex=null;
    }else{
        students.push(students);
    }
    saveStudents(students);
    refreshTable();
    $('#studentForm').hide();
    $('#saveStudentForm')[0].reset();

    $('#addStudentBtn').click(function(){
        $('#studentForm').show();
        $('#formTitle').text('Thêm mới sinh viên');
        $('#saveStudentForm')[0].reset();
        isEditing=false;
    });

    //Show
    $(document).on('click','viewBtn',function(){
        const index = $(this).data('index');
        const students = getStudents();
        const student = students[index];

        $('#studentID').val(student.studentId);
        $('#studentName').val(student.studentName);
        $('#studentAge').val(student.age);
        $('#studentGender').val(student.sex ? 'true':'false');
        $('#studentBirthDate').val(student.birthDate);
        $('#studentBirthPlace').val(student.birthPlace);
        $('#studentAddress').val(student.address);
        $('#studentForm').show();
        
        $('#formTitle').text('Thông tin sinh viên');
    });

    //Edit Student
    $(document).on('click', '.editBtn', function(){
        editingIndex = $(this).data('index');
        const students = getStudents();
        const student = students[editingIndex];

        $('#studentID').val(student.studentId);
        $('#studentName').val(student.studentName);
        $('#studentAge').val(student.age);
        $('#studentGender').val(student.sex ? 'true':'false');
        $('#studentBirthDate').val(student.birthDate);
        $('#studentBirthPlace').val(student.birthPlace);
        $('#studentAddress').val(student.address);
        $('#studentForm').show();
        $('#formTitle').text('Sửa sinh viên');
        isEditing = true;
        
    })


    //Delete student
    $(document).on('click', '.deleteBtn', function(){
        const index = $(this).data('index');
        let students = getStudents();
        students.splice(index, 1);
        saveStudents(students);
        refreshTable();
    });

    //Search student
    $('#search').submit(function(e){
        e.preventDefaults();

        const searchTerm = $('#enterSearch').val().toLowerCase();
        const sortOption = $('#sortSelect').val();

        let students = getStudents();

        //Search: Filter students by name
        if (searchTerm){
            students = students.filter(student =>
                student.studentName.toLowerCase().includes(searchTerm)
            );
        }

        // Sort based on select option
        if (sortOption === 'nameAsc'){
            students.sort((a,b) => a.studentName.localeCompare(b.studentName));
        }else if(sortOption === 'nameDesc'){
            students.sort((a,b) => b.studentName.localeCompare(a.studentName));
        }else if(sortOption === 'ageAsc'){
            students.sort((a,b) => a.age - b.age);
        }else if(sortOption === 'ageDesc'){
            students.sort((a,b) => b.age - a.age);
        } 

        //refresh table with the filtered and sỏted students
        refreshTable(students);
    });

    //Intital
    refreshTable();

});
