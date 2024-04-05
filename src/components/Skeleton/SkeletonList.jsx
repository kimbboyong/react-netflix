import { Skeleton } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  gap: 15px;
  min-width: 1200px;
  margin-bottom: 30px;
  /* @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const SkeletonList = () => {
  return (
    <Wrapper spacing={1}>
      <Skeleton
        sx={{
          bgcolor: "#595959",
          marginBottom: "15px",
        }}
        variant="rounded"
        width={200}
        height={40}
      />
      <List>
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={200}
        />
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={200}
        />
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={200}
        />
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={200}
        />
      </List>
    </Wrapper>
  );
};

export default SkeletonList;
