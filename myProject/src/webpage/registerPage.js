import React from "react";
import PropTypes from "prop-types";

const RegisterPage = ({ user, onSubmit, onChange, errors = {} }) => {
  return (
    <div class="basic_page flex justify-center items-center">
      <form class="w-full max-w-lg form_theme" onSubmit={onSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-3">
            <label class="input_field_titles" for="grid-first-name">
              First Name
            </label>
            <input
              onChange={onChange}
              name="name"
              class="input_fields"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-3">
            <label class="input_field_titles" for="grid-last-name">
              Last Name
            </label>
            <input
              onChange={onChange}
              name="surname"
              class="input_fields"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="input_field_titles" for="grid-username">
              Username
            </label>
            <input
              onChange={onChange}
              name="username"
              class="block input_fields focus:border-gray-500"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="input_field_titles" for="grid-password">
              Password
            </label>
            <input
              onChange={onChange}
              name="password"
              class="block input_fields"
              type="password"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 ">
            <label class="input_field_titles" for="grid-email">
              Email
            </label>
            <input
              onChange={onChange}
              name="email"
              class="input_fields"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 ">
            <label class="input_field_titles" for="grid-role">
              Role
            </label>
            <div class="relative">
              <select onChange={onChange} name="role" class="input_fields">
                <option>Pick a role</option>
                <option>Admin</option>
                <option>Event Organizer</option>
                <option>User</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between px-3 mb-6 w-full">
            <a href="/" class="buttons">
              Cancel
            </a>
            <button type="submit" class="buttons">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

RegisterPage.propTypes = {
  user: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RegisterPage;
