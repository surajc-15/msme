var student = function (name, age) {
  this.name = name;
  this.age = age;
  this.mobile = 97239342;
  this.address = "Patna";
  this.status = "Active";
};

student.prototype = {
  sakary: 56000,
  getAdd: function () {
    console.log("Hello Prototype");
    return "suraj";
  },
};

var std = new student("mahesh", 30);
console.log(std);
std.getAdd();
console.log(std.getAdd());
console.log(std);
