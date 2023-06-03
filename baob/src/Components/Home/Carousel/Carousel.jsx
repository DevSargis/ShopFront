import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Items'
import slider from './slider.json'
import "./CarouselCss/CarouselCss.css"
export default function CarouselComponent() {
    return (
      <Carousel
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          className: "carouselNavButtonsProps"
        }}
        navButtonsWrapperProps={{
          style: {
            zIndex: 1,
          },
        }}
        indicatorPosition="bottom"
        indicatorContainerProps={{
          className: "carouselIndicatorContainerProps",
        }}
        indicatorIconButtonProps={{
         className : "carouselindicatorIconButtonProps",
        }}
      >
        {slider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    );
  }