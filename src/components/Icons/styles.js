import lodash from 'lodash';
import { css } from 'styled-components';

export const themeCss = css`
    --icon-button-width: 40px;
    --icon-color: var(--theme-color);
    --icon-size: 20px;
    --icon-scale: 1;
`;

export const iconCss = css`
    & {
        ${themeCss}
    }
    & {
        --icon-scale: ${(ie: any) => lodash.get(ie, 'scale', null)};
        --icon-stroke-width: ${(ie: any) => lodash.get(ie, 'strokeWidth', null)};
        --icon-x: ${(ie: any) => lodash.get(ie, 'x', null)};
        --icon-y: ${(ie: any) => lodash.get(ie, 'y', null)};
    }
    svg {
        height: 100%;
        position: relative;
        object-fit: contain;
        object-position: center;
        stroke-width: var(--icon-stroke-width);
        width: calc(var(--icon-size) * var(--icon-scale));
        top: calc(var(--icon-y, 0) * 1px);
        left: calc(var(--icon-x, 0) * 1px);
        &.fill {
            fill: var(--icon-color, currentColor);
        }
        &.stroke {
            stroke: var(--icon-color, currentColor);
        }
    }
`;
