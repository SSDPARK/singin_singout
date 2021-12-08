export default function validateInfo(values) {
  let errors = {};

  if (!values.nickname) {
    errors.nickname = '한글만 가능합니다.';
  } else if (!/^[가-힣]+$/.test(values.nickname)) {
    errors.nickname = '한글만 가능합니다.';
  }

  if (!values.email) {
    errors.email = '이메일이 필요합니다';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '이메일 주소가 잘못되었습니다.';
  }
  if (!values.password) {
    errors.password = '비밀번호가 필요합니다';
  } else if (values.password.length < 6) {
    errors.password = '비밀번호는 최소6자리입니다.';
  }

  if (!values.password2) {
    errors.password2 = '비밀번호가 필요합니다';
  } else if (values.password2 !== values.password) {
    errors.password2 = '비밀번호가 일치하지 않습니다';
  }
  return errors;
}
