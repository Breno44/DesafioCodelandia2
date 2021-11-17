import styled from "styled-components";
import Wallpaper from "./assets/img/wallpaper.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 60px;
`;

export const ContainerBanner = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  width: 1440px;
  height: 380px;
  background-image: url(${Wallpaper});
  background-size: cover;
  background-position: top;
  filter: brightness(50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  margin-bottom: 70px;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1280px;
  }

  @media (max-width: 800px) {
    width: 410px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  font-size: 32px;
  top: 125px;
  left: 100px;

  @media (max-width: 800px) {
    left: 20px;
    font-size: 28px;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 185px;
  left: 100px;
  width: 460px;
  font-size: 18px;
  line-height: 196%;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 800px) {
    width: 360px;
    left: 20px;
    font-size: 16px;
  }
`;

export const Main = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1280px;
  }

  @media (max-width: 800px) {
    width: 360px;
  }
`;

export const TitleMain = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 15px;
  font-weight: normal;

  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const SubtitleMain = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const Shoes = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1280px;
  }

  @media (max-width: 800px) {
    width: 410px;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 250px;
  background-color: ${(props) => props.theme.colors.bgCard};
  border-radius: 8px;
  margin-bottom: 50px;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 310px;
    height: 200px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.title};
  color: ${(props) => props.theme.colors.white};
`;
