import * as React from 'react';
import { createElement } from 'react';
import { FormItem, Input, IFormItemProps, FormGrid } from '@formily/next';
import { InputProps } from '@alifd/next/lib/input';
import { Field, useField, observer, createSchemaField, ISchema } from '@formily/react';
import { IFieldFactoryProps } from '@formily/core';

export type ProFormInputProps = InputProps &
  IFormItemProps &
  IFieldFactoryProps<any, any, any, any>;

// const SchemaField = createSchemaField({
//   components: {
//     Input,
//     FormItem,
//   },
// });

const ProFormInput: React.FC<ProFormInputProps> = (props) => {
  const { name = 'undefined', title = '表单项', gridSpan } = props;

  // const schema:ISchema={
  //   type: 'object',
  //   properties: {
  //     input: {
  //       type: 'string',
  //       title: '输入框',
  //       'x-decorator': 'FormItem',
  //       'x-decorator-props': { gridSpan },
  //       'x-component': 'Input',
  //       'x-component-props': {},
  //     },
  //   },
  // }

  console.log('file: pro-form-input.tsx ~ line 36 ~ props', props);

  // return <SchemaField schema={schema} />;
  return (
    <Field title={title} decorator={[FormItem, { gridSpan }]} name={name} component={[Input]} />
  );
};

export default ProFormInput;
