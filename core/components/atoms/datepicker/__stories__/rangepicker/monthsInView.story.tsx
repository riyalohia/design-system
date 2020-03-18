import * as React from 'react';
import DatePicker from '@/components/atoms/datepicker';
import Card from '@/components/atoms/card';

// CSF format story
export const monthsInView = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    // @ts-ignore
    <div style={style}>
      {Array.from([1, 2, 3], x => (
        <Card
          shadow="light"
          style={{
            marginTop: '20px',
            maxWidth: `${x * 330}px`,
            alignSelf: 'flex-start'
          }}
        >
          <DatePicker
            rangePicker={true}
            monthsInView={x}
            startDate={new Date(2019, 11, 3)}
            endDate={new Date(2020, x - 2, 11)}
            yearNav={2019}
            monthNav={11}
          />
        </Card>
      ))}
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar/Rangepicker' };
