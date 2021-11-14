import styled from "styled-components";

const StyledDonutGraph = styled.div`
  position: relative;
  .label {
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    &-wrapper {
      svg {
        display: inline-block;
        margin-right: 6px;
        width: 120px;
      }
      margin-top: 14px;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .content {
    margin-right: 12px;
  }
  .hovered {
    left: 30px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    z-index: 1000;
    stroke-width: 6px;
  }
  .donut-icon {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .active {
    border-radius: 30px;
  }
`;

export default StyledDonutGraph;
