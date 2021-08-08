import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faq.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>SUBMIT</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Have any questions? Enter your email and our team will reach out.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
