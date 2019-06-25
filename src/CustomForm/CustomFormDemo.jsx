import React from 'react';
import withCustomForm from './CustomFormHOC.jsx';

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    props.onChange(inputName, inputValue);
  }

  return (
    <div>
      {/* onSubmit and onChange events are triggered by the form */ }
      <form onSubmit={handleSubmit} onChange={handleChange} >
        <input name="name" type="text" /><br />
        <input name="email" type="text" /><br />
        <button type="submit"> Submit </button>
      </form>
    </div>

  )
}

const CustomFormDemo = (props) => {

  return (
    <div>
      <SignupWithCustomForm {...props} />
    </div>
  );
}

const SignupWithCustomForm = withCustomForm({ contact: { name: '', email: '' } })({ propName: 'contact', propListName: 'contactList' })(Form);

export default CustomFormDemo;
