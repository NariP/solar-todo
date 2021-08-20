import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';
import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { isEllipsis, showModal } from 'utils';

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { done, text, id, date } = todo;
  const [isTextOverflow, setIsTextOverflow] = useState<boolean>(false);

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    isEllipsis(e) && setIsTextOverflow(true);
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    isEllipsis(e) && setIsTextOverflow(false);
  };

  const handleTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    isEllipsis(e) && showModal(text);
  };
  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text
        done={done}
        isTextOverflow={isTextOverflow}
        onClick={handleTextClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {text}
      </Text>
      <Date done={done}>{date}</Date>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

interface IStyledProp {
  done: boolean;
  isTextOverflow?: boolean;
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
  cursor: pointer;
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

const CheckCircle = styled.div<IStyledProp>`
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

const Text = styled.div<IStyledProp>`
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
  ${props =>
    props.isTextOverflow &&
    css`
      cursor: pointer;
    `}
`;

const Date = styled.div<IStyledProp>`
  color: #119955;
  margin-right: 10px;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
export default React.memo(TodoItem);
