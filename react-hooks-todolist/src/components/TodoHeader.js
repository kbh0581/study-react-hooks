import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding : 48px 32px 32px 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
      }
`;



function TodoHeader(){
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    const todoList = useTodoState();
    const count = todoList.filter((item) => !item.done).length;
    console.log(todoList);
    return <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">오늘 할일 {count}건</div>
    </TodoHeadBlock>
}



export default TodoHeader;