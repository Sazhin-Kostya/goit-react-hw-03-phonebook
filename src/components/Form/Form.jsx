import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .matches(/^[A-Za-z\s]+$/, 'Bad name format')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Bad number format'
    )
    .required('Required'),
});

export const ContactForm = ({ newContact }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    newContact(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" />
          </label>
          <br />
          <label>
            Number
            <Field type="tel" name="number" placeholder="Number" />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
      <ul></ul>
    </div>
  );
};
