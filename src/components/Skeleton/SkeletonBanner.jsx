import React from "react";

import Skeleton from "@mui/material/Skeleton";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 56vh;
  margin-bottom: 50px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const SkeletonBanner = ({ ModalHeight, ModalMargin }) => {
  return (
    <Wrapper style={{ height: ModalHeight, marginBottom: ModalMargin }}>
      <Inner>
        <Skeleton
          sx={{
            bgcolor: "#595959",
          }}
          variant="rounded"
          width={"100%"}
          height={"100%"}
        />
      </Inner>
    </Wrapper>
  );
};

export default SkeletonBanner;
