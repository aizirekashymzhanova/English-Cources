import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Container, Grid, Pagination } from "@mui/material";
import { useProductContext } from "../../../contexts/ProductContextProvider";
import OneProduct from "../OneProduct/OneProduct";
import { PRODUCTS_LIMIT } from "../../../helpers/consts";
import Filter from "../Filter/Filter";
import MySkeleton from "../../Skeleton/MySkeleton";

const maxSliderValue = 200;
const minSliderValue = 50;

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  // FILTER

  const [type, setType] = useState(searchParams.get("type") || "all");

  //SLIDER
  const [slider, setSlider] = useState(
    +searchParams.get("price_gte") || +minSliderValue
  );

  const paramsWithType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: +page,
      type: type,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: +page,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [page, type, slider]);

  //reset
  const handleReset = () => {
    setType("all");
    setSlider(minSliderValue);
    setSearchParams({
      _limit: PRODUCTS_LIMIT,
      _page: +page,
      price_gte: slider,
      q: "",
    });
  };

  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ margin: "30px auto" }}>
          <Grid item xs={12} sm={1} md={1}>
            <Filter
              setPage={setPage}
              type={type}
              setType={setType}
              slider={slider}
              setSlider={setSlider}
              maxSliderValue={maxSliderValue}
              minSliderValue={minSliderValue}
              handleReset={handleReset}
            />
          </Grid>
          <br />
          <Grid item xs={12} sm={11} md={11}>
            <Grid container spacing={2}>
              {products && products.length > 0 ? (
                products.map((item) => <OneProduct key={item.id} item={item} />)
              ) : (
                <MySkeleton />
              )}
            </Grid>
          </Grid>
          <div style={{ margin: "50px auto", textAlign: "center" }}>
            <Pagination
              count={+pageTotalCount}
              sx={{ display: "inline-block" }}
              onChange={(event, pageVal) => setPage(pageVal)}
              page={+page}
            />
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default ProdList;
