
import React from 'react';
import BookForm from './components/BookForm';

function App() {
  const handleFormSubmit = (values) => {
    
    console.log('Form Submitted with values:', values);
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <BookForm onSubmit={handleFormSubmit} initialValues={{}} />
    </div>
  );
}

export default App;
