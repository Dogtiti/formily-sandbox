import * as React from 'react';
import { createElement } from 'react';
import { createForm } from '@formily/core';
import { FormProvider, Field } from "@formily/react"
import { Form, FormGrid, IFormLayoutProps, Input } from '@formily/next';

import { default as ProFormGrid } from '../pro-form-grid';

export type ProFormProps = IFormLayoutProps;

const ProForm: React.FC<ProFormProps> = (props) => {
  const { children, maxColumns, minColumns, columnGap, ...restProps } = props;
  console.log('Dogtiti ~ file: pro-form.tsx ~ line 9 ~ props', props);
  const { colon } = restProps;

  const deps = [];
  if (children?.length) {
    deps.push(...children.map(input => input?.props?.gridSpan));
  }
  console.log('deps: ', deps);
  const form = React.useMemo(() => {
    console.log('---recreate form----');
    return createForm();
  }, [deps]);

  return (
    <FormProvider form={form} colon={colon}>
      <ProFormGrid maxColumns={maxColumns} minColumns={minColumns} columnGap={columnGap}>
        {children}
      </ProFormGrid>
    </FormProvider>
  );
};

export default ProForm;
