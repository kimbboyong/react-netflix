import React from "react";

import Skeleton from "@mui/material/Skeleton";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 56vh;
  padding: 0 20px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const SkeletonBanner = () => {
  return (
    <Wrapper spacing={1}>
      <Inner>
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={120}
          height={40}
        />
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={200}
        />
        <Content>
          <Skeleton
            sx={{
              bgcolor: "#595959",
            }}
            variant="rounded"
            width={"50%"}
            height={60}
          />
          <Skeleton
            sx={{
              bgcolor: "#595959",
            }}
            variant="rounded"
            width={"50%"}
            height={60}
          />
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default SkeletonBanner;
