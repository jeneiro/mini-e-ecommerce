import React from "react";
import { NavbarComponent } from "../components/navbar";
import { HomeCarousel } from "../components/home-carousel";
import { FooterComponent } from "../components/footer";


export const Home = () => {
  return (
    <div>
    <NavbarComponent></NavbarComponent>
    <HomeCarousel></HomeCarousel>
    <FooterComponent></FooterComponent>
    </div>
  );
};
