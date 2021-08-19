import React from 'react';
import styled from 'styled-components';
import { getFormattedTime } from 'utils';
import { TIME_FORMAT } from 'utils/constants';

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const TodoHead = () => {
  const dayString = getFormattedTime(TIME_FORMAT['EN']);

  return (
    <TodoHeadBlock>
      <DateText>{dayString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
