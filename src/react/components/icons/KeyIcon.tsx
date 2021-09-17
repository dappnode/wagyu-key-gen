import { Ref, SVGAttributes, forwardRef } from 'react';

import React from 'react';

export const KeyIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="252" height="252" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect x="0.5" y="0.5" width="251" height="251" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="translate(0.04 0.02) scale(0.0018 0.0018)"/>
        </pattern>
        <image id="image0" width="520" height="520" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  ),
);
