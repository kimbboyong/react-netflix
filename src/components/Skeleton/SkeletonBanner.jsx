import React from "react";

import Skeleton from "@mui/material/Skeleton";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 56vh;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 0 20px;
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
    <Wrapper>
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
