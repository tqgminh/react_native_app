export function nameValidator(name) {
    var expr = /^[^\d]*$/;
    if (!expr.test(name)) return "Tên không được chứa số!";
    expr = /^[a-zA-Z ]*$/;
    if (!expr.test(name)) return "Tên không được chứa ký tự đặc biệt!";
    return ''
}
