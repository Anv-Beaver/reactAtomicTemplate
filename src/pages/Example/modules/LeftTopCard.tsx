import { RectangleCard } from "../atoms/RectangleCard";
import {Tap, MenuMax, ListItems,  Text, TextElementsTitle, } from "../atoms/LeftTopCard"
import React, { useState } from 'react';

export const LeftTopCard = ({}) => {
  const [titles, setTitle] = useState(["가나다라마바사", "아자차카타파하", "이이비씨디엪", "닥스훈트 말티즈", "치와와 포메라니안"]);
  const [activeTitle, setActiveTitle] = useState('외계인 실존설');

  const handleClick = (event: any) =>{
    const listItems = document.getElementsByClassName('listItem') as HTMLCollectionOf<HTMLElement>;
    if(event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      setActiveTitle('외계인 실존설');
    }
    else{
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = null!;
      }
      event.currentTarget.style.backgroundColor = '#77a7f5';
      setActiveTitle(event.currentTarget.innerText);
    }
  }

  console.log(activeTitle)
  return (
      <RectangleCard>
        <MenuMax>
          <ListItems>
          { titles.map((title, index) => {
            return (          
                <TextElementsTitle className="listItem" key={index} onClick={handleClick}>{title}</TextElementsTitle>
              ) 
          })}
          </ListItems>
        </MenuMax>

        <Text style={{marginTop: "16px", marginBottom: "16px"}}>{activeTitle}</Text>
        <div style={{fontSize: "14px"}}>
          외계인의 존재에 대한 진지한 고찰은 단 하나의 사실에서 시작된다. 바로
          우리가 존재한다는 것이다.
        </div>
      </RectangleCard>
    );
  };