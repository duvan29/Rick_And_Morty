export default function validate (values) {
    let errors = {};
  
    // Validate email
    if (!values.email) {
      errors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email es invalido';
    } else if (values.email.length > 35) {
      errors.email = 'Email must be 35 characters or less';
    }
    
    // Validate password
    if (!values.password) {
      errors.password = 'Password es requerida';
    } else if (values.password.length < 6 || values.password.length > 10) {
      errors.password = 'Password tiene que tener 6 a 10 characters';
    } else if (!/\d/.test(values.password)) {
      errors.password = 'Password debe tener al menos un numero';
    }
  
    return errors;
  }
