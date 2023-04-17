import React from 'react';
import Layout from '@src/components/Layout.js';
import Auth from '@src/components/Auth/index.jsx';

const SignUp = () => {
  return (
    <div>
      <div>
        {' '}
        <div>
          <Layout styles='flex flex-col items-center'>
            <Auth page='sign-in' />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
