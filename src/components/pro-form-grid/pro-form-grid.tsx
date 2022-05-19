import * as React from 'react';
import { createElement } from 'react';
import { IFormGridProps, FormGrid } from '@formily/next';

export type ProFormGridProps = IFormGridProps;

const ProFormGrid: React.FC<ProFormGridProps> = (props) => {
  console.log('~ file: pro-form-grid.tsx ~ line 12 ~ ProFormFormLaylout ~ props', props);
  const { children, ...restProps } = props;
  const { maxColumns, minColumns, columnGap } = restProps;

  return (
    <FormGrid maxColumns={maxColumns} minColumns={minColumns} columnGap={columnGap}>
      {children}
    </FormGrid>
  );
};

export default ProFormGrid;
