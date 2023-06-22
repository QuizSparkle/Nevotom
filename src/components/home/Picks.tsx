import React from "react";
import HomeProduct from "./HomeProduct";

const products = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_efyxCR6QqVI8ljrKA23nkyPB3whn4ocSQ&usqp=CAU",
    name: "Iphone X",
    description: "an iphone for new generation",
    price: 1000,
    reward: true
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai",
    price: 3000,
    reward: false
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai",
    price: 3000,
    reward: true
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai",
    price: 3000,
    reward: false
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai",
    price: 3000,
    reward: true
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai ",
    price: 3000,
    reward: true
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai ",
    price: 3000,
    reward: true
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/88b9/766e/03822b66af978210cded29ec38902ace?Expires=1687737600&Signature=CMdu9k7lpR2aHCwiDsORBT87TBf5wzcIPEq3UgHALMmIpWHMTp3drN1MjFL-LjH57VNcxtA2jAuyM1d98-GL1-I2pju2MXstxbx0KMft7YPeXJAxMmqJN-xktqTaeLN6G9AdlgIV0Fq4DbetrnNKES1Pys1OX0FLQb6GaUQHPPkV0jr7Glafusn8rvKmmmMl8PUxA-UjQCi2BKjHpUpDHj9LhyxcQqho9S3mYSQgNbfKzwr3YGTVLiTOTDuN-3xTj2L2V1~ydPiW03SNFMQmwsDG2Hvpe4HpPT7OXvYcdf-QQQfE9JHDzDdvgDkx8ZecuvexJwtL4grdi1LMCGPUMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Brake System",
    description: "Part Number: 8-38-383-393, shape:Ai",
    price: 3000,
    reward: true
  },
];

const Picks = () => {
  return (
    <article className="px-10 py-16 pb-24">
      <div className="flex flex-col items-center gap-16">
        {/* top picks header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Top Picks For You
          </h1>
          <p className="text-sm text-gray-600">
            Find a bright ideal to suit your taste with our great selection of
            products
          </p>
        </div>
        {/* products */}
        <div
          className="flex h-max w-full flex-col justify-center 
        gap-4 space-x-4 overflow-x-auto overflow-y-auto md:flex-row
         md:justify-start
         scrollbar-thin scrollbar-track-slate-100 py-10 scrollbar-thumb-gray-500
         "
        >
          {products.map((product) => (
            <HomeProduct
              img={product.img}
              description={product.description}
              price={product.price}
              name={product.name}
              reward={product.reward}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Picks;
