/**
 * B1: Bắt sự kiện khi người dùng click vào button Đăng ký hoặc người dùng enter input
 *   - a: lấy dom của cái button và dom của input, Tạo một function loginHandler
 *   - b: Bắt sự kiện khi click vào button or bắt sự kiện enter input
 *   - c: Gọi đến function loginHandler
 * B2: Lấy dữ liệu có trong input form
 *   - a: Lấy dom của từng input
 *   - b: Lấy tất cả giá trị trong những dom đó và lưu vào biến cụ thể
 * B3: Validate dữ liệu
 *   - a: Tạo function validateForm, validate từng data trong từng input trong function validateForm
 *   - b: Nếu input nào mà có dữ liệu bị lỗi -> hiển thị lỗi ra giao diện
 *   - c: Nếu dữ liệu đúng hết -> xác nhận với function loginHandler là dữ liệu đã hợp lệ -> tiếp tục xử lý
 * B4: Lưu dữ liệu vào localStorage
 * B5: Thông báo cho người dùng biết là đã đăng ký thành công hay thất bại
 * B6: Chuyển hướng người dùng đến trang login
 */

const $buttonSubmit = document.getElementById('btnRegister');
const $inputList    = document.querySelectorAll('.formInput');

$buttonSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  loginHandler();
});

$inputList.forEach(function($inputItem) {
  $inputItem.addEventListener('enter', function(event) {
    event.preventDefault();
    loginHandler();
  });
});

function loginHandler() {
  const $usernameDom        = document.querySelector('.usernameInput');
  const $emailDom           = document.querySelector('.emailInput');
  const $phoneDom           = document.querySelector('.phoneInput');
  const $passwordDom        = document.querySelector('.passwordInput');
  const $confirmPasswordDom = document.querySelector('.confirmPasswordInput');

  const formRegister = {
    username: $usernameDom.value,
    email: $emailDom.value,
    phone: $phoneDom.value,
    password: $passwordDom.value,
    confirmPassword: $confirmPasswordDom.value
  };

  if (validateForm(formRegister) === true) {
    console.log('data hop le');
  } else {
    console.log('data ko hop le');
  }
}

function validateForm(form) {
  const $usernameErrorDom = document.querySelector('.error-username');
  const $emailErrorDom = document.querySelector('.error-email');
  let formIsValid = false;

  /**
   * Check validate username input
   * - 1: username input đã nhập chưa
   * - 2: username input có hợp lệ không:
   *      . username viết liền không dấu
   *      . username ko chứa ký tự đặt biết [!@#$%^&*()-]
   */
  if(form.username.trim().length === 0) {
    // username chưa được nhập
    $usernameErrorDom.innerText = 'Vui lòng nhập username';
    $usernameErrorDom.style.display = 'block';
  } else {
    // Xử dụng regular expression => regex
    let regexUsername = /^[a-zA-Z0-9]+$/;
    if (regexUsername.test(form.username) == true) {
      $usernameErrorDom.innerText = '';
      $usernameErrorDom.style.display = 'none';
    } else {
      $usernameErrorDom.innerText = 'Username không hợp lệ';
      $usernameErrorDom.style.display = 'block';
    }
  }

  /**
   * Check validate email input
   * - 1: email input đã nhập chưa
   * - 2: email input có hợp lệ không:
   */
  if(form.email.trim().length === 0) {
    // email chưa được nhập
    $emailErrorDom.innerText = 'Vui lòng nhập email';
    $emailErrorDom.style.display = 'block';
  } else {
    // email đã được nhập
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(form.email) === true) {
      $emailErrorDom.innerText = '';
      $emailErrorDom.style.display = 'none';
    } else {
      $emailErrorDom.innerText = 'Email không hợp lệ';
      $emailErrorDom.style.display = 'block';
    }
  }

  /**
   * Check validate phone input
   * - 1: phone input đã nhập chưa
   * - 2: phone input có hợp lệ không:
   */

  /**
   * Check validate password input
   * - 1: password input đã nhập chưa
   * - 2: password phải có số ký tự lơn hơn hoặc bằng 10
   */

  /**
   * Check validate confirmPassword input
   * - 1: confirmPassword input đã nhập chưa
   * - 2: confirmPassword phải có số ký tự lơn hơn hoặc bằng 10
   * - 3: confirmPassword có giống với password khồng
   */

  return formIsValid;
}
