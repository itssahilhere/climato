import React from 'react';

const LoginForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label htmlFor="custom-css-outlined-input" className="mb-2 text-gray-700">Custom CSS</label>
        <input
          type="text"
          id="custom-css-outlined-input"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="validation-outlined-input" className="mb-2 text-gray-700">CSS validation style</label>
        <input
          type="text"
          id="validation-outlined-input"
          required
          defaultValue="Success"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default LoginForm;
