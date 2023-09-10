import { Formik } from 'formik';
import {
  FormContacts,
  FormLabel,
  FormField,
  FormError,
  FormButton,
} from './Form.styled';
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
        <FormContacts>
          <FormLabel>
            Name
            <br />
            <FormField type="text" name="name" placeholder="Name" />
            <br />
            <FormError name="name" />
          </FormLabel>
          <br />
          <FormLabel>
            Number
            <br />
            <FormField type="tel" name="number" placeholder="Number" />
            <br />
            <FormError name="number" />
          </FormLabel>
          <br />
          <FormButton type="submit">Add contact</FormButton>
        </FormContacts>
      </Formik>
      <ul></ul>
    </div>
  );
};
