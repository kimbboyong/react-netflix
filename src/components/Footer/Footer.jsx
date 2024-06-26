import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`;

const ContainerInner = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding: 30px 20px;
`;

const LinkBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const LinkBoxList = styled.li`
  flex-basis: 25%;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
`;

const FooterLink = styled.a`
  display: block;
  height: 100%;
`;

const Footer = (props) => {
  return (
    <Container>
      <ContainerInner>
        <LinkBox>
          <LinkBoxList>
            <FooterLink href="/">화면 해설</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">고객 센터</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">기프트카드</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">미디어센터</FooterLink>
          </LinkBoxList>

          <LinkBoxList>
            <FooterLink href="/">투자 정보(IR)</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">입사 정보</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">이용 약관</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">개인정보</FooterLink>
          </LinkBoxList>

          <LinkBoxList>
            <FooterLink href="/">법적 고지</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">쿠키 설정</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">회사 정보</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">문의하기</FooterLink>
          </LinkBoxList>
        </LinkBox>

        <div style={{ fontSize: "12px" }}>
          상업용 사이트가 아닌 개인 포트폴리오 사이트입니다.{" "}
        </div>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
