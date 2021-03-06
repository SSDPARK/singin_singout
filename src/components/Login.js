import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import { getCookie, setCookie, deleteCookie } from '../Shared/cookies';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const ExamSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const dispatch = useDispatch();
  console.log(getCookie('user_id'));

  const login = () => {
    console.log(values.email, values.password);
    dispatch(userActions.loginDB(values.email, values.password));
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button onClick={login} className="form-input-btn" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default ExamSignup;
