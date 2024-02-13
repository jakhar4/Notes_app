import React, {useState} from "react";
import ButtonGroup from '@mui/material-next/ButtonGroup';
import { Button } from "@mui/material-next";

function Header(props) {
  const [wallNum,setWallNum] = useState(Math.floor(1));
  function changeWall(){
    setWallNum(Math.floor((Math.random())*3));
    props.changewall(wallNum);
  }
  return (
    <header>
      <h1>Keeper</h1>
      <ButtonGroup
        className="floatRight buttongroup"
        color="primary"
        disabled={false}
        orientation="horizontal"
        size="large"
        variant="elevated"
      >
        <Button variant="filled" onClick={changeWall}>Random</Button><Button style={{color:"white", fontWeight:"900"}}>{wallNum}</Button>
      </ButtonGroup>
    </header>
  );
}

export default Header;
