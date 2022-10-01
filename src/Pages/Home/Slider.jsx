// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";

import "swiper/css/navigation";
import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import {NavLink }from 'react-router-dom';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider({texts, bgs}) {
  const slideData = [
    {
      id: 1,
      img: "https://apollo-singapore.akamaized.net/v1/files/4z7hzjflzfhl-IN/image;s=300x600;q=60",
      price: " 13,0000",
      text1: "In One Condition",
      days: "Today",
    },
    {
      id: 2,
      img: "https://apollo-singapore.akamaized.net/v1/files/jj3ixe96lyk12-IN/image;s=300x600;q=60",
      price: " 12,000",
      text1: "In One Condition",
      days: "Today",
    },
    {
      id: 3,
      img: "https://apollo-singapore.akamaized.net/v1/files/odi1smadblje-IN/image;s=300x600;q=60",
      price: " 11,500",
      text1: "In One Condition",
      days: "Today",
    },
    {
      id: 4,
      img: "https://apollo-singapore.akamaized.net/v1/files/j6ek330oy9ag3-IN/image;s=300x600;q=60",
      price: " 16,000",
      text1: "In One Condition",
      days: "2 days ago",
    },
    {
      id: 5,
      img: "https://apollo-singapore.akamaized.net/v1/files/9eenunrkkjh91-IN/image;s=300x600;q=60",
      price: " 15,500",
      text1: "In One Condition",
      days: "2 days ago",
    },
    {
      id: 6,
      img: "https://apollo-singapore.akamaized.net/v1/files/pvcvn95gees63-IN/image;s=300x600;q=60",
      price: " 13,0000",
      text1: "In One Condition",
      days: "3 days ago",
    },
    {
      id: 7,
      img: "https://apollo-singapore.akamaized.net/v1/files/mcct3f06zmao-IN/image;s=300x600;q=60",
      price: " 23,0000",
      text1: "In One Condition",
      days: "2 days ago",
    },
    {
      id: 8,
      img: "https://apollo-singapore.akamaized.net/v1/files/zf7cvb7yuie73-IN/image;s=300x600;q=60",
      price: " 43,0000",
      text1: "In One Condition",
      days: "2 days ago",
    },
    {
      id: 9,
      img: "https://apollo-singapore.akamaized.net/v1/files/3ze9sup5v9rx1-IN/image;s=300x600;q=60",
      price: " 53,0000",
      text1: "In One Condition",
      days: "3 days ago",
    },
    {
      id: 10,
      img: "https://apollo-singapore.akamaized.net/v1/files/j6ek330oy9ag3-IN/image;s=300x600;q=60",
      price: " 26,000",
      text1: "In One Condition",
      days: "3 days ago",
    },
    {
      id: 11,
      img: "https://apollo-singapore.akamaized.net/v1/files/9eenunrkkjh91-IN/image;s=300x600;q=60",
      price: " 25,500",
      text1: "In One Condition",
      days: "2 days ago",
    },
    {
      id: 12,
      img: "https://apollo-singapore.akamaized.net/v1/files/mcct3f06zmao-IN/image;s=300x600;q=60",
      price: " 13,3400",
      text1: "In One Condition",
      days: "3 days ago",
    },
  ];
  return (
    <>
      <Container maxW="container.xl"  bg={bgs} mt="10vh">
        <br />
        <HStack alignItems={"flex-start"} justifyContent="space-between">
          <Text fontSize={"25px"} mb="1rem ">
           {texts}
          </Text>
          <Text
            fontSize={"15px"}
            textDecoration={"underline"}
            fontWeight={"600"}
            mb="1rem "
          >
            <NavLink to="/product/6">
            view more
            </NavLink>
          </Text>
        </HStack>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          autoplay={{ delay: 3000 }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id}>

              <Box
                border={"1px solid #CFCDCD"}
                borderRadius="5 px"
                w="120%"
                p="10px 10px"
                >
                <NavLink to="/product/1">
                <AiOutlineHeart style={{ float: "right", fontSize: "25px" }} />
                <Image width={"70%"} m="auto" height="30vh" src={item.img} />
                <Box textAlign={"left"}>
                  <Text fontWeight={"700"} mt="8px">
                    ₹{item.price}
                  </Text>
                  <Text fontSize={"13px"} color="#B5AD7D">
                    {item.text1}
                  </Text>
                  <Text fontSize={"10px"} textAlign="right">
                    {item.days}
                  </Text>
                </Box>
              </NavLink>
              </Box>

            </SwiperSlide>
          ))}
        </Swiper>
        <br />
      </Container>
    </>
  );
}
