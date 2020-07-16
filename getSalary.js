
function getSalary() {
  const salaryResult = document.querySelector('.salary_result');
  let salary = document.getElementById("salary").value;
  
  salaryResult.innerText =`당신의 연봉은 '${salary}' 만 원 입니다.`
}



