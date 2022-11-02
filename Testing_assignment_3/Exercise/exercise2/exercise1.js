// khởi tạo các giá trị
function Department(deparmentId, departmentName){
    this.departmentId = deparmentId;
    this.departmentName = deparmentId;
}


function Positon(positionID, positonName){
    this.positonID = positionID;
    this.positonName = positonName;
}

function Account(accountId, email, userName, fullName, Department, Position, createDate){
    this.accountId = accountId;
    this.email = email;
    this.userName = userName,
    this.fullName = fullName;
    this.Department = Department;
    this.position = Position;
    this.createDate = createDate;
}

function Group(groupId, groupName, creatorId, createDate){
    this.groupId = groupId;
    this.groupName= groupName;
    this.creatorId = creatorId;
    this.createDate = createDate;
}


function GroupAccount(Group, Account, joinDate){
    this.Group = Group;
    this.Account = Account;
    this.joinDate = joinDate;
}


// khởi tạo giá trị department
var department1 = new Department(1, "sale");
var department2 = new Department(2, "marketing");
var department3 = new Department(3, "PA");

var position1 = new Positon(1, "dev 1");
var position2 = new Positon(2, "dev 2");
var position3 = new Positon(3, "dev 3");

// khởi tạo giá trị Account
var account1 = new Account(1, "tung1@gmail.com", 'tungNS1', "Nguyễn Sơn Tùng", 1, 1, '20/10/2002');
var account2 = new Account(2, "tung2@gmail.com", 'tungNS2', "Nguyễn Sơn Tùng 2", 2, 2, '20/10/2002');
var account3 = new Account(3, "tung3@gmail.com", 'tungNS3', "Nguyễn Sơn Tùng 3", 3, 3, '20/10/2002');


// khởi tạo giá trị group
var group = new Group(1, 'group1', 1, '02/12/2002');
var group = new Group(2, 'group2', 2, '02/12/2002');
var group1 = new Group(3, 'group3', 3, '02/12/2002');


// khởi tạo giá trị groupAccount

var ga1 = new GroupAccount(1, 1, '02/12/2002');
var ga2 = new GroupAccount(2, 2, '02/12/2002');
var ga3 = new GroupAccount(3, 3, '02/12/2002');



// question1

function checkDepartment(account1){
    if(account1.Department == null && account1.Department == 'undefined'){
        alert('Account chưa có phòng ban!')
    }
    else{
        alert('Phòng ban của Account này là: ' + account1.Department)
    }
}


// question 2

