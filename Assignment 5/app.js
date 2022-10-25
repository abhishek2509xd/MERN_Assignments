let employee1 = {
    name: "Abhishek",
    phone: 7845632348,
    email: "abhishekkr2509@gmail.com",
    basic_salary: 60000,
  
    totalSalary: function () {
      let HRA = this.basic_salary * 0.15;
      let sa = this.basic_salary * 0.2;
      let tax;
      let totalSalary = this.basic_salary + HRA + sa;
      if (this.totalSalary> 40000 && this.totalSalary < 50000) {
        tax = this.totalSalary * 0.1;
      } else if (this.totalSalary > 50000 && this.totalSalary < 70000) {
        tax = this.totalSalary * 0.15;
      } else if (this.totalSalary > 70000 && this.totalSalary < 80000) {
        tax = this.totalSalary * 0.2;
      } else {
        tax = this.totalSalary * 0.3;
      }
      let netSalary = this.totalSalary - tax;
      return totalSalary;
    },
  };
  console.log(employee1.name);
  console.log(employee1.email);
  console.log(employee1.phone);
  console.log(employee1.totalSalary());