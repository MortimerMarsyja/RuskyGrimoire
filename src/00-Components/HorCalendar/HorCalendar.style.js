import styled from 'styled-components';
import makeSpace from '../../06-Utils/spacing-function/index.ts';


const StyledHorCalendar = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    margin-top: ${makeSpace('small')};
    margin-bottom: ${makeSpace('small')};
    p{
        display: flex;
        width: 100%;
    }
    button{
        :hover{
            cursor:pointer;
        }
    }
    .calendar-body{
        margin:0 auto;
        max-width: 90%;
        &__cell-wrapper{
            display:flex;
            flex-wrap: wrap;
        }
    }
    .calendar-header{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        p{
            width:auto !important;
        }
    }
    .hor-calendar-cell{
        padding:9px;
        font-size: 12px;
        border:1px solid #ccc;
        width:191px;
        height:60px;
        background-color:red;
    }
    .isToday{
        color:blue;
        font-weight:bold;
    }
    .isSelected{
        background-color:green;
    }
`;

export default StyledHorCalendar;
