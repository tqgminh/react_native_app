export function phoneValidator(phone) {
    if (phone.length<10 || phone.length>10 || phone.charAt(0)!='0') return "Số điện thoại không đúng đinh dạng!";
    return ''
  }
  