import React from 'react';
import './index.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InfoContainer from '../InfoContainer';

const DefaultPanel = () => {
  const handleMove = (e) => {
    console.log(e);
  };
  return (
    <InfoContainer>
      <DragDropContext>
        <Droppable droppableId="456">
          {() => (
            <div className="scale-bar">
              <Draggable draggableId="123">{() => <div className="scale-button" />}</Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </InfoContainer>
  );
};

export default React.memo(DefaultPanel);
