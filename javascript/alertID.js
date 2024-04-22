function myFunction() {
  const [elementID, _] = document.getElementsByClassName('login_form_inputs');
  const id = elementID.value;
  const text = id ? id : '아이디를 입력하세요!';

  alert(text);
}
