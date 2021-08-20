import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DatePicker } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useDatepicker, useInputs } from 'utils/hooks';
import { validationCheck, getKST } from 'utils';

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: {
    date: string;
    id: number;
    text: string;
    done: boolean;
  }) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const { value, isFocus, handleChange, handleFocus, handleBlur, setValue } =
    useInputs();
  const { date, disabledDate, handleDateChange } = useDatepicker();
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const textLengthWarn = (value.length >= 200 || !value.length) && !isFocus;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // 새로고침 방지
    if (validationCheck(value)) {
      setErrorMessage(validationCheck(value));
      setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
    } else {
      createTodo({
        id: nextId,
        text: value,
        done: false,
        date,
      });
      incrementNextId(); // nextId 하나 증가
      setValue(''); // input 초기화
    }
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <ValueLengthText error={textLengthWarn}>
            {value.length} / 200
          </ValueLengthText>
          <InputSection>
            <Input
              autoFocus
              placeholder="What's need to be done?"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={value}
            />
            <DatePicker
              disabledDate={disabledDate}
              defaultValue={moment(getKST(), 'YYYY-MM-DD')}
              onChange={handleDateChange}
            />
            <CircleButton>
              <PlusCircleOutlined />
            </CircleButton>
          </InputSection>
          <ErrorText>{errorMessage}</ErrorText>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};
const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueLengthText = styled.div<{ error: boolean }>`
  color: ${props => (props.error ? '#ff8269' : '#999')};
`;

const ErrorText = styled.div`
  color: #ff8269;
  margin-top: 5px;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;
const InputSection = styled.section`
  display: flex;
`;
const Input = styled.input`
  padding: 12px;
  border: solid #dddddd;
  border-width: 1px 0 1px 1px;
  width: 90%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;
export default React.memo(TodoCreate);
