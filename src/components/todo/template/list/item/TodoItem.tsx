import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';
import React from 'react';
import { Modal } from 'antd';
import styled, { css } from 'styled-components';
import { isEllipsis } from 'utils';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Date = styled.div<{ done: boolean }>`
  color: #119955;
  margin-right: 10px;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { done, text, id, date } = todo;
  const handleToggle = () => {
    toggleTodo(id);
  };

  const showModal = (flag: boolean) =>
    flag &&
    Modal.info({
      title: '더 보기',
      content: <p>{text}</p>,
      onOk() {},
    });

  const handleTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    showModal(isEllipsis(e));
  };
  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done} onClick={handleTextClick}>
        {text}
      </Text>
      <Date done={done}>{date}</Date>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
