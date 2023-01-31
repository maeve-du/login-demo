import '../css/style.scss';

const password = document.getElementById("password");

const passwordToggle = document.querySelector('.password_icon');

passwordToggle.addEventListener('click', () => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    passwordToggle.classList.remove('show');
    passwordToggle.classList.add('show');
  } else {
    password.setAttribute('type', 'password');
    passwordToggle.classList.remove('show');
  }
});


password.addEventListener('keyup', () => {
  console.log(password.value);
  checkPassword(password.value);
});
function checkPassword(info) {

  const passwordMsg = document.getElementById('password_msg');
  passwordMsg.textContent = '需要';
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  // const special = new RegExp('(?=.*[!@#\s%^&\*])');
  // const length = new RegExp('(?.={8, })');

  // const email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  let errorFlag = false;

  if (!lower.test(info)) {
    passwordMsg.textContent += ' 小写 ';
    errorFlag = true;
  }

  if (!upper.test(info)) {
    passwordMsg.textContent += ' 大写 ';
    errorFlag = true;
  }

  if (!number.test(info)) {
    passwordMsg.textContent += ' 数字 ';
    errorFlag = true;
  }

  // if (!special.test(info)) {
  //   passwordMsg.textContent += ' 特殊 ';
  //   errorFlag = true;
  // }

  // if (!length.test(info)) {
  //   passwordMsg.textContent += ' 长度大于8 ';
  //   errorFlag = true;
  // }

  const passwordGroup = document.getElementById('password_group');
  if (errorFlag) {
    passwordGroup.classList.remove('success');
    passwordGroup.classList.add('error');
  } else {
    passwordGroup.classList.remove('error');
    passwordGroup.classList.add('success');
  }
}
