import Submit from '../components/Submit';
import './Input.css';

const Input = ()=> {
  return (
  <>
  <div className='form-box'>
    <form role='form'>
      <h2 role='heading'>Enter numbers</h2>
      <input className='input-box' type='text' placeholder='Enter Numbers'></input>
      </form>
      <Submit />
  </div>
  </>
  );
}

export default Input;