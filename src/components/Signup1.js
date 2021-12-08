import React from 'react';
import validate from '../components/validateinfo';
import useForm from '../components/useForm';
import '../Shared/exam.css';

const Signup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Nickname</label>
          <input
            className="form-input"
            type="nickname"
            name="nickname"
            placeholder="닉네임을 입력하세요"
            value={values.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <p>{errors.nickname}</p>}
        </div>
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
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="비밀번호재확인"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          회원가입
        </button>
        <span className="form-input-login">
          이미계정이 있나요? <a href="login">로그인</a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
