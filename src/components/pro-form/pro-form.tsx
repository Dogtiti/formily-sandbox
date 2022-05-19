import * as React from 'react';
import { createElement } from 'react';
import { createForm } from '@formily/core';
import { Form, IFormLayoutProps, Input } from '@formily/next';

export type ProFormProps = IFormLayoutProps;

const ProForm: React.FC<ProFormProps> = (props) => {
  const { children, ...restProps } = props;
  console.log('Dogtiti ~ file: pro-form.tsx ~ line 9 ~ props', props);
  const { colon } = restProps;

  const form = React.useMemo(() => createForm(), []);

  return (
    <Form form={form} colon={colon}>
      {children}
    </Form>
  );
};

export default ProForm;
