import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import TodoList from './TodoList';
import { MdDone, MdDelete } from 'react-icons/md';
import {useTodoDispatch,useTodoState} from '../TodoContext'


const Remove = styled.div`
    display:flex;
    align-item:center;
    justfy-content:center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
    display: none;
`


const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    /* 올라올때 Remove 버튼 활성화  */
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;



function TodoItem({id,done,text}){
    const dispatcher = useTodoDispatch();
    const onTogle = (id) => {
        dispatcher({
            type:"TOOGLE",
            id
        })
    }
    
    // dispatcher({
    //     id,
    //     type:"DELETE"
    // })
    return <TodoItemBlock key={id}>
        <CheckCircle done={done} onClick={()=>onTogle(id)}> {done && <MdDone/>}
        </CheckCircle>
        <Text done={done}>{text}</Text>
       <Remove onClick={(e)=>{
           dispatcher({
               type:"DELETE",
               id
           })
        }}> 
         <MdDelete />
       </Remove>
      
    </TodoItemBlock>
   
    
}



export default React.memo(TodoItem);