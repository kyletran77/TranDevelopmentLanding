import React, { useState } from "react";
import data from "../../data/faqData";
import {
  Container,
  Faq,
  FaqAnswer,
  FaqHeader,
  FaqHeaderMobile,
  FaqQuestion,
  FaqsSection,
  LeftSection,
  MinusIcon,
  PlusIcon,
  QuestionWrapper,
  Section,
} from "./FAQ.styled";
import styled from "styled-components";

const HighlightTag = styled.span`
  background-color: #00ffb0;
  color: #272782;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  margin-left: 10px;
  vertical-align: middle;
`;

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Section>
      <Container>
        <FaqHeader>Frequently Asked Questions</FaqHeader>
        {data.map((item, index) => {
          return (
            <FaqsSection key={item.id}>
              <LeftSection>
                <Faq>
                  <QuestionWrapper role="button" onClick={() => toggle(index)} tabIndex={0}>
                    <FaqQuestion tabIndex={0}>
                      {item.question}
                      {item.id === 3 && <HighlightTag>FREE</HighlightTag>}
                      {clicked === index ? <MinusIcon aria-label="Collapse FAQ answer"
                aria-expanded="true"/> : <PlusIcon  aria-label="Expand FAQ answer"
                aria-expanded="false"/>}{" "}
                    </FaqQuestion>
                  </QuestionWrapper>
                  {clicked === index ? (
                    <FaqAnswer>{item.answer}</FaqAnswer>
                  ) : null}
                </Faq>
              </LeftSection>
            </FaqsSection>
          );
        })}
      </Container>
    </Section>
  );
};

export default FAQ;
