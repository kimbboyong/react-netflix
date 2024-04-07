import { Skeleton } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
  overflow: hidden;
`;

export const List = styled.div`
  display: flex;
  height: 100%;
  gap: 15px;
  margin-bottom: 30px;
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
