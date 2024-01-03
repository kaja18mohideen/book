
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './BookForm.css';

const BookForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        
        return errors;
      }}
    >
      <Form className="book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <Field type="text" id="author" name="author" />
          <ErrorMessage name="author" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <Field type="text" id="isbn" name="isbn" />
          <ErrorMessage name="isbn" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="publicationDate">Publication Date:</label>
          <Field type="text" id="publicationDate" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" className="error-message" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
