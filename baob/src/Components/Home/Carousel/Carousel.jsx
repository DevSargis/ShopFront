import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Items'
import slider from './slider.json'

export default function CarouselComponent() {
    return (
      <Carousel
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            color: "white",
            borderRadius: "50%",
            border: "1px solid white",
            backgroundColor: "transparent",
            "&:hover": {
                backgroundColor: "lightgray",
              },
          },
        }}
        navButtonsWrapperProps={{
          style: {
            zIndex: 1,
          },
        }}
        indicatorPosition="bottom"
        indicatorContainerProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            marginBottom: "10px",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            zIndex: 1,
            color: "white",
            margin: "0 5px",
  
          },
        }}
      >
        {slider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    );
  }