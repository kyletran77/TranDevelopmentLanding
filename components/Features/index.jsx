import React from 'react'
import { BeginButton, Container, Left, LeftCaption, LeftDescription, LeftHeader, LeftHeading, LeftImg, LeftImgDiv, Numbers, Right, RightParagraph, RightSections, Section } from './Features.styled'
import Link from 'next/link'

function Features() {
  return (
    <Section>
        <Container>
            <Left>
                <LeftHeader>
                <LeftCaption>Why Tran Development</LeftCaption>
                <LeftHeading>Proven AI Results</LeftHeading>
                <LeftDescription>See how our AI-powered approach delivers measurable impact for organizations like yours</LeftDescription>
                </LeftHeader>
                   

            </Left>
            <LeftImg >
            <Link href="#contact-form" passHref><BeginButton>Schedule Your Free AI Audit</BeginButton></Link>
                    </LeftImg>
            <Right>
                <RightSections>
                    <Numbers>
                        <h2>42%</h2>
                        <p>Efficiency Gains</p>
                    </Numbers>
                    <RightParagraph>
                        Our AI workflow integrations helped UC Irvine research teams reduce data processing time by 42%, accelerating research timelines significantly.
                    </RightParagraph>
                </RightSections>
                <RightSections>
                    <Numbers>
                        <h2>3.2x</h2>
                        <p>ROI on AI Spend</p>
                    </Numbers>
                    <RightParagraph>
                        Clients implementing our AI solutions see an average of 3.2x return on their technology investment within the first year of deployment.
                    </RightParagraph>
                </RightSections>
                <RightSections>
                    <Numbers>
                        <h2>86%</h2>
                        <p>Data Accuracy</p>
                    </Numbers>
                    <RightParagraph>
                        Our AI-powered analytics platforms improved data accuracy from 47% to 86% for educational assessment tools, leading to more reliable student insights.
                    </RightParagraph>
                </RightSections>
            </Right>
        </Container>
    </Section>
  )
}

export default Features