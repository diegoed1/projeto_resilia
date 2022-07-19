import React, { useState } from "react";
import { Container, ContainerFilter, InfoText } from "./styles";
function ListInfo({
  quantity,
  filterOptions,
  selectedOption,
  setSelectedOption,
  clearCompleted,
}) {
  return (
    <Container>
      <InfoText variant={true}>{quantity} items left.</InfoText>
      <ContainerFilter>
        {filterOptions.map((item) => (
          <InfoText
            isSelected={item.id === selectedOption}
            key={item.id}
            onClick={() => item.filter() & setSelectedOption(item.id)}
          >
            {item.name}
          </InfoText>
        ))}
      </ContainerFilter>
      <InfoText
        variant={true}
        onClick={() =>
          clearCompleted() & setSelectedOption(filterOptions[0].id)
        }
      >
        Clear Completed
      </InfoText>
    </Container>
  );
}

export default ListInfo;