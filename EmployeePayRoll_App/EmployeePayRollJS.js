class EmployeePayrollData {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "NAME is Incorrect";
    }
    get profileImage() {
        return this._profileImage;
    }
    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;                   
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
          this._startDate = startDate;
        }
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
        }
        employeePayrollData(){
        window.addEventListener('DOMContentLoaded', (event) => {
            const name = document.querySelector('#name');
            const nameError = document.querySelector('.text-error');
            name.addEventListener('input', function () {
              if (name.value.length == 0) {
                nameError.textContent = "";
                return;
              }
              try {
                (new EmployeePayrollData()).name = name.value;
                nameError.textContent = "";
              }
              catch (e) {
                nameError.textContent = e;
              }
            });
          
            const salary = document.querySelector('#salary');
            const output = document.querySelector('.salary-output');
            output.textContent = salary.value;
            salary.addEventListener('input', function () {
              output.textContent = salary.value;
            });

            var date = document.getElementById("day"),
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    const dateError = document.querySelector(".date-error");
    date.addEventListener("change", checkDate);
    month.addEventListener("change", checkDate);
    year.addEventListener("change", checkDate);
  
    function checkDate() {
      let startDate = Date.parse(
        year.value + "-" + month.value + "-" + date.value
      );
      try {
        new EmployeePayrollData().startDate = startDate;
        dateError.textContent = "";
      } catch (e) {
        dateError.textContent = e;
      }
    }
  });

  const save = () => {
    try {
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
    }
    catch (e) {
      return;
    }
  
  const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
      employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
      setTextValue('text-error', e);
      throw e;
    }
    employeePayrollData.profileImage = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.notes = getInputValueById("#notes");
  
    let date = getInputValueById("#year") + "-" + getInputValueById("#month") + "-" + getInputValueById("#day");
    employeePayrollData.startDate = new Date(Date.parse(date));
  
    alert(employeePayrollData.toString());
    return employeePayrollData;
  }
  const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach((item) => {
      if (item.checked) selItems.push(item.value);
    });
    return selItems;
  };
  
  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  };
  
  const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
  };

  function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
  }
  const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setTextValue('.salary-output', 400000);
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2021');
    setValue('#notes', '');
  }
  
  const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
  }
  const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
  }
  
  const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
  }
  const save = () => {
    try {
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
    }
    catch (e) {
      return;
    }
  }
  function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
  }
  
  

}        
}
}
