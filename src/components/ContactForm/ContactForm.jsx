import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" type="text" required />
          </label>

          <label>
            Number
            <Field name="number" type="tel" required />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
