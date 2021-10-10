export function passwordValidator(password) {
    if (password.length < 6 || password.length > 10) return 'Mật khẩu từ 6 đến 10 ký tự!'
    return ''
  }