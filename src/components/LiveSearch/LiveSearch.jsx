import React, { useEffect, useState } from "react";

import { useLocation, useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import "./LiveSearch.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "1px 1px 10px #bab4f1",

  "&:hover": {
    border: "1px solid #d1cfdc",
    boxShadow: "none",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: "inherit",
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [inpSearch, setInpSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    let currentParams = Object.fromEntries([...searchParams]);

    if (location.pathname === "/products") {
      setSearchParams({
        ...currentParams,
        _page: 1,
        q: inpSearch,
      });
    }
  }, [inpSearch]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={inpSearch}
        onChange={(e) => setInpSearch(e.target.value)}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default LiveSearch;
