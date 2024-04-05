import { Skeleton } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Inner = styled.div``;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const SkeletonList = () => {
  return (
    <Wrapper spacing={1}>
      <Inner>
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
      </Inner>
    </Wrapper>
  );
};

export default SkeletonList;
