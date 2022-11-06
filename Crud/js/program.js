$(document).ready(function() {
    $(function() {
        $(".header").load("header.html");
        $(".body").load("home.html");
        $(".footer").load("footer.html");

    });


})



function clickHome() {
    $(".body").load("home.html")
}


function clickViewList() {
    $(".body").load("viewlist.html");
    buildTable();
}




//  khởi tạo 1 list
var employees = [];
var counter = 0;

function Employee(id, name, department, phone) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.phone = phone;
}

function getListEmployees() {
    // call api in sever
    $.get("https://62a4bcb047e6e4006397978a.mockapi.io/account", function(data, status) {

        employees = [];
        // error
        if (status == "error") {
            // TODO
            alert("Error when loading data");
            return;
        }
        // sucsses
        parseData(data);
        fillEmployeeTable();
    })



}

function parseData(data) {
    data.forEach(function(item) {
        employees.push(new Employee(item.id, item.name, item.department, item.phone));

    })
}

function fillEmployeeTable() {
    employees.forEach(function(item) {
        $('tbody').append(
            '<tr>' +
            '<td>' + item.name + '</td>' +
            '<td>' + item.department + '</td>' +
            '<td>' + item.phone + '</td>' +
            '<td>' +
            '<a class="edit" title="Edit" data-toggle="tooltip" onclick = "openUpdateModel(' + item.id + ')"><i class="material-icons">&#xE254;</i></a>' +
            '<a class="delete" title="Delete" data-toggle="tooltip" onclick = "openConfirmDeleteEmployee(' + item.id + ')"><i class="material-icons">&#xE872;</i></a>' +
            '</td>' +

            '</tr>')
    });
}

function buildTable() {
    $("tbody").empty();
    getListEmployees();

}

// thêm model
function openAddModal() {
    resetForm();
    openModal();
}

// reset form
function resetForm() {
    $('.modal-title').text('Add employee');
    var name = $("#id").val("");
    var name = $("#name").val("");
    var department = $("#department").val("");
    var phone = $("#phone").val("");

}
// hiện model
function openModal() {
    $('#myModal').modal('show');
}
// ẩn model
function hideModal() {
    $('#myModal').modal('hide');
}


function openUpdateModel(id) {
    // tìm index bằng findIndex
    var index = employees.findIndex(x => x.id == id);
    $('.modal-title').text('Update employee');


    var name = $("#id").val(employees[index].id);
    var name = $("#name").val(employees[index].name);
    var department = $("#department").val(employees[index].department);
    var phone = $("#phone").val(employees[index].phone);


    openModal();
}


function addEmployee() {

    // get data
    var name = $("#name").val();
    var department = $("#department").val();
    var phone = $("#phone").val();


    employees = {
        name: name,
        department: department,
        phone: phone
    }
    $.post("https://62a4bcb047e6e4006397978a.mockapi.io/account", employees,
        function(data, status) {
            // error
            if (status == "error") {
                alert("Eror!");
                return;
            }
            // sucsses
            hideModal();
            showSuccessAlert();
            buildTable();
        }
    )


}


function updateEmployee() {
    // get value
    var id = $("#id").val();
    var name = $("#name").val();
    var department = $("#department").val();
    var phone = $("#phone").val();


    employees = {
        name: name,
        department: department,
        phone: phone
    }
    $.ajax({
        url: 'https://62a4bcb047e6e4006397978a.mockapi.io/account/' + id,
        type: 'PUT',
        data: employees,
        success: function(result) {
            // error
            if (result == undefined || result == null) {
                alert("Error");
            }


            hideModal();
            showSuccessAlert();

            buildTable();
        }
    });

}


function save() {
    var id = $("#id").val();
    if (id == null || id == "") {
        addEmployee();
    } else {
        updateEmployee();
    }
}

function openConfirmDeleteEmployee(id) {

    //find index
    var index = employees.findIndex(x => x.id == id);

    var name = employees[index].name;

    var result = confirm("Want to delete " + name + "?");
    if (result) {
        deletedEmployee(id);
    }
}

function deletedEmployee(id) {
    $.ajax({
        url: 'https://62a4bcb047e6e4006397978a.mockapi.io/account/' + id,
        type: 'DELETE',
        success: function(result) {
            // error
            if (result == undefined || result == null) {
                alert("Error");
            }

            showSuccessAlert();
            buildTable();
        }
    });
}


function showSuccessAlert() {
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
        $("#success-alert").slideUp(500);
    });
}