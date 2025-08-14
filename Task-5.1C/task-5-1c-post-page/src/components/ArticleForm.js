import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const ArticleForm = () => {
  return (
    <Form>
      <Form.Input label="Title" placeholder="Enter your article title" />
      <Form.Field
        control={TextArea}
        label="Content"
        placeholder="Write your article here"
      />
      <Form.Button primary>Post Article</Form.Button>
    </Form>
  );
};

export default ArticleForm;
